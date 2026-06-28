import Card from "../components/Card";
import DocsCta from "../components/Docs-Button";

export default function Docs() {
    return (
        <section className="docs h-screen flex items-center mx-28" id="docs">
            <div className="docs-conteiner py-12 flex flex-col">
                <div className="headers flex flex-col gap-4 w-full mb-12">
                    <h2 className="text-3xl font-normal text-blue-400">
                        Endpoints & Docs
                    </h2>
                    <p className="w-1/3 text-left leading-6">
                        Population, indicators, and provincial data from 2017 to 2026 — all from INE, all free, all in one API.
                    </p>
                </div>

                <div className="card-conteiner w-full flex justify-between gap-6 flex-nowrap mb-12">
                    <Card
                        icon={<i class="fa-solid fa-flag"></i>}
                        title="GET v1/country"
                        description="Retrieve basic information about Mozambique, icnluding its area, population, current president and more."
                    />

                    <Card
                        icon={<i class="fa-solid fa-people-group"></i>}
                        title="GET v1/population"
                        description="Retrieve structured population data across all provinces of Mozambique — total inhabitants, gender distribution, density, and percentage share."
                        offset={30}
                    />

                    <Card
                        icon={<i class="fa-solid fa-chart-line"></i>}
                        title="GET v1/indicators"
                        description="Track Mozambique's demographic evolution across a full decade — from 2017 through 2026, including projections."
                        offset={60}
                    />
                </div>

                <div className="flex
                mt-10
                justify-center 
                items-center p-10 
                border-[#2A2D35] 
                w-full 
                border-b-2 
                border-b-blue-500 
                rounded-lg  
                pl-20
                bg-[url('https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                bg-cover"
                >
                    <div>
                        <DocsCta
                            text={"read the full docs"}
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}