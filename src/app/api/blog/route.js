import { Post } from '@/lib/models';
import { connectToDB } from '@/lib/utils';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  try {
    connectToDB();
    const post = await Post.find();

    return NextResponse.json(post)

  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data...');
  }
};
