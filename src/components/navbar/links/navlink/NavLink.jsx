"use client"

import Link from 'next/link'
import styles from './navlink.module.css'
import { usePathname } from 'next/navigation'

export default function NavLink({ item }) {

  const pathName = usePathname();

  return (
    <Link 
      href={item.path} 
      className={`${styles.link} 
        ${pathName === item.path && `${styles.active} floating-sm`}
        `
      }
    >
      <h3>{item.title}</h3>
    </Link>
  )
}
