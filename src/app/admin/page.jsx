import styles from "./admin.module.css"
import AdminBlogPosts from "@/components/admin/AdminBlogPosts/AdminBlogPosts";
import AdminBlogPostsForm from "@/components/admin/AdminBlogPostsForm/AdminBlogPostsForm";
import AdminUsers from "@/components/admin/AdminUsers/AdminUsers";
import AdminUsersForm from "@/components/admin/AdminUsersForm/AdminUsersForm";
import { Suspense } from "react";
import { auth } from "@/lib/auth";

export const metadata = {
  title: "Admin",
  description: "Admin page",
};

export default async function Admin() {

  const session = await auth()
  console.log(session)

  return (
    <div className={styles.container}>
      <div className={styles.rowContainer}>
          <Suspense fallback={<div>...loading</div>}>
            <AdminBlogPosts />
          </Suspense>
          <AdminBlogPostsForm userId={session.user.id}/>
      </div>
      <div className={styles.rowContainer}>
          <Suspense fallback={<div>...loading</div>}>
            <AdminUsers />
          </Suspense>
          <AdminUsersForm />
      </div>
    </div>
  );
}
