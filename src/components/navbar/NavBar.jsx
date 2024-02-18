import styles from './navbar.module.css'
import Links from "@/components/navbar/links/Links"
import LinkMenu from '@/components/navbar/linkmenu/LinkMenu'

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

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={`${styles.logo} font-gradient`}>
        <h1>LBRM</h1>
      </div>
      <div className='lg-dec'>        
        <Links linkItems={links} />
      </div>
      <div className='lg-inc'>
        <LinkMenu linkItems={links} />
      </div>
    </div>
  )
}
