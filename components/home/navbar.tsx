import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="flex items-center justify-between rounded-b-lg border-4 bg-neutral-200 p-4">
            <Link href="/">Navbar</Link>

            <Link href="/create">
                <Button variant="link">CREATE POST</Button>
            </Link>
        </div>
    )
}

export default Navbar
