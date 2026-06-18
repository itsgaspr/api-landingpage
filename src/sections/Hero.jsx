import Header from "../components/Header";
import DocsCta from "../components/Docs-Button";
import KeyCta from "../components/Api-Key-Button";
import Dev from "../assets/dev.png"

export default function Hero() {
    return (
        <>
        <section className="hero">
            <div className="hero-conteiner">
                <div className="intro">
                    <div className="content">

                        <h1>
                            Demographic Data API <span>for Developers</span>
                        </h1>

                        <p>
                            Access Mozambique demographic data through a fast, structured REST API designed for developers building modern data-driven applications.
                        </p>
                        <div className="buttons">
                            <KeyCta text={"get your api key"}/>
                            <DocsCta text="read the docs"/>
                        </div>
                    </div>
                </div>

                <div className="image">
                </div>
            </div>
        </section>
        </>
        
    )
}