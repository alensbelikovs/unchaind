import Link from "next/link"
import Image from "next/image"
import WorkHighlight from "@/components/landing_components/WorkHighlight"

export default function WorkHighlights() {
    return (
        <section className="relative w-full h-[550vh]">
            {/* Sticky Visual Background */}
            <div className="h-screen w-full sticky top-0">
                <div
                    className="overflow-hidden pointer-events-none absolute inset-0"
                    data-us-project={process.env.NEXT_PUBLIC_WORK_HIGHLIGHTS_VISUAL}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>

            {/* Scrolling Content */}
            <div className="absolute inset-0 w-full">
                {/* Top Dividers */}
                <div className="w-full z-10">
                    <div className="w-full h-[1vh] bg-[var(--background)] opacity-90"></div>
                    <div className="w-full h-[1vh] bg-[var(--background)] opacity-75"></div>
                    <div className="w-full h-[1vh] bg-[var(--background)] opacity-60"></div>
                    <div className="w-full h-[1vh] bg-[var(--background)] opacity-45"></div>
                    <div className="w-full h-[1vh] bg-[var(--background)] opacity-30"></div>
                    <div className="w-full h-[1vh] bg-[var(--background)] opacity-15"></div>
                    <div className="w-full h-[1vh] bg-[var(--background)] opacity-5"></div>
                </div>

                {/* Readable contents */}
                <div className="w-full flex flex-col justify-center items-center text-[var(--background)]">
                    {/* Heading Contents */}
                    <div className="h-screen w-full flex flex-col justify-center items-center py-[60px]">
                        <h1 className="z-10 max-w-3xl text-center pb-[30px]">But don't take our word for it.</h1>
                        <h2 className="z-10 max-w-3xl text-center">Let our work tell the story.</h2>
                    </div>
                    
                    {/* Work Contents */}
                    <div className="w-full flex flex-col justify-center items-center bg-[var(--background)] relative py-[20vh]">
                        <div className="w-full z-10 absolute -top-[7vh]">
                            <div className="w-full h-[1vh] bg-[var(--background)] opacity-5"></div>
                            <div className="w-full h-[1vh] bg-[var(--background)] opacity-15"></div>
                            <div className="w-full h-[1vh] bg-[var(--background)] opacity-30"></div>
                            <div className="w-full h-[1vh] bg-[var(--background)] opacity-45"></div>
                            <div className="w-full h-[1vh] bg-[var(--background)] opacity-60"></div>
                            <div className="w-full h-[1vh] bg-[var(--background)] opacity-75"></div>
                            <div className="w-full h-[1vh] bg-[var(--background)] opacity-90"></div>
                        </div>

                        <WorkHighlight heading="DevOps Wizards" subheading="And the secret of turning chaos into order." href="/" projectId={process.env.NEXT_PUBLIC_WORK_CONTAINER}/>
                        <WorkHighlight heading="DevOps Wizards" subheading="And the secret of turning chaos into order." href="/" projectId={process.env.NEXT_PUBLIC_WORK_CONTAINER}/>
                        <WorkHighlight heading="DevOps Wizards" subheading="And the secret of turning chaos into order." href="/" projectId={process.env.NEXT_PUBLIC_WORK_CONTAINER}/>


                        <div className="w-full z-10 absolute -bottom-[7vh]">
                            <div className="w-full h-[1vh] bg-[var(--background)] opacity-90"></div>
                            <div className="w-full h-[1vh] bg-[var(--background)] opacity-75"></div>
                            <div className="w-full h-[1vh] bg-[var(--background)] opacity-60"></div>
                            <div className="w-full h-[1vh] bg-[var(--background)] opacity-45"></div>
                            <div className="w-full h-[1vh] bg-[var(--background)] opacity-30"></div>
                            <div className="w-full h-[1vh] bg-[var(--background)] opacity-15"></div>
                            <div className="w-full h-[1vh] bg-[var(--background)] opacity-5"></div>
                        </div>

                    </div>

                    {/* CTA to check out all works */}
                    <div className="h-screen w-full flex flex-col justify-center items-center gap-4 py-[180px]">
                        <h1 className="z-10 text-center">And there's more.</h1>
                        <h2 className="z-10 max-w-3xl text-center"><Link href="/" className="main-button"><span>Browse all stories</span><Image src="/icons/arrow.svg" height={36} width={36} alt="arrow-icon" className="main-button-icon"/></Link></h2>
                    </div>
                </div>

                {/* Bottom Dividers */}
                <div className="w-full z-10 absolute bottom-0">
                    <div className="w-full h-[1vh] bg-[var(--background)] opacity-5"></div>
                    <div className="w-full h-[1vh] bg-[var(--background)] opacity-15"></div>
                    <div className="w-full h-[1vh] bg-[var(--background)] opacity-30"></div>
                    <div className="w-full h-[1vh] bg-[var(--background)] opacity-45"></div>
                    <div className="w-full h-[1vh] bg-[var(--background)] opacity-60"></div>
                    <div className="w-full h-[1vh] bg-[var(--background)] opacity-75"></div>
                    <div className="w-full h-[1vh] bg-[var(--background)] opacity-90"></div>
                </div>
            </div>
        </section>
    )
}