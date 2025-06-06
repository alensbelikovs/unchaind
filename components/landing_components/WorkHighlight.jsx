import Link from "next/link"
import Image from "next/image"

export default function WorkHighlight({ heading="Project Name", subheading="This is a placeholder subheading.", href="/", projectId }) {
    return (
        <div className="w-full h-screen flex flex-col lg:flex-row justify-between p-[30px] relative">
        <div className="flex-col">
            <h1 className="text-[var(--foreground)] pb-[3vh] z-10 text-[4vh] sm:text-[5vh] lg:text-[6vh]">{heading}</h1>
            <h2 className="text-[var(--foreground)] pb-[5vh] max-w-xl z-10 text-[2.5vh] sm:text-[3vh] lg:text-[4vh]">{subheading}</h2>
            <p href={href} className="text-[var(--foreground)] flex z-10 pb-[15px]"><Link href={href} className="work-highlight-button"><span>See how it was made</span><Image src="/icons/arrow-light.svg" className="work-highlight-button-icon" height={24} width={24} alt="arrow-icon"/></Link></p>
        </div>
        <Link href={href} className="w-full h-[50vh] sm:h-[60vh] lg:w-[50%] lg:h-[70vh] relative bg-amber-500 mt-[5vh] lg:mt-0">
            <div
                className="overflow-hidden pointer-events-none absolute inset-0 z-1"
                data-us-project={projectId}
                style={{ width: '100%', height: '100%' }}
            />
        </Link>
    </div> 
    )
}