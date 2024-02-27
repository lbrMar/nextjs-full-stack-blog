import styles from "./blogpostcard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BlogPostCard({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="/blogImgOne.jpg" 
          alt="gopher image" 
          width={480} 
          height={360} 
          className={styles.image}
        />
        <span className={styles.date}>2024/01/01</span>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.description}>{post.body}</p>
        <Link 
          className={styles.blogLink}
          href="/blog/post"
        >
          READ MORE
        </Link>
      </div>
    </div>
  )
}
