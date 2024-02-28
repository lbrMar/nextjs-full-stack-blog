import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/blog/PostUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// Fetch with an API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

//   if (!res.ok) {
//     throw new Error("Something went wrong")
//   }

//   return res.json()
// }

export default async function Post({ params }) {

  const {slug} = params

  // Fetch without an API
  const post = await getPost(slug)
  console.log(post)

  // Fetch with an API
  // const post = await getData(slug)

  return (
    <div className={styles.container}>
      <div className={`{styles.imgContainer} md-dec`}>
        <Image 
        src="/blogImgTwo.jpg" 
        alt="blog image"
        width={200}
        height={400}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image 
            className={styles.avatar}
            src="/noavatar.png" 
            alt="avatar image"
            width={100}
            height={100}
          />
          <div className={styles.detailContainer}>
            {post && (
              <Suspense fallback={<div>...loading</div>}>
                <PostUser userId={post.userId}/>
              </Suspense>
            )}
            <div className={styles.detailContent}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>2024/01/01</span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          {post?.body}
        </div>
      </div>
    </div>
  );
}
