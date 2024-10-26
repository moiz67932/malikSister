import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    CurveAngle
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/" className="hover:text-teal-400">Home</Link></li>
                        <li><Link href="/about" className="hover:text-teal-400">About</Link></li>
                        <li><Link href="/services" className="hover:text-teal-400">Services</Link></li>
                        <li><Link href="/contact" className="hover:text-teal-400">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}