'use client'
import { sidebarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function BottomBar() {
  const pathname = usePathname();
  return (
    <section className='bottombar'>
      <div className="bottombar_container">
      {
          sidebarLinks.map((link) => {
            const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
            return (
              <Link href={link.route} key={link.label} className={`bottombar_link ${isActive && 'bg-white/10'} hover:bg-white/5`}>
                <Image src={link.imgURL} alt={link.label} width={24} height={24} />
                <p className='text-subtle-medium text-light-1 max-sm:hidden ubuntu-medium tracking-wide'>{link.label.split(/\s+/)[0]}</p>
              </Link>
            )
          })
        }
      </div>
    </section>
  )
}
