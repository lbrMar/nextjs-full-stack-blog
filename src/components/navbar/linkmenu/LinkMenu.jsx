"use client"

import styles from './linkmenu.module.css'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import NavLink from '@/components/navbar/links/navlink/NavLink'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function LinkMenu({ linkItems }) {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className={`${styles.IconButton}`} aria-label="Customise options">
            <HamburgerMenuIcon className={`${styles.hamburgerIcon}`}/>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className={`${styles.menuContainer}`}>
            {/* <DropdownMenu.Label> */}
            {/*   <h3>Links</h3> */}
            {/* </DropdownMenu.Label> */}
            {/* <DropdownMenu.Item> */}
            {/*   Link */}
            {/* </DropdownMenu.Item> */}
            {/* <DropdownMenu.Item> */}
            {/*   Link */}
            {/* </DropdownMenu.Item> */}
            {/* <DropdownMenu.Item> */}
            {/*   Link */}
            {/* </DropdownMenu.Item> */}
            {/* <DropdownMenu.Item> */}
            {/*   Link */}
            {/* </DropdownMenu.Item> */}
            {/* <DropdownMenu.Item> */}
            {/*   Link */}
            {/* </DropdownMenu.Item> */}

            {linkItems.map((link) => (
              <DropdownMenu.Content key={link.title}>
                <NavLink item={link}  />
              </DropdownMenu.Content>
            ))}

          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
