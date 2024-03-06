import styles from './links.module.css'
import NavLink from '@/components/navbar/links/navlink/NavLink'
import { handleLogOut } from '@/lib/actions'

export default function Links({ session, linkItems }) {

  // TEMPORARY
  // const isAdmin = true

  console.log(session)
  console.log(session?.user.email)

  return (
    <div className={styles.linksContainer}>
      {linkItems.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {session?.user.email ? (
        <>
          {session.user.isAdmin && (
            <>
              <NavLink item={{title: "Admin", path: "/admin"}} />
            </>
          )}
          <form action={handleLogOut}>
            <button className={`btn-primary`}>
              Log Out
            </button> 
          </form>
        </>
      ) : (
        <NavLink item={{title: "Login", path: "/login"}} />
      )
      }
    </div>
  )
}
