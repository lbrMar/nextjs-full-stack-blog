import { connectToDb } from "@/lib/utils";
import { BlogPost } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  
  try {
    connectToDb();
    const blogPost = await BlogPost.findOne({ slug })
    return NextResponse.json(blogPost);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch data", error);
  }
}

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  
  try {
    connectToDb();
    const blogPost = await BlogPost.findOneAndDelete({ slug })
    return NextResponse.json("Post Deleted", blogPost);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete data", error);
  }
}
