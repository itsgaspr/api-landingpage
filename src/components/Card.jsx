import DocsCta from "./Docs-Button"
export default function Card({icon, title, description, offset}) {
    return(
        <div id="card" style={{marginTop:`${offset}px`}}>
            {icon}
            <h3>
                {title}
            </h3>
            <p>
                {description}
            </p>
            <DocsCta
            text="check details"
            />
        </div>
    )
}