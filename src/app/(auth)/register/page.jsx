"use client"

import styles from "./RegisterPage.module.css"
import { registerUser } from "@/lib/actions";

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <form 
        action={registerUser}
        className={styles.formContainer}
      >
        <input 
          className={styles.input}
          type="text" 
          name="userName" 
          placeholder="User Name"
        />
        <input 
          className={styles.input}
          type="text" 
          name="email" 
          placeholder="Email Address"
        />
        <input 
          className={styles.input}
          type="password" 
          name="password" 
          placeholder="Password"
        />
        <input 
          className={styles.input}
          type="password" 
          name="passwordRepeat" 
          placeholder="Password Again"
        />
        <br />
        <div className={styles.btnContainer}>
          <input 
            className="btn-primary"
            type="submit" 
            value="Register" 
          />
          <button 
            className="btn-secondary"
            >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
