"use client"

import styles from "./RegisterForm.module.css"
import { registerUser } from "@/lib/actions";
import { useFormState } from "react-dom"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export const RegisterForm = () => {
  const [state, formAction] = useFormState(registerUser, undefined)

  const router = useRouter()

  useEffect(() => {
      state?.success && router.push("/login")
  }, [state?.success, router])

  return (
    <div className={styles.container}>
      <form 
        action={formAction}
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
        {state?.error && 
          <p className={styles.errorText}>
            {state?.error}
          </p>
        }
        <br />
        <div className={styles.btnContainer}>
          <input 
            className="btn-primary"
            type="submit" 
            value="Register" 
          />
          <Link 
            className={`${styles.cancelBtn} btn-secondary`}
            href={"/"}
          >
            Cancel
          </Link>
        </div>
        <Link 
          href={"/login"} 
        >
          Have an account? <b>Login</b>
        </Link>
      </form>
    </div>
  )
}
