import "../terminal.css";

export default function Terminal() {
    return (
        <div className="terminal">
            <div className="terminal-header">
                <div className="dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                </div>
                <div className="title">gaspr@thebuilder: ~</div>
            </div>

            <div className="terminal-body">
                <div className="line">
                    <span className="prompt">gaspar@thebuilder</span>
                    <span className="path">:~$</span> curl https://moz-demog-api.vercel.app/v1/country
                </div>

                <div className="line muted">
                    &gt; -H "api-key: ***************"
                </div>

                <div className="divider" />

                {/* <div className="label">response</div> */}

                <pre className="output">
                    {`{
  "success": true,
  "status": 200,
  "message": "General country informations found successfully",
  "errors": [],
  "data": [
    {
      "country_name": "mozambique",
      "head_of_state": "Daniel Francisco Chapo",
      "area": 799380,
      "capital_city": "Maputo",
      "independence_date": "1975-06-25",
      "official_language": "Portuguese",
      "year": 2026
    }
  ]
}`}
                </pre>

                <div className="cursor-line">
                    <span className="prompt">gaspr@uthebuilder</span>
                    <span className="path">:~$</span>
                    <span className="cursor">█</span>
                </div>
            </div>
        </div>
    );
}