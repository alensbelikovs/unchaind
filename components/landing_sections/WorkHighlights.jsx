import Link from "next/link"

export default function WorkHighlights() {
    return (
        <section className="min-h-[400dvh] relative w-full">
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
                    <div className="w-full h-[15px] bg-[var(--background)] opacity-90"></div>
                    <div className="w-full h-[15px] bg-[var(--background)] opacity-75"></div>
                    <div className="w-full h-[15px] bg-[var(--background)] opacity-60"></div>
                    <div className="w-full h-[15px] bg-[var(--background)] opacity-45"></div>
                    <div className="w-full h-[15px] bg-[var(--background)] opacity-30"></div>
                    <div className="w-full h-[15px] bg-[var(--background)] opacity-15"></div>
                    <div className="w-full h-[15px] bg-[var(--background)] opacity-5"></div>
                </div>

                {/* Readable contents */}
                <div className="w-full flex flex-col justify-center items-center text-[var(--background)] px-[50px]">
                    {/* Heading Contents */}
                    <div className="h-[75dvh] w-full flex flex-col justify-center items-center">
                        <h1 className="z-10 max-w-3xl text-center pb-[30px]">But don't take our word for it.</h1>
                        <h2 className="z-10 max-w-3xl text-center">Let our work tell the story.</h2>
                    </div>
                    
                    {/* Work Contents */}
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className="w-full bg-amber-500 h-[600px] my-[60px] flex flex-col justify-end p-[30px]">
                            <h1 className="mix-blend-difference text-[var(--foreground)] pb-[30px]">DevOps Wizards</h1>
                            <h2 className="mix-blend-difference text-[var(--foreground)] pb-[30px] max-w-xl">And the secret of turning chaos into order.</h2>
                            <p className="mix-blend-difference text-[var(--foreground)]"><Link href="/">See how it was made</Link></p>
                        </div>
                        <div className="w-full bg-amber-500 h-[600px] my-[60px] flex flex-col justify-end p-[30px]">
                            <h1 className="mix-blend-difference text-[var(--foreground)] pb-[30px]">DevOps Wizards</h1>
                            <h2 className="mix-blend-difference text-[var(--foreground)] pb-[30px] max-w-xl">And the secret of turning chaos into order.</h2>
                            <p className="mix-blend-difference text-[var(--foreground)]"><Link href="/">See how it was made</Link></p>
                        </div>
                        <div className="w-full bg-amber-500 h-[600px] my-[60px] flex flex-col justify-end p-[30px]">
                            <h1 className="mix-blend-difference text-[var(--foreground)] pb-[30px]">DevOps Wizards</h1>
                            <h2 className="mix-blend-difference text-[var(--foreground)] pb-[30px] max-w-xl">And the secret of turning chaos into order.</h2>
                            <p className="mix-blend-difference text-[var(--foreground)]"><Link href="/">See how it was made</Link></p>
                        </div>
                    </div>

                    {/* CTA to check out all works */}
                    <div className="h-[75dvh] w-full flex flex-row justify-center items-center">
                        <h1 className="z-10 text-center pb-[30px]">And there's more.</h1>
                        <h2 className="z-10 max-w-3xl text-center"><Link href="/">Browse all stories</Link></h2>
                    </div>
                </div>

                {/* Bottom Dividers */}
                <div className="w-full z-10 absolute bottom-0">
                    <div className="w-full h-[15px] bg-[var(--background)] opacity-5"></div>
                    <div className="w-full h-[15px] bg-[var(--background)] opacity-15"></div>
                    <div className="w-full h-[15px] bg-[var(--background)] opacity-30"></div>
                    <div className="w-full h-[15px] bg-[var(--background)] opacity-45"></div>
                    <div className="w-full h-[15px] bg-[var(--background)] opacity-60"></div>
                    <div className="w-full h-[15px] bg-[var(--background)] opacity-75"></div>
                    <div className="w-full h-[15px] bg-[var(--background)] opacity-90"></div>
                </div>
            </div>
        </section>
    )
}