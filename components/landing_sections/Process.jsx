import OfferItem from "@/components/landing_components/OfferItem"

export default function Process() {
    return (
        <section className="flex flex-col justify-center lg:flex-row py-[120px] relative px-[50px] bg-[var(--background)]">
            <div className="flex justify-center lg:block mb-8 lg:mb-0">
                <h1 className="lg:sticky lg:top-[25%] lg:pr-[60px] pb-[15px]">Our Process</h1>
            </div>
            <div className="flex flex-col lg:pl-[60px] lg:pr-0">
                <OfferItem heading="Discover & Define">We start by uncovering the story your brand needs to tell. Through collaborative workshops and mockups, we help you choose the right visual and strategic direction.</OfferItem>
                <OfferItem heading="Create & Curate">Once the direction is clear, we produce high-quality visuals - photos, graphics, and assets that are crafted to reflect your brand’s unique voice and identity.</OfferItem>
                <OfferItem heading="Build & Develop">With the visuals and narrative in place, we develop your site from the ground up using modern technologies to ensure speed, stability, and responsiveness.</OfferItem>
                <OfferItem heading="Launch & Refine">We deploy your site with precision, testing across devices and browsers to ensure a smooth, reliable, and confident go-live experience.</OfferItem>
                <OfferItem heading="Support & Maintain">After launch, we stay with you. We provide ongoing maintenance, fix issues promptly, and ensure your site stays fast, secure, and up-to-date.</OfferItem>
            </div>
        </section>
    )
}