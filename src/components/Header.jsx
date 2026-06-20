export default function Header() {
    return (
        <>
            <header>
                <span className="logo">

                    <a href="#home">
                        <i class="fa-solid fa-chart-pie">

                        </i>
                    </a>

                </span>

                <nav>
                    <ul>
                        <li>
                            <a href="#home">home</a>
                        </li>
                        <li>
                            <a href="#features">features</a>
                        </li>
                        <li>
                            <a href="#usecases">use cases</a>
                        </li>

                        <li>
                            <a href="#docs">documentation</a>
                        </li>
                        <li>
                            <a href="#docs">contact</a>
                        </li>
                        <buton className="sign-up">
                            sign-Up
                        </buton>
                    </ul>
                </nav>
            </header>
        </>
    )
}