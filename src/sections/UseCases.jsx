import DocsCta from "../components/Docs-Button"
import KeyCta from "../components/Api-Key-Button"
import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"

export default function UseCases() {
    return (
        <>
            <section className="h-screen mx-28 flex flex-col justify-center" id="usecases" >
                <div className="flex flex-col justify-center items-center">

                    <div className="heading flex flex-col gap-1 self-start w-full">
                        <SectionHeader
                        title={"Use Cases"}
                        description={"From developers to researchers — Moz Demog API is free and open for anyone who needs reliable demographic data about Mozambique."}
                        />

                    </div>

                    <div className="flex justify-between gap-3 w-full">
                        <Card
                            icon={<i class="fa-solid fa-code"></i>}
                            title="Developers"
                            description="Build data-driven apps, dashboards, and maps with structured demographic data from Mozambique — ready to query, no preprocessing needed."
                        />
                        <Card
                            offset={30}
                            icon={<i class="fa-solid fa-magnifying-glass-chart"></i>}
                            title="Researchers & Academics"
                            description="Access a decade of verified INE statistics to support population studies, trend analysis, and academic publications." />

                        <Card
                            offset={60}
                            title="Students"
                            icon={<i class="fa-solid fa-graduation-cap"></i>}
                            description="Practice real-world API integration and data visualization with live, structured data — no setup, no cost, just query and build." />
                    </div>

                    <div className="flex justify-center items-center p-10 border-[#2A2D35] w-full mt-16
                    
                    border-b-2 border-b-blue-500 rounded-lg bg-[url('https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover">
                        <div className="cards-cta flex justify-between w-1/5 self-end">
                            <KeyCta text={"get your api-key"}
                            />
                            <DocsCta
                                text={"read the docs"}
                            />
                        </div>

                    </div>


                </div>

            </section>
        </>
    )
}