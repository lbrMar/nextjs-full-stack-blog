import styles from "./about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.paragraph}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h3>10 K+</h3>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h3>10 K+</h3>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h3>10 K+</h3>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={`${styles.imageContainer} lg-dec`}>
        <Image src="/about.png" alt="about iamge" fill />
      </div>
    </div>
  );
}
