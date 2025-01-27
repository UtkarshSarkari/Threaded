import { OrganizationSwitcher, SignOutButton, SignedIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TopBar() {
  return (
    <nav className='topbar'>
      <Link href='/' className='flex items-center gap-4'>
        <Image src='/icons/molecule.svg' alt='logo' width={28} height={28} />
        <p className="head-text logoFont">
          Threaded
        </p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image src='/icons/logout.svg' alt='logout' width={29} height={29} />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher />
      </div>
    </nav>
  )
}
