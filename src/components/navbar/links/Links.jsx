import styles from './links.module.css'
import NavLink from '@/components/navbar/links/navlink/NavLink'

  const links = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Contact",
      path: "/contact"
    },
    {
      title: "Blog",
      path: "/blog"
    },
  ]

export default function Links() {

  // TEMPORARY
  const session = true
  const isAdmin = true

  return (
    <div className={styles.linksContainer}>
      {links.map((link) => (
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
