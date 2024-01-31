'use server';

import { revalidatePath } from 'next/cache';
import { Post, User } from './models';
import { connectToDB } from './utils';
import { signIn, signOut } from './auth';
import bcrypt from 'bcryptjs';

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newPost = new Post({ title, desc, slug, userId });
    await newPost.save();
    console.log('Post saved');
    revalidatePath('/blog');
  } catch (error) {
    console.log(error);
    throw new Error(`Error connecting to DB`);
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Post.findByIdAndDelete(id);
    console.log('Post deleted');
    revalidatePath('/blog');
  } catch (error) {
    console.log(error);
    throw new Error(`Error connecting to DB`);
  }
};

export const handleGithubLogin = async () => {
  'use server';
  await signIn('github');
};

export const handleGithubLogout = async () => {
  'use server';
  await signOut('github');
};

export const register = async (previousState, formData) => {
  const { username, email, password, passwordRepeat, img } =
    Object.fromEntries(formData);

  if (passwordRepeat !== password) {
    return { error: 'Password does not match' };
  }

  try {
    await connectToDB();
    const user = await User.findOne({ username });
    if (user) {
      console.log('User already exists');
      return { error: 'User already exists' };
    }
  } catch (error) {
    console.log(error);
    throw new Error('It could not be confirmed with this user exists');
  }

  try {
    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log('NewUser saved');

    return { success: true };
  } catch (error) {
    console.log(error);
    throw new Error('Could not register');
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes('CredentialsSignin')) {
      return { error: 'Invalid Username or Password' };
    }

    throw err;
  }
};
