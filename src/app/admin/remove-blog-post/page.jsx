import styles from "./RemoveBlogPost.module.css"
import { deleteBlogPost } from "@/lib/actions"


export default function removeBlogPost() {
  return (
    <div>
      <h1>Delete Blog Post</h1>
      <form 
        className={styles.formContainer}
        action={deleteBlogPost}
      >
        <label className={styles.labelContainer}>
          Blog Post Id:
          <input 
            className={styles.input}
            type="text" 
            name="id" 
            placeholder="Blog Post Id"
          />
        </label>
        <br />
        <br />
        <div className={styles.btnContainer}>
          <input 
            className="btn-primary"
            type="submit" 
            value="Delete" 
          />
          <button 
            className="btn-secondary"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>)
}
