import Error from "../error";
import styles from "./blog.module.css";
import BlogPostCard from "@/components/blog/BlogPostCard/BlogPostCard";
import { getPosts } from "@/lib/data";

// Fetch with an API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")

//   if (!res.ok) {
//     throw new Error("Something went wrong")
//   }

//   return res.json()
// }

export default async function Blog() {

  // Fetch without an API
  const posts = await getPosts()

  // Fetch with an API
  // const posts = await getData()

  return (
    <div className={styles.container}>
      {posts.map((post) => (
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
