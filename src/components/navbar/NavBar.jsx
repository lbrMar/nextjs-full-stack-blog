import styles from './navbar.module.css'
import Links from "@/components/navbar/links/Links"
import LinkMenu from '@/components/navbar/linkmenu/LinkMenu'
import Link from 'next/link'
import { auth } from '@/lib/auth'

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

export default async function NavBar() {

  const session = await auth()

  return (
    <div className={styles.container}>
      <div className={`${styles.logo} font-gradient`}>
        <Link href="/">
          <h1>LBRM</h1>
        </Link>
      </div>
      <div className='lg-dec'>        
        <Links session={session} linkItems={links} />
      </div>
      <div className='lg-inc'>
        <LinkMenu session={session} linkItems={links} />
      </div>
    </div>
  )
}
