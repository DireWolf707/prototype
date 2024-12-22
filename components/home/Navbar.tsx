import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import SignInButton from '../auth/SignInButton'
import SignOutButton from '../auth/SignOutButton'
import { auth } from '@/auth'

const Navbar = async () => {
    const session = await auth()

    return (
        <div className="flex items-center justify-between rounded-b-lg border-4 p-4">
            <Link href="/">Navbar</Link>

            {!session ? <SignInButton /> : <SignOutButton />}

            <Link href="/create">
                <Button variant="link">CREATE POST</Button>
            </Link>
        </div>
    )
}

export default Navbar
