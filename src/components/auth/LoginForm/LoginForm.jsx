"use client"

import styles from "./LoginForm.module.css"
import { handleGitHubLogin } from '@/lib/actions'
import { credentialsLogin} from '@/lib/actions'
import { useFormState } from "react-dom"
import Link from "next/link"

export default function LoginForm() {
  const [state, formAction] = useFormState(credentialsLogin, undefined)

  return (
    <div>
      <div>
        <form 
          className={styles.form}
          action={formAction}
        >
          <input 
            className={styles.input}
            type="text" 
            name="userName" 
            placeholder="Username" 
          />
          <input 
            className={styles.input}
            type="password" 
            name="password" 
            placeholder="Password" 
          />
          {state?.error &&
            <p className={styles.errorText}>
              {state?.error}
            </p>
          }
          <button className='btn-primary'>Login</button>
        </form>
      </div>
      <div className={styles.providerConatiner}>
        <h3>Log in with provider</h3>
        <form 
          className={styles.form}
          action={handleGitHubLogin}
        >
          <button className='btn-primary'>GitHub</button>
        </form>
        <Link href="/register">
          Don't have an account <b>register here</b>
        </Link>
      </div>
    </div>
  )
}
