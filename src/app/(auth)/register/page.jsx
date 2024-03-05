"use client"

import styles from "./RegisterPage.module.css"
import { RegisterForm } from "@/components/auth/RegisterForm/RegisterForm"

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <RegisterForm />
    </div>
  );
}
