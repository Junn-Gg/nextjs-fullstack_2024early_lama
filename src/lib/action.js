'use server';

import { revalidatePath } from 'next/cache';
import { Post } from './models';
import { connectToDB } from './utils';

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
