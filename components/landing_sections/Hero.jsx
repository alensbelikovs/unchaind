"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
	const ref = useRef(null)
	const inView = useInView(ref, { amount: 0.4})
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	})
	const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0])
	const opacityVisual = useTransform(scrollYProgress, [0.7, 0.9], [1, 0])

	return (
		<section className="h-[100vh] w-full" ref={ref}>
			{/* Text */}
			<motion.div className="h-full w-full flex flex-col xl:flex-row fixed inset-0 p-[25px] md:p-[50px]" style={{ opacity: opacityText, pointerEvents: inView ? 'auto' : 'none' }}>
				<div className="h-full flex items-center justify-center xl:justify-start text-center xl:text-left xl:items-end w-full xl:w-[75%]">
					<h1 className="">Imagine if websites could speak.</h1>
				</div>
				<div className="h-full flex flex-col xl:flex-row items-center text-center xl:text-left xl:items-end xl:justify-end w-full xl:w-[50%]">
					<div className="flex flex-col">
						<p className="max-w-sm xl:max-w-xs pb-[7px] pt-[30px] xl:pb-[15px] xl:pt-[15px]">We’re a narrative driven web design & development studio</p>
						<p className="max-w-sm xl:max-w-xs py-[7px] xl:py-[15px]">Transforming unconventional ideas</p>
					</div>
					<div>
						<p className="max-w-sm xl:max-w-xs py-[7px] xl:py-[15px]">Into compelling digital experiences.</p>
					</div>
				</div>
			</motion.div>
			{/* Visual */}
			<motion.div
                className="fixed inset-0 -z-2 overflow-hidden pointer-events-none"
                data-us-project={process.env.NEXT_PUBLIC_HERO_VISUAL}
                style={{ width: '100vw', height: '100vh', opacity: opacityVisual }}
            />
		</section>
	)
}