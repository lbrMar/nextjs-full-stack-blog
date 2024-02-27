import styles from './home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Industry</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={styles.btnContainer}>
          <button>Learn More</button>
          <button>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt='brand images' fill />
        </div>
      </div>
      <div className={styles.imageContainer}>
      </div>
    </div>
  );
}
