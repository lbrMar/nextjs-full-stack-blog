"use server";

import { connectToDb } from "./utils";
import { BlogPost } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "@/lib/auth"

export const addBlogPost = async (formData) => {
  // const title = formData.get("title")
  // const description = formData.get("description")
  // const image = formData.get("image")
  // const userId = formData.get("userId")
  // const slug = formData.get("slug")
  
  const { title, description, image, userId, slug } = Object.fromEntries(formData)

  try {
    connectToDb()

    const newBlogPost = new BlogPost({
      title,
      description,
      image,
      userId,
      slug
    })

    await newBlogPost.save()
    console.log("Blog post created", newBlogPost)
    revalidatePath("/blog")
  } catch (error) {
    console.log("Error posting blog post", error)
  }

  console.log(title, description, image, userId, slug)
}

export const deleteBlogPost = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    connectToDb()

    await BlogPost.findByIdAndDelete(id)

    console.log("Blog post deleted")
    revalidatePath("/blog")
  } catch (error) {
    console.log("Error deleting blog post", error)
  }
}

export const handleGitHubLogin = async () => {
  "use server"
  await signIn("github")
}

export const handleLogOut = async () => {
  "use server"
  await signOut()
}
