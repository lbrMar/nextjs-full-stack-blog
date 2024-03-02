// import Error from "../error";
import styles from "./blog.module.css";
import BlogPostCard from "@/components/blog/BlogPostCard/BlogPostCard";
import { getBlogPosts } from "@/lib/data";

export const metadata = {
  title: "Blog",
  description: "Blog page",
};

// Fetch with an API
// const getData = async () => {
//   const res = await fetch("https://localhost:3000/api/blog")

//   if (!res.ok) {
//     throw new Error("Something went wrong")
//   }

//   return res.json()
// }

export default async function Blog() {

  // Fetch without an API
  // const posts = await getPosts()

  // Fetch with an API
  // const posts = await getData()
  
  // Fetch with Mongo
  const blogPosts = await getBlogPosts()
  console.log(blogPosts)
  

  return (
    <div className={styles.container}>
      {blogPosts.map((post) => (
        <div 
          key={post.id}
          className={styles.postContainer}
        >
          <BlogPostCard post={post} />
        </div>
      ))}
    </div>
  );
}
