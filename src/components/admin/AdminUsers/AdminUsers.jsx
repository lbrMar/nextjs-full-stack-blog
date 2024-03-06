import styles from "./AdminUsers.module.css"
import { getUsers } from "@/lib/data"
import { deleteUser } from "@/lib/actions"
import Image from "next/image"

export default async function AdminUsers() {

  const users = await getUsers()

  return (
    <div className={styles.container}>
      <h1>Admin Users</h1>
      {users.map((user) => (
        <div 
          className={styles.user}
          key={user.id}
        >
          <div className={styles.userContainer}>
            {user.image ? (
              <Image 
                className={styles.userImage}
                src={user.image} 
                alt={user.userName} 
                width={100}
                height={100}
              />
            ) : (
              <Image 
                  className={styles.userImage}
                  src="/noavatar.png" 
                  alt="no avatar" 
                  width={100} 
                  height={100} 
                />
            )}
            <div className={styles.userInfo}>
              <h4>{user.userName}</h4>
              <p>{user.email}</p>
              <form action={deleteUser}>
                <input type="hidden" name="id" value={user.id} />
                <button className="btn-secondary">Delete</button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
