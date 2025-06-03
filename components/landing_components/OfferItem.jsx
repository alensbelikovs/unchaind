export default function OfferItem({ heading="Placeholder", children="This is a placeholder text." }) {
    return (
        <div className="flex flex-col border-b-1">
            <h2 className="pb-[30px] pt-[60px]">{heading}</h2>
            <p className="pb-[30px] max-w-lg">{children}</p>
        </div>
    )
}