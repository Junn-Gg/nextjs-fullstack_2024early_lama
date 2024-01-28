import { Post } from '@/lib/models';
import { connectToDB } from '@/lib/utils';
import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    connectToDB();
    const post = await Post.findOne({ slug });

    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data...');
  }
};

export const DELETE = async (req, { params }) => {
  const { slug } = params;

  try {
    connectToDB();
    await Post.deleteOne({ slug });

    return NextResponse.json('Post deleted successfully');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to delete data...');
  }
};
