"use client"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState, useEffect } from "react"

export default function Navbar() {
    const { scrollYProgress } = useScroll()
    const [navbarBgVisible, setNavbarBgVisible] = useState(false)
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.08) {
            setNavbarBgVisible(true)
        } else {
            setNavbarBgVisible(false)
        }
    })
    return (
        <header className="w-full z-50 fixed top-0">
            <navbar className={`hidden lg:flex w-full items-center justify-between px-[30px] py-[20px] gap-[30px] transition-all duration-300 ease-in-out ${navbarBgVisible ? "bg-[var(--background)]" : ""}`}>
                <div className="flex items-center gap-[30px]">
                    <Image src="/icons/logo.svg" height={36} width={36} alt="logo"/>
                    <Link href="/" className="navbar-link"><p>Home</p></Link>
                    <Link href="/" className="navbar-link"><p>Our Story</p></Link>
                    <Link href="/" className="navbar-link"><p>Works</p></Link>
                </div>
                <Link href="/" className="navbar-contact-link"><p>Contact Us</p></Link>
            </navbar> 
        </header>
    )
}