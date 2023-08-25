"use client";
import { useEffect, useState } from 'react'
import SideBar from './components/sideBar'
import BottomHeader from './components/bottomHeader'
import './globals.css'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

 const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    setMenu(false)
  }, [pathname])
  return (
    <html lang="en">
      <body>
        {children}
        <SideBar menu={menu} />
        {/* {(pathname !=='/studio') && <BottomHeader menu={menu} setMenu={setMenu} />} */}
        {(pathname === '/' || pathname === '/studio' || pathname === '/gift') ? '' : <BottomHeader menu={menu} setMenu={setMenu} />}
      </body>

    </html>
  )
}
