import { API_V1_URL } from "./constants.js";

export const heroSnippets = {
  curl: {
    request: `curl "${API_V1_URL}/country?year=2023" \\
  -H "x-api-key: YOUR_API_KEY"`,
    response: `{
  "success": true,
  "data": [{
    "country_name": "Mozambique",
    "capital_city": "Maputo",
    "year": 2023
  }]
}`,
  },
  fetch: {
    request: `const res = await fetch(
  "${API_V1_URL}/country?year=2023",
  { headers: { "x-api-key": process.env.MOZ_API_KEY } }
);

const { data } = await res.json();`,
    response: `// data[0].country_name → "Mozambique"`,
  },
  python: {
    request: `import requests

res = requests.get(
    "${API_V1_URL}/country",
    headers={"x-api-key": "YOUR_API_KEY"},
    params={"year": 2023},
)
print(res.json()["data"])`,
    response: `# [{'country_name': 'Mozambique', ...}]`,
  },
};

export const integrateSnippets = {
  curl: `curl "${API_V1_URL}/population?year=2023&p_name=Maputo" \\
  -H "x-api-key: YOUR_API_KEY"`,
  fetch: `const res = await fetch(
  "${API_V1_URL}/indicators?y_start=2020&y_end=2023",
  { headers: { "x-api-key": process.env.MOZ_API_KEY } }
);

const { data } = await res.json();`,
  python: `import requests

res = requests.get(
    "${API_V1_URL}/provinces/info",
    headers={"x-api-key": "YOUR_API_KEY"},
    params={"p_name": "Nampula"},
)
print(res.json()["data"])`,
};

export const codeTabs = Object.keys(integrateSnippets);

export function snippetFilename(tab) {
  return tab === "fetch" ? "example.js" : `example.${tab}`;
}
