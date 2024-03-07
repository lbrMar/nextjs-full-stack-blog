"use client"

import styles from "./AdminUsersForm.module.css"
import { useFormState } from "react-dom"
import { addUser } from "@/lib/actions"

export default function AdminUsersForm() {

  const [state, formAction] = useFormState(addUser, undefined)

  return (
    <div className={styles.formContainer}>
      <h1>Add User</h1>
      <form action={formAction}>
        <label className={styles.lableContainer}>
          User Name
          <input 
            className={styles.input}
            type="text" 
            name="userName" 
            placeholder="User name"
          />
        </label>
        <label className={styles.lableContainer}>
          Email
          <input 
            className={styles.input}
            type="text" 
            name="email" 
            placeholder="Email address"
          />
        </label>
        <label className={styles.lableContainer}>
          Is user an admin?
          <label className={styles.radioLabel} for="option1">True</label>
          <input type="radio" id="True" name="isAdmin" value="true" />
          <label className={styles.radioLabel} for="option2">False</label>
          <input type="radio" id="False" name="isAdmin" value="false" />
        </label>
        <label className={styles.lableContainer}>
          Password
          <input 
            className={styles.input}
            type="text" 
            name="password" 
            placeholder="Password"
          />
        </label>
        <label className={styles.lableContainer}>
          Password Again 
          <input 
            className={styles.input}
            type="text" 
            name="passwordAgain" 
            placeholder="Password"
          />
        </label>
        {state && state.error && 
          <p className={styles.errorText}>{state.error}</p>
        }
        <button 
          className="btn-primary"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  )
}
