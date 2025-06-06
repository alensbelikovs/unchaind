"use client"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Footer() {
    const footerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"]
    })
    const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1])
    return (
        <footer className="w-full pt-[60px] relative" ref={footerRef}>
            {/* Top Divider */}
            <div className="w-full z-10 absolute top-0">
                <div className="w-full h-[10px] bg-[var(--background)] opacity-90"></div>
                <div className="w-full h-[10px] bg-[var(--background)] opacity-75"></div>
                <div className="w-full h-[10px] bg-[var(--background)] opacity-60"></div>
                <div className="w-full h-[10px] bg-[var(--background)] opacity-45"></div>
                <div className="w-full h-[10px] bg-[var(--background)] opacity-30"></div>
                <div className="w-full h-[10px] bg-[var(--background)] opacity-15"></div>
                <div className="w-full h-[10px] bg-[var(--background)] opacity-5"></div>
            </div>

            {/* Content */}
            <div className="relative z-100 p-[30px] flex flex-col justify-between gap-20">
                {/* Heading */}
                <div className="pt-[60px]">
                    <h1 className="text-[30px] sm:text-[62px] lg:text-[100px]">Done dreaming?</h1>
                    <h1 className="max-w-xl pb-[30px] text-[37.5px] sm:text-[62px] lg:text-[100px]">Let's build it together.</h1>
                    <h2 className="text-[21px] sm:text-[37.5px] lg:text-[62px] flex"><Link href="/" className="main-button-inverted"><span>Get in touch</span><Image src="/icons/arrow-light.svg" height={36} width={36} alt="arrow-icon" className="main-button-icon"/></Link></h2>
                </div>
                {/* Footer */}
                <div className="border-t-1 flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 pt-[30px] text-left">

                    {/* Left footer side */}
                    <div className="flex flex-col justify-between md:flex-row gap-8 lg:gap-0">
                        {/* Footer item */}
                        <div className="flex flex-col lg:pr-[60px] pb-[30px] border-b-[1px] md:border-none md:pb-[0px]">
                            <h2 className="pb-[30px]">Contacts</h2>
                            <p className="pb-[10px]">hello@unchaind.digital</p>
                            <p>(+371) 29 533 039</p>
                        </div>

                        {/* Footer item */}
                        <div className="flex flex-col border-b-[1px] pb-[30px] md:border-none md:pb-[0px]">
                            <h2 className="pb-[30px]">Socials</h2>
                            <p className="pb-[10px]">LinkedIn</p>
                            <p className="pb-[10px]">Instagram</p>
                            <p>TikTok</p>
                        </div>
                    </div>

                    {/* Right footer side */}
                    <div className="flex flex-col justify-between md:flex-row gap-8 lg:gap-0 pt-[0px]">

                        {/* Footer item */}
                        <div className="flex flex-col border-b-[1px] pb-[30px] md:border-none md:pb-[0px] lg:pr-[60px]">
                            <h2 className="pb-[30px]">Navigation</h2>
                            <p className="pb-[10px]">Home</p>
                            <p className="pb-[10px]">Our Story</p>
                            <p className="pb-[10px]">Works</p>
                            <p>Contact Us</p>
                        </div>

                        {/* Footer item */}
                        <div className="flex flex-col items-center md:items-start justify-end border-b-[1px] pb-[30px] md:border-none md:pb-[0px]">
                            <p className="pb-[10px]">Terms of Service</p>
                            <p>Manage Cookies</p>
                        </div>

                    </div>

                </div>
            </div>
            
            {/* Visual for footer */}
            <motion.div
                className="fixed bottom-0 left-0 overflow-hidden pointer-events-none -z-100"
                data-us-project={process.env.NEXT_PUBLIC_FOOTER_VISUAL}
                style={{ width: '100%', height: '100%', opacity }}
            />
        </footer>
    )
}