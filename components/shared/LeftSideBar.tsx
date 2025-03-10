'use client'
import React from 'react'
import { sidebarLinks } from '../../constants/index';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SignOutButton, SignedIn } from '@clerk/nextjs';

export default function LeftSideBar() {
  const pathname = usePathname();
  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {
          sidebarLinks.map((link) => {
            const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
            return (
              <Link href={link.route} key={link.label} className={`leftsidebar_link ${isActive && 'bg-white/10'} hover:bg-white/5`}>
                <Image src={link.imgURL} alt={link.label} width={24} height={24} />
                <p className='text-light-1 max-lg:hidden ubuntu-medium tracking-wide'>{link.label}</p>
              </Link>
            )
          })
        }
      </div>
      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton redirectUrl='/sign-in'>
            <div className="flex cursor-pointer items-center gap-4 p-4">
              <Image src='/icons/logout.svg' alt='logout' width={28} height={28} />
              <p className='text-light-2 max-lg:hidden ubuntu-medium tracking-wide'>Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  )
}
