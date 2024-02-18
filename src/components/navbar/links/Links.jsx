import styles from './links.module.css'
import NavLink from '@/components/navbar/links/navlink/NavLink'

export default function Links({ linkItems }) {

  // TEMPORARY
  const session = true
  const isAdmin = true

  return (
    <div className={styles.linksContainer}>
      {linkItems.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {session ? (
        isAdmin && (
          <>
            <NavLink item={{title: "Admin", path: "/admin"}} />
            <button className={`btn-primary`}>
              Log Out
            </button> 
          </>
        )
      ) : (
        <NavLink item={{title: "Login", path: "/login"}} />
      )}
    </div>
  )
}
