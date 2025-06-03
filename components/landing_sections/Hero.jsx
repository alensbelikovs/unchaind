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
		<section className="h-[100dvh] w-full" ref={ref}>
			{/* Text */}
			<motion.div className="h-full w-full flex flex-row fixed inset-0 p-[50px]" style={{ opacity: opacityText, pointerEvents: inView ? 'auto' : 'none' }}>
				<div className="h-full flex items-end w-[50%]">
					<h1 className="text-[100px] font-[500] leading-tight max-w-4xl">Imagine if websites could speak.</h1>
				</div>
				<div className="h-full flex flex-row items-end justify-end w-[50%]">
					<div className="flex flex-col">
						<p className="font-[500] max-w-xs py-[15px]">We’re a narrative driven web design & development studio</p>
						<p className="font-[500] max-w-xs py-[15px]">Transforming unconventional ideas</p>
					</div>
					<div>
						<p className="font-[500] max-w-xs py-[15px]">Into compelling digital experiences.</p>
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