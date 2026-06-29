export default function DocsCta({text}) {

    const redirectToDocs = () => {
        window.open("https://moz-demog-api.vercel.app/v1/docs", "_blank", "noopener,noreferer");
    }

    return (
        <button className="docs-btn font-normal cursor-pointer text-[#3B82F6] capitalize" onClick={redirectToDocs}>
            {text} <i class="fa-solid fa-arrow-right-long fa-fade text-[#3B82F6] ml-3"></i>
        </button>
    )
}