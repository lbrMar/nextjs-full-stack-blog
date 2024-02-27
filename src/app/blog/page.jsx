import Error from "../error";
import styles from "./blog.module.css";
import BlogPostCard from "@/components/blog/BlogPostCard/BlogPostCard";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json()
}

export default async function Blog() {

  const posts = await getData()

  console.log(posts)

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
