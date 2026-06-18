import DocsCta from "../components/Docs-Button"
import KeyCta from "../components/Api-Key-Button"
import Card from "../components/Card"

export default function Features() {
    return (
        <>
            <section id="features">
                <div className="intro-header">
                    <h2>
                        features
                    </h2>
                    <p>
                        Population, indicators, and provincial data from 2017 to 2026 — all from INE, all free, all in one API.
                    </p>
                </div>

                <div className="card-conteiner">
                    <Card
                        icon={<i class="fa-solid fa-people-group"></i>}
                        title="Population per Province"
                        description="Explore structured population data across all provinces of Mozambique — total inhabitants, gender distribution, density, and percentage share."
                    />
                    <Card
                        offset={30}
                        icon={<i class="fa-solid fa-chart-line"></i>}
                        title="Indicators over Time"
                        description="Track Mozambique's demographic evolution across a full decade — from 2017 through 2026, including projections."
                    />
                    <Card
                        offset={60}
                        icon={<i class="fa-solid fa-bolt"></i>}
                        title="Free, Open, and Ready to Use"
                        description=" No cost. Send a GET request with your API key and receive a structured JSON in seconds."
                    />
                </div>

                <div className="bottom-card">
                    <div className="q-start">
                        <h3>
                            Quick start
                             <i class="fa-solid fa-arrow-right-long fa-fade"></i>
                        </h3>
                        <pre className="q-code">
                            <code>
                                <span>
                                ~$ 
                                </span> 
                                {`curl https://moz-demog-api.vercel.app/v1/population \\ -H "x-api-key: YOUR_API_KEY"`}</code>
                        </pre>
                    </div>

                    <div className="cta-btns">
                        <KeyCta text={"get your api-key"}
                             />
                        <DocsCta
                            text={"read the docs"}
                        />

                    </div>
                </div>

            </section>
        </>
    )
}