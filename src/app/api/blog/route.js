import { connectToDb } from "@/lib/utils";
import { BlogPost } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async () => {
  
  try {
    connectToDb();
    const blogPosts = await BlogPost.find()
    return NextResponse.json(blogPosts);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch data", error);
  }
}
