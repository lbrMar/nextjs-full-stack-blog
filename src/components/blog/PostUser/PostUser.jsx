import Error from "@/app/error";
import styles from "./PostUser.module.css";
import { getUser } from "@/lib/data";

// Fetch with an API
// const getData = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

//   if (!res.ok) {
//     throw new Error("Something went wrong")
//   }

//   return res.json()
// }

export default async function PostUser({ userId }) {

  // Fetch without an API
  const user = await getUser(userId)

  // Fetch with an API
  // const user = await getData(userId)

  return (
    <div className={styles.detailContent}>
      <span className={styles.detailTitle}>Author</span>
      <span className={styles.detailValue}>{user.name}</span>
    </div>
  )
}
