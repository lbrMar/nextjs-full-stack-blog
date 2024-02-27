import styles from "./about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={`${styles.imageContainer}`}>
      <Image src="/about.png" alt="about iamge" fill />
    </div>
  );
}
