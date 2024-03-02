"use client"

import styles from './linkmenu.module.css'
import { useState } from "react"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import NavLink from '@/components/navbar/links/navlink/NavLink'
import { handleLogOut } from '@/lib/actions'

export default function LinkMenu({ session,linkItems }) {
  const [toggleMenu, setToggelMenu] = useState('closed')

  const onMenuClick = () => {
    setToggelMenu((prev) => prev === 'closed' ? 'open' : 'closed')
  }

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
        {session?.user.name ? (
          <>
            {session.user.name?.isAdmin && (
              <>
                <NavLink 
                  item={{title: "Admin", path: "/admin"}} 
                  onClick={onMenuClick}
                />
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
          )}
        </div>
        )}
    </div>
  )
}
