export default function SectionHeader({title, description}) {
    return (
        <div className="headers flex flex-col gap-4 w-full mb-12">
            <h2 className="text-3xl font-normal text-[#3B82F6]">
                {title}
            </h2>
            <p className="text-lg leading-6 text-justify tracking-tight w-1/3">
                {description}
            </p>
        </div>
    )
}