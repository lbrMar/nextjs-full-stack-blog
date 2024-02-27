import styles from './home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Creative</h1>
          <h1 className={styles.title}>Thoughts</h1>
          <h1 className={styles.title}>Agency</h1>
        </div>
        <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={styles.btnContainer}>
          <Link href="/about">
            <button className='btn-primary'>Learn More</button>
          </Link>
          <Link href="/contact">
            <button className='btn-secondary'>Contact</button>
          </Link>
        </div>
        <div className={styles.brandsContainer}>
          <Image 
            src="/brands.png" 
            alt='brand images' 
            width={400}
            height={40}
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={`${styles.imageContainer} lg-dec`}>
        <Image 
          src="/hero.gif" 
          alt='hero image' 
          width={500}
          height={400}
          className={styles.heroImg} 
        />
      </div>
    </div>
  );
}
