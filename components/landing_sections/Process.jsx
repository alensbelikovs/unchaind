import OfferItem from "@/components/landing_components/OfferItem"

export default function Process() {
    return (
        <section className="flex justify-center py-[240px] h-[200vh] relative">
            <div className="h-full">
                <h1 className="sticky top-[25%] pr-[60px]">Our Process</h1>
            </div>
            <div className="flex flex-col pl-[60px]">
                <OfferItem heading="Discover & Define">We start by uncovering the story your brand needs to tell. Through collaborative workshops and mockups, we help you choose the right visual and strategic direction.</OfferItem>
                <OfferItem heading="Create & Curate">Once the direction is clear, we produce high-quality visuals - photos, graphics, and assets that are crafted to reflect your brand’s unique voice and identity.</OfferItem>
                <OfferItem heading="Build & Develop">With the visuals and narrative in place, we develop your site from the ground up using modern technologies to ensure speed, stability, and responsiveness.</OfferItem>
                <OfferItem heading="Launch & Refine">We deploy your site with precision, testing across devices and browsers to ensure a smooth, reliable, and confident go-live experience.</OfferItem>
                <OfferItem heading="Support & Maintain">After launch, we stay with you. We provide ongoing maintenance, fix issues promptly, and ensure your site stays fast, secure, and up-to-date.</OfferItem>
            </div>
        </section>
    )
}