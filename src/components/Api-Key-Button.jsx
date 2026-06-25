export default function KeyCta({text}) {
    return (
        <button className="api-key-cta py-2 px-3 hover:text-blue-500 transition-all duration-300 ease-in-out border-1 border-[#2A2D35] rounded-lg cursor-pointer capitalize" >
            {text}
        </button>
    )
}