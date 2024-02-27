import styles from "./contactform.module.css";

export default function ContactForm() {
  return (
    <div>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Name and Surname" />
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Phone Number" />
        <textarea 
          name="" 
          id="" 
          cols="30" 
          rows="10" 
          placeholder="Message"
        >
        </textarea>
        <button className="btn-primary">Send</button>
      </form>
    </div>
  )
}
