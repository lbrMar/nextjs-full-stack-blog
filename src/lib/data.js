import { BlogPost, User } from "./models"
import { connectToDb } from "./utils"
import { unstable_noStore } from "next/cache"

// Test data for fetch without api
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" }
// ]

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 1 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
//   { id: 5, title: "Post 5", body: "......", userId: 2 },
//   { id: 6, title: "Post 6", body: "......", userId: 2 }
// ]

// export const getPosts = async () => {
//   return posts   
// }

// export const getPost = async (id) => {
//   return posts.find((post) => post.id === parseInt(id));
// }

// export const getUser = async (id) => {
//   return users.find((user) => user.id === parseInt(id));
// }

export const getBlogPosts = async () => {
  try {
    connectToDb()
    const blogPosts = await BlogPost.find()
    return blogPosts
  } catch (error) {
    console.log(`Error fetching blog posts: ${error}`)
    throw new Error(error)
  }
}

export const getBlogPost = async (slug) => {
  try {
    connectToDb()
    const blogPost = await BlogPost.findOne({ slug: slug })
    return blogPost
  } catch (error) {
    console.log(`Error fetching blog post: ${error}`)
    throw new Error(error)
  }
}

export const getUsers = async () => {
  unstable_noStore();
  try {
    connectToDb()
    const users = await User.find()
    return users
  } catch (error) {
    console.log(`Error fetching users: ${error}`)
    throw new Error(error)
  }
}

export const getUser = async (id) => {
  try {
    connectToDb()
    const user = await User.findById(id)
    return user
  } catch (error) {
    console.log(`Error fetching user: ${error}`)
    throw new Error(error)
  }
}
