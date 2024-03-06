import styles from "./AdminBlogPosts.module.css"
import { getBlogPosts } from "@/lib/data"
import { deleteBlogPost } from "@/lib/actions"
import Image from "next/image"

export default async function AdminBlogPosts() {

  const blogPosts = await getBlogPosts()

  return (
    <div className={styles.container}>
      <h1>Admin Blog Posts</h1>
      {blogPosts.map((blogPost) => (
        <div 
          className={styles.blogPost}
          key={blogPost.id}
        >
          <div className={styles.blogPostContainer}>
            <Image 
              className={styles.blogPostImage}
              src={blogPost.image} 
              alt={blogPost.title} 
              width={100}
              height={100}
            />
            <div className={styles.blogPostInfo}>
              <h4>{blogPost.title}</h4>
              <p>{blogPost.description}</p>
              <form action={deleteBlogPost}>
                <input type="hidden" name="id" value={blogPost.id} />
                <button className="btn-secondary">Delete</button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
