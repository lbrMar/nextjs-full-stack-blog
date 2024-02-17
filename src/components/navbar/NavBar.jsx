import styles from './navbar.module.css'
import Links from "@/components/navbar/links/Links"

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={`${styles.logo} font-gradient`}>
        <h1>LBRM</h1>
      </div>
      <div className='lg-dec'>        
        <Links />
      </div>
    </div>
  )
}
