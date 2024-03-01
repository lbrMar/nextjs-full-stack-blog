import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/blog/PostUser/PostUser";
import { Suspense } from "react";
import { getBlogPost } from "@/lib/data";

export const generateMetadata = async ({ params}) => {
  const { slug } = params;
  const blogPost = await getBlogPost(slug);

  return {
    title: blogPost?.title,
    description: blogPost?.desc,
  };
};

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
  const blogPost = await getBlogPost(slug)

  // Fetch with an API
  // const post = await getData(slug)

  return (
    <div className={styles.container}>
      <div className={`{styles.imgContainer} md-dec`}>
        {blogPost.image && (
          <Image 
          src={blogPost.image}
          alt="blog image"
          width={200}
          height={400}
            className={styles.image}
        />
      )}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{blogPost?.title}</h1>
        <div className={styles.detail}>
          <div className={styles.detailContainer}>
            {blogPost && (
              <Suspense fallback={<div>...loading</div>}>
                <PostUser userId={blogPost.userId}/>
              </Suspense>
            )}
            <div className={styles.detailContent}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>
                {blogPost.createdAt.toString().slice(4, 16)}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          {blogPost?.desc}
        </div>
      </div>
    </div>
  );
}
