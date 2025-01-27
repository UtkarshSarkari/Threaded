import { OrganizationSwitcher, SignOutButton, SignedIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TopBar() {
  return (
    <nav className='topbar'>
      <Link href='/' className='flex items-center gap-4'>
        <Image src='/icons/molecule.svg' alt='logo' width={28} height={28} />
        <p className="text-heading1-bold text-light-1 logoFont">
          Threaded
        </p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image src='/icons/logout.svg' alt='logout' width={32} height={32} />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher appearance={{
          elements: {
            organizationSwitcherTrigger: "py-2 px-4",
            avatarBox: "h-7 w-7"
          }
        }} />
      </div>
    </nav>
  )
}
