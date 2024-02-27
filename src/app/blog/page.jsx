import styles from "./blog.module.css";
import BlogPostCard from "@/components/blog/BlogPostCard/BlogPostCard";

export default function Blog() {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <BlogPostCard />
      </div>
      <div className={styles.post}>
        <BlogPostCard />
      </div>
      <div className={styles.post}>
        <BlogPostCard />
      </div>
      <div className={styles.post}>
        <BlogPostCard />
      </div>
    </div>
  );
}
