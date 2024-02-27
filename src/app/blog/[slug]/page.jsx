import styles from "./singlePost.module.css";
import Image from "next/image";

export default function Post() {
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
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image 
            className={styles.avatar}
            src="/noavatar.png" 
            alt="avatar image"
            width={100}
            height={100}
          />
          <div className={styles.detailContainer}>
            <div className={styles.detailContent}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>User name</span>
            </div>
            <div className={styles.detailContent}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>2024/01/01</span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </div>
      </div>
    </div>
  );
}
