export default function DocsCta({text}) {
    return (
        <button className="docs-btn font-normal cursor-pointer text-[#3B82F6] capitalize">
            {text} <i class="fa-solid fa-arrow-right-long fa-fade text-[#3B82F6] ml-3"></i>
        </button>
    )
}