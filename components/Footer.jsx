import Link from "next/link"

export default function Footer() {
    return (
        <section className="h-[100dvh] w-full overflow-x-hidden relative">
            {/* Top Divider */}
            <div className="w-full z-10 absolute top-0">
                <div className="w-full h-[15px] bg-[var(--background)] opacity-90"></div>
                <div className="w-full h-[15px] bg-[var(--background)] opacity-75"></div>
                <div className="w-full h-[15px] bg-[var(--background)] opacity-60"></div>
                <div className="w-full h-[15px] bg-[var(--background)] opacity-45"></div>
                <div className="w-full h-[15px] bg-[var(--background)] opacity-30"></div>
                <div className="w-full h-[15px] bg-[var(--background)] opacity-15"></div>
                <div className="w-full h-[15px] bg-[var(--background)] opacity-5"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full p-[60px] flex flex-col justify-between">
                {/* Heading */}
                <div className="pt-[60px]">
                    <h1 className="">Done dreaming?</h1>
                    <h1 className="max-w-xl pb-[30px]">Let's build it together.</h1>
                    <h2><Link href="/">Get in touch</Link></h2>
                </div>
                {/* Footer */}
                <div className="border-t-1 flex flex-row justify-between">

                    {/* Left footer side */}
                    <div className="flex flex-row">
                        {/* Footer item */}
                        <div className="flex flex-col pr-[60px]">
                            <h2 className="py-[30px]">Contacts</h2>
                            <p className="pb-[10px]">hello@unchaind.digital</p>
                            <p>(+371) 29 533 039</p>
                        </div>

                        {/* Footer item */}
                        <div className="flex flex-col">
                            <h2 className="py-[30px]">Socials</h2>
                            <p className="pb-[10px]">LinkedIn</p>
                            <p className="pb-[10px]">Instagram</p>
                            <p>TikTok</p>
                        </div>
                    </div>

                    {/* Right footer side */}
                    <div className="flex flex-row">

                        {/* Footer item */}
                        <div className="flex flex-col pr-[60px]">
                            <h2 className="py-[30px]">Navigation</h2>
                            <p className="pb-[10px]">Home</p>
                            <p className="pb-[10px]">Our Story</p>
                            <p className="pb-[10px]">Works</p>
                            <p>Contact Us</p>
                        </div>

                        {/* Footer item */}
                        <div className="flex flex-col justify-end">
                            <p className="pb-[10px]">Terms of Service</p>
                            <p>Manage Cookies</p>
                        </div>

                    </div>

                </div>
            </div>
            
            {/* Visual for footer */}
            <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                data-us-project={process.env.NEXT_PUBLIC_FOOTER_VISUAL}
                style={{ width: '100%', height: '100%' }}
            />
        </section>
    )
}