// import Error from "next/error";
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
  // const user = await getUser(userId)

  // Fetch with an API
  // const user = await getData(userId)

  // Fetch with MONGO DB
  const user = await getUser(userId)
  console.log(user)

  return (
    <div className={styles.detailContent}>
      <span className={styles.detailTitle}>Author</span>
      <span className={styles.detailValue}>{user.userName}</span>
    </div>
  )
}
