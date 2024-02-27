"use client"

import styles from './linkmenu.module.css'
import { useState } from "react"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import NavLink from '@/components/navbar/links/navlink/NavLink'

export default function LinkMenu({ linkItems }) {
  const [toggleMenu, setToggelMenu] = useState('closed')

  const onMenuClick = () => {
    setToggelMenu((prev) => prev === 'closed' ? 'open' : 'closed')
  }

  // TEMPORARY
  const session = true
  const isAdmin = true

  return (
    <div>
      <HamburgerMenuIcon 
        onClick={onMenuClick}
        className={`${styles.menuIcon}`}
      />
      {toggleMenu === 'open' && (
        <div className={`${styles.menuContainer}`}>
          <h2>Menu</h2>
          {linkItems.map((link) => (
            <NavLink 
              item={link} 
              key={link.title} 
              onClick={onMenuClick}
            />
          ))}
        {session ? (
          isAdmin && (
            <>
              <NavLink 
                item={{title: "Admin", path: "/admin"}} 
                onClick={onMenuClick}
              />
              <button 
                className={`btn-primary`}
                onClick={onMenuClick}
              >
                Log Out
              </button> 
            </>
          )
        ) : (
          <NavLink item={{title: "Login", path: "/login"}} />
        )}
          </div>
        )}
    </div>
  )
}