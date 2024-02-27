import styles from "./contact.module.css";
import Image from "next/image";
import ContactForm from "@/components/contact/contactform/ContactForm";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="/contact.png" 
          alt="contact image" 
          width={500} 
          height={500} 
          className="lg-dec"
        />
      </div>
      <div className={styles.formContainer}>
        <ContactForm />
      </div>
    </div>
  );
}
