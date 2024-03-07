"use server";

import { connectToDb } from "./utils";
import { BlogPost } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "@/lib/auth"
import { User } from "./models";
import bcrypt from "bcryptjs"

export const addBlogPost = async (previousState, formData) => {
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
    revalidatePath("/admin")
  } catch (error) {
    console.log("Error posting blog post", error)
    return { error: "Error posting blog post" }
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
    revalidatePath("/admin")
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

export const registerUser = async (previousState, formData) => {
  "use server"

  const { userName, email, password, passwordRepeat, image } = Object.fromEntries(formData)

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" }
  }

  try {
    connectToDb()

    const user = await User.findOne({ userName })

    if (user) {
      return { error: "User name already exists" }
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log("Hashed password while registering user", hashedPassword)
    
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
      image,
    })

    await newUser.save()

    console.log("User created", newUser)

    return { success: true }
  } catch (error) {
    console.log("Error creating user", error)
    return { error: "Error creating user" }
  }
}

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    connectToDb()

    await BlogPost.deleteMany({ userId: id })
    await User.findByIdAndDelete(id)

    console.log("User deleted")
    revalidatePath("/admin")
  } catch (error) {
    console.log("Error deleting user", error)
  }
}

export const addUser = async (previousState, formData) => {
  const { userName, email, image, password, isAdmin } = Object.fromEntries(formData)

  try {
    connectToDb()

    const newUser = new User({
      userName,
      email,
      image,
      password,
      isAdmin
    })

    await newUser.save()
    console.log("Blog post created", newUser)
    revalidatePath("/admin")
  } catch (error) {
    console.log("Error adding new user", error)
  }

  console.log(newUser)
}

export const credentialsLogin = async (previousState, formData) => {
  "use server"

  const { userName, password } = Object.fromEntries(formData)
  console.log("Credentials login", userName, password)

  try {
    connectToDb()
    await signIn("credentials", { userName, password })
    return { success: true }
  } catch (error) {
    console.log("Error in action.js credentials login", error)

    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" }
    }
    throw error
  }
}
