import styles from "./CreateBlogPost.module.css";
import { addBlogPost } from "@/lib/actions";

export default async function createBlogPost() {

  const session = await auth()

  return (
    <div>
      <h1>Create Blog Post</h1>
      <form 
        className={styles.formContainer}
        action={addBlogPost}
      >
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
        <label className={styles.lableContainer}>
          User Name
          <input 
            className={styles.input}
            type="text" 
            name="userId" 
            placeholder="User name"
          />
        </label>
        <label className={styles.lableContainer}>
          Slug
          <input 
            className={styles.input}
            type="text" 
            name="slug" 
            placeholder="slug"
          />
        </label>
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
