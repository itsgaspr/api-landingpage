import Header from "../components/Header";
import DocsCta from "../components/Docs-Button";
import KeyCta from "../components/Api-Key-Button";
import ApiData from "../assets/moz_demog_api_json_hero.png"

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-conteiner">
                <div className="intro">
                    <div className="content">

                        <h1>
                            Moz Demog API
                        </h1>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit enim explicabo odio nobis nihil assumenda natus, cupiditate, qui sint iusto rem earum eaque tempora voluptatibus quod voluptas ea ab! Repellat!
                        </p>
                        <div className="buttons">
                            <KeyCta />
                            <DocsCta />
                        </div>
                    </div>
                </div>

                <div className="image">

                    <img src={ApiData} alt="api demo image" className="api-demo" />
                    
                </div>
            </div>
        </section>
    )
}