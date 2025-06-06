import Hero from "@/components/landing_sections/Hero"
import WhyUs from "@/components/landing_sections/WhyUs"
import WorkHighlights from "@/components/landing_sections/WorkHighlights"
import WhatWeOffer from "@/components/landing_sections/WhatWeOffer"
import Process from "@/components/landing_sections/Process"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Page() {
	return (
		<>
			<Hero />
			<WhyUs />
			<WorkHighlights />
			<WhatWeOffer />
			<Process />
			<Footer />
		</>
	)
}