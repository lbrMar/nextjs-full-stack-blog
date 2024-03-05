import styles from "./LoginPage.module.css"
import LoginForm from "@/components/auth/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <div>
      <div className={styles.credentialContainer}>
        <h3>Log in with credentials</h3>
        <LoginForm />
      </div>
    </div>
  );
}
