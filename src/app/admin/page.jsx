import styles from "./admin.module.css"
import AdminBlogPosts from "@/components/admin/AdminBlogPosts/AdminBlogPosts";
import AdminBlogPostsForm from "@/components/admin/AdminBlogPostsForm/AdminBlogPostsForm";
import AdminUsers from "@/components/admin/AdminUsers/AdminUsers";
import AdminUsersForm from "@/components/admin/AdminUsersForm/AdminUsersForm";
import { Suspense } from "react";

export const metadata = {
  title: "Admin",
  description: "Admin page",
};

export default function Admin() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>...loading</div>}>
            <AdminBlogPosts />
          </Suspense>
        </div>
        <div className={styles.column}>
          <AdminBlogPostsForm />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>...loading</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.column}>
          <AdminUsersForm />
        </div>
      </div>
    </div>
  );
}
