import styles from "./LoginPage.module.css"
import { handleGitHubLogin } from '@/lib/actions'
import { login } from '@/lib/actions'

export default async function LoginPage() {
  return (
    <div>
      <div className={styles.providerConatiner}>
        <h3>Log in with provider</h3>
        <form 
          className={styles.form}
          action={handleGitHubLogin}
        >
          <button className='btn-primary'>GitHub</button>
        </form>
      </div>
      <div className={styles.credentialContainer}>
        <h3>Log in with credentials</h3>
        <form 
          className={styles.form}
          action={login}
        >
          <input 
            className={styles.input}
            type="text" 
            name="username" 
            placeholder="Username" 
          />
          <input 
            className={styles.input}
            type="password" 
            name="password" 
            placeholder="Password" 
          />
          <button className='btn-primary'>Login</button>
        </form>
      </div>
    </div>
  );
}
