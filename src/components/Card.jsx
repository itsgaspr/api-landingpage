import DocsCta from "./Docs-Button"
export default function Card({icon, title, description, offset}) {
    return(
        <div id="card" style={{marginTop:`${offset}px`}} className="max-w-135 border-1 border-[#2A2D35] p-5 rounded-lg box-border h-58 flex-[1_1_calc(33.333%-1.34rem)] border-b-2 border-b-blue-500 ">
            {icon}
            <h3>
                {title}
            </h3>
            <p>
                {description}
            </p>
        </div>
    )
}