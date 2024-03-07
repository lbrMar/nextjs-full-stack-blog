"use client"

import styles from "./AdminBlogPostsForm.module.css"
import { useFormState } from "react-dom"
import { addBlogPost } from "@/lib/actions"

export default function AdminBlogPostsForm({ userId }) {

  const [state, formAction] = useFormState(addBlogPost, undefined)

  return (
    <div className={styles.formContainer}>
      <h1>Add Blog Post</h1>
      <form action={formAction}>
        <label className={styles.lableContainer}>
          Title
          <input 
            className={styles.input}
            type="text" 
            name="title" 
            placeholder="Title of your post"
          />
        </label>
        <label className={styles.lableContainer}>
          Description
          <input 
            className={styles.input}
            type="text" 
            name="description" 
            placeholder="Description of your post"
          />
        </label>
        <label className={styles.lableContainer}>
          Image
          <input 
            className={styles.input}
            type="text" 
            name="image" 
            placeholder="Image url of your post"
          />
        </label>
        <input 
          type="hidden"
          name="userId" 
          value={userId}
        />
        <label className={styles.lableContainer}>
          Slug
          <input 
            className={styles.input}
            type="text" 
            name="slug" 
            placeholder="slug"
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
