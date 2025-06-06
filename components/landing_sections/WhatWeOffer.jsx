"use client"
import OfferItem from "@/components/landing_components/OfferItem"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function WhatWeOffer() {
    const ref = useRef(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 1024px)').matches)
        }
        
        // Check initially
        checkMobile()
        
        // Add listener for window resize
        window.addEventListener('resize', checkMobile)
        
        // Cleanup
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yLeft = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 100])
    const yRight = useTransform(scrollYProgress, [0,1], [isMobile ? 0 : 100, 0])
    return (
        <section className="flex flex-col items-center pt-[240px] pb-[120px] md:pb-[240px] bg-[var(--background)]" ref={ref}>
            <h1 className="pb-[15px] lg:pb-[30px] px-[25px] lg:px-[50px]">What we offer</h1>
            {/* All offer div */}
            <div className="w-full flex flex-col lg:flex-row justify-evenly">

                {/* Offer left column */}
                <motion.div className="flex flex-col px-[25px] lg:px-[50px]" style={{ y: yLeft }}>
                    <OfferItem heading="Art Direction">Visual tone of your site through custom imagery and creative direction.</OfferItem>
                    <OfferItem heading="User Experience">Intuitive layouts that guide users effortlessly through your brand’s story.</OfferItem>
                    <OfferItem heading="Content Strategy">Content structures that communicate your message clearly and effectively.</OfferItem>
                    <OfferItem heading="Back-End Solutions">Server-side systems that complement your brand’s visuals with functionality and real-time data.</OfferItem>
                </motion.div>

                {/* Offer right column */}
                <motion.div className="flex flex-col px-[25px] lg:px-[50px]" style={{ y: yRight }}>
                    <OfferItem heading="Visual Identity">Logos, color systems, and typography choices that define your brand’s look and feel.</OfferItem>
                    <OfferItem heading="Interaction Design">Engaging animations and transitions that users interact with directly.</OfferItem>
                    <OfferItem heading="Front-End Solutions">Responsive and unique websites with clean code and beautiful design.</OfferItem>
                    <OfferItem heading="SEO Optimization">Improved site structure and search engine visibility through code optimization and keyword research.</OfferItem>
                </motion.div>

            </div>
        </section>
    )
}