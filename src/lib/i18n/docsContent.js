const sharedExamples = (baseUrl) => ({
  countryRequest: `curl "${baseUrl}/country?year=2023" \\\n  -H "x-api-key: YOUR_API_KEY"`,
  countryResponse: `{
  "success": true,
  "status": 200,
  "message": "General country information found successfully.",
  "errors": [],
  "data": [{
    "country_name": "Mozambique",
    "head_of_state": "Felipe Jacinto Nyusi",
    "area": 799380,
    "capital_city": "Maputo",
    "independence_date": "1975-06-25",
    "official_language": "Portuguese",
    "year": 2023
  }]
}`,
  populationRequest: `curl "${baseUrl}/population?year=2023&p_name=Maputo" \\\n  -H "x-api-key: YOUR_API_KEY"`,
  populationResponse: `{
  "success": true,
  "status": 200,
  "message": "Population data retrieved successfully.",
  "errors": [],
  "data": [{
    "year": 2023,
    "province_name": "Maputo",
    "population_density": 95,
    "population_per_thousand": {
      "total": 2480,
      "male": 1198,
      "female": 1282
    },
    "percentual_structure": {
      "total": 7.6,
      "male": 7.6,
      "female": 7.7
    }
  }],
  "metadata": {
    "current_page": 1,
    "records_per_page": 5,
    "total_records": 1,
    "total_pages": 1,
    "has_next": false,
    "has_prev": false
  }
}`,
  indicatorsRequest: `curl "${baseUrl}/indicators?y_start=2020&y_end=2023&fields=l_expectancy" \\\n  -H "x-api-key: YOUR_API_KEY"`,
  indicatorsResponse: `{
  "success": true,
  "status": 200,
  "message": "Population indicators data retrieved successfully.",
  "errors": [],
  "data": [{
    "year": 2020,
    "life_expectancy": {
      "average": 54.9,
      "male": 52.1,
      "female": 57.8
    }
  }],
  "metadata": {
    "current_page": 1,
    "records_per_page": 5,
    "total_records": 4,
    "total_pages": 1,
    "has_next": false,
    "has_prev": false
  }
}`,
  provincesRequest: `curl "${baseUrl}/provinces/info?p_name=Nampula" \\\n  -H "x-api-key: YOUR_API_KEY"`,
  provincesResponse: `{
  "success": true,
  "status": 200,
  "message": "Province information found successfully.",
  "errors": [],
  "data": [{
    "year": 2023,
    "province_name": "Nampula",
    "population_density": 81,
    "area": 81606,
    "data_state": "observed"
  }],
  "metadata": {
    "current_page": 1,
    "records_per_page": 5,
    "total_records": 1,
    "total_pages": 1,
    "has_next": false,
    "has_prev": false
  }
}`,
  provinceListRequest: `curl "${baseUrl}/provinces" \\\n  -H "x-api-key: YOUR_API_KEY"`,
  provinceListResponse: `{
  "success": true,
  "status": 200,
  "message": "Province list retrieved successfully.",
  "errors": [],
  "data": [{
    "provinces": [
      "Niassa",
      "Cabo Delgado",
      "Nampula",
      "Zambezia",
      "Tete",
      "Manica",
      "Sofala",
      "Inhambane",
      "Gaza",
      "Maputo",
      "Cidade de Maputo"
    ]
  }]
}`,
  authExample: `curl "${baseUrl}/country" \\\n  -H "x-api-key: mzYOUR_KEY_HERE"`,
  responseFormat: `{
  "success": true,
  "status": 200,
  "message": "Descriptive message",
  "errors": [],
  "data": [],
  "metadata": {}
}`,
});

const copy = {
  en: {
    title: "Documentation",
    description:
      "Everything you need to authenticate, query endpoints, and handle responses.",
    sections: [
      { id: "overview", label: "Overview" },
      { id: "authentication", label: "Authentication" },
      { id: "response-format", label: "Response format" },
      { id: "country", label: "GET /country" },
      { id: "population", label: "GET /population" },
      { id: "indicators", label: "GET /indicators" },
      { id: "provinces", label: "GET /provinces/info" },
      { id: "province-list", label: "GET /provinces" },
      { id: "errors", label: "Errors & limits" },
    ],
    overviewTitle: "Overview",
    overviewLabels: {
      baseUrl: "Base URL",
      source: "Data source",
      coverage: "Coverage",
      methods: "Methods",
      format: "Format",
      rateLimit: "Rate limit",
    },
    overviewValues: {
      source: "National Institute of Statistics of Mozambique (INE)",
      coverage: "2017–2026 (observed and projected)",
      methods: "GET only — read-only API",
      format: "JSON",
      rateLimit: "100 requests per minute on data endpoints",
      authRateLimit: "5 requests per minute on /auth routes",
    },
    authTitle: "Authentication",
    authDescription:
      "Every /v1 request must include a valid API key in the x-api-key header. Keys are prefixed with mz and delivered by email after registration.",
    authHeaderLabel: "Header name:",
    responseTitle: "Response format",
    responseDescription:
      "All endpoints return a consistent JSON envelope. List endpoints include a metadata object with pagination fields: current_page, records_per_page, total_records, total_pages, has_next, and has_prev.",
    errorsTitle: "Errors & limits",
    errorsFootnote:
      "Auth routes (/auth/*) are limited to {authRateLimit}. Data endpoints are limited to {rateLimit}.",
    table: {
      parameter: "Parameter",
      type: "Type",
      required: "Required",
      description: "Description",
      status: "Status",
      meaning: "Meaning",
      noParams: "No query parameters.",
      yes: "Yes",
      no: "No",
      examplePrefix: "e.g.",
    },
    endpoint: {
      parameters: "Parameters",
      exampleRequest: "Example request",
      exampleResponse: "Example response",
    },
    errorCodes: [
      {
        code: "400",
        meaning:
          "Invalid or unrecognized query parameters — e.g. unknown province name, invalid year, or malformed fields.",
      },
      { code: "401", meaning: "Missing or invalid x-api-key header." },
      {
        code: "404",
        meaning: "Valid query, but no records matched the given filters.",
      },
      { code: "429", meaning: "Rate limit exceeded. Retry after 60 seconds." },
      { code: "500", meaning: "Internal server error." },
    ],
    endpoints: [
      {
        id: "country",
        title: "Country information",
        summary:
          "General and institutional information about Mozambique — capital, area, official language, independence date, and head of state.",
        notes: [
          "If no year is provided, the current calendar year is used.",
          "Available years: 2017 through 2026.",
        ],
        parameters: [
          {
            name: "year",
            type: "integer",
            required: false,
            description: "Year for the returned record.",
            example: "2023",
          },
        ],
      },
      {
        id: "population",
        title: "Population by province",
        summary:
          "Provincial population data for 2023 — density, per-thousand structure, and percentage share of national population.",
        notes: [
          "Province-level data is currently available for 2023 only.",
          "Supports pagination. Defaults: page=1, per_page=5.",
          "page and per_page must be between 1 and 49.",
        ],
        parameters: [
          {
            name: "field",
            type: "string",
            required: false,
            description:
              "Filter output shape. p_thousand — population per 1,000 inhabitants. p_structure — percentage share of national population.",
            example: "p_structure",
          },
          {
            name: "year",
            type: "integer",
            required: false,
            description: "Data year. Currently only 2023 is available.",
            example: "2023",
          },
          {
            name: "p_name",
            type: "string",
            required: false,
            description: "Filter by province name.",
            example: "Cabo Delgado",
          },
          {
            name: "page",
            type: "integer",
            required: false,
            description: "Page number (1–49). Default: 1.",
            example: "1",
          },
          {
            name: "per_page",
            type: "integer",
            required: false,
            description: "Records per page (1–49). Default: 5.",
            example: "5",
          },
        ],
      },
      {
        id: "indicators",
        title: "Demographic indicators",
        summary:
          "National demographic indicators from 2017 to 2026 — population totals, birth and mortality rates, life expectancy, infant mortality, and dependency rates.",
        notes: [
          "All parameters are optional. Without filters, all available indicator groups are returned.",
          "Use y_start and y_end together to query a year range.",
          "Supports pagination.",
        ],
        parameters: [
          {
            name: "fields",
            type: "string[]",
            required: false,
            description:
              "Limit returned groups: p_thousand, i_mortality, d_rate, l_expectancy. Omit to return all. Pass a single value (e.g. l_expectancy) or a JSON array (e.g. [\"l_expectancy\"]).",
            example: "l_expectancy",
          },
          {
            name: "y_start",
            type: "integer",
            required: false,
            description: "Start year. If used alone, returns only that year.",
            example: "2017",
          },
          {
            name: "y_end",
            type: "integer",
            required: false,
            description: "End year. Must be used with y_start and be greater than y_start.",
            example: "2022",
          },
          {
            name: "page",
            type: "integer",
            required: false,
            description: "Page number (1–49). Default: 1.",
            example: "1",
          },
          {
            name: "per_page",
            type: "integer",
            required: false,
            description: "Records per page (1–49). Default: 5.",
            example: "5",
          },
        ],
      },
      {
        id: "provinces",
        title: "Province details",
        summary:
          "General information for each province — area, population density, and data state. Data is from 2023.",
        notes: ["Supports pagination.", "Filter by province name with p_name."],
        parameters: [
          {
            name: "p_name",
            type: "string",
            required: false,
            description: "Province name to filter results.",
            example: "Maputo",
          },
          {
            name: "page",
            type: "integer",
            required: false,
            description: "Page number (1–49). Default: 1.",
            example: "1",
          },
          {
            name: "per_page",
            type: "integer",
            required: false,
            description: "Records per page (1–49). Default: 5.",
            example: "5",
          },
        ],
      },
      {
        id: "province-list",
        title: "Province list",
        summary: "Returns the list of all provinces available in the dataset.",
        notes: ["No query parameters."],
        parameters: [],
      },
    ],
  },
  pt: {
    title: "Documentação",
    description:
      "Tudo o que precisa para autenticar, consultar endpoints e tratar respostas.",
    sections: [
      { id: "overview", label: "Visão geral" },
      { id: "authentication", label: "Autenticação" },
      { id: "response-format", label: "Formato de resposta" },
      { id: "country", label: "GET /country" },
      { id: "population", label: "GET /population" },
      { id: "indicators", label: "GET /indicators" },
      { id: "provinces", label: "GET /provinces/info" },
      { id: "province-list", label: "GET /provinces" },
      { id: "errors", label: "Erros e limites" },
    ],
    overviewTitle: "Visão geral",
    overviewLabels: {
      baseUrl: "URL base",
      source: "Fonte de dados",
      coverage: "Cobertura",
      methods: "Métodos",
      format: "Formato",
      rateLimit: "Limite de taxa",
    },
    overviewValues: {
      source: "Instituto Nacional de Estatística de Moçambique (INE)",
      coverage: "2017–2026 (observado e projetado)",
      methods: "Apenas GET — API só de leitura",
      format: "JSON",
      rateLimit: "100 pedidos por minuto nos endpoints de dados",
      authRateLimit: "5 pedidos por minuto nas rotas /auth",
    },
    authTitle: "Autenticação",
    authDescription:
      "Cada pedido /v1 deve incluir uma chave API válida no cabeçalho x-api-key. As chaves têm o prefixo mz e são enviadas por email após o registo.",
    authHeaderLabel: "Nome do cabeçalho:",
    responseTitle: "Formato de resposta",
    responseDescription:
      "Todos os endpoints devolvem um envelope JSON consistente. Endpoints de listagem incluem um objeto metadata com paginação: current_page, records_per_page, total_records, total_pages, has_next e has_prev.",
    errorsTitle: "Erros e limites",
    errorsFootnote:
      "As rotas /auth/* estão limitadas a {authRateLimit}. Os endpoints de dados estão limitados a {rateLimit}.",
    table: {
      parameter: "Parâmetro",
      type: "Tipo",
      required: "Obrigatório",
      description: "Descrição",
      status: "Estado",
      meaning: "Significado",
      noParams: "Sem parâmetros de consulta.",
      yes: "Sim",
      no: "Não",
      examplePrefix: "ex.",
    },
    endpoint: {
      parameters: "Parâmetros",
      exampleRequest: "Exemplo de pedido",
      exampleResponse: "Exemplo de resposta",
    },
    errorCodes: [
      {
        code: "400",
        meaning:
          "Parâmetros de consulta inválidos ou não reconhecidos — ex.: nome de província desconhecido, ano inválido ou fields mal formado.",
      },
      { code: "401", meaning: "Cabeçalho x-api-key em falta ou inválido." },
      {
        code: "404",
        meaning: "Consulta válida, mas nenhum registo correspondeu aos filtros.",
      },
      { code: "429", meaning: "Limite de taxa excedido. Tente novamente após 60 segundos." },
      { code: "500", meaning: "Erro interno do servidor." },
    ],
    endpoints: [
      {
        id: "country",
        title: "Informação do país",
        summary:
          "Informação geral e institucional sobre Moçambique — capital, área, língua oficial, data de independência e chefe de Estado.",
        notes: [
          "Se nenhum ano for indicado, usa-se o ano civil atual.",
          "Anos disponíveis: 2017 a 2026.",
        ],
        parameters: [
          {
            name: "year",
            type: "integer",
            required: false,
            description: "Ano do registo devolvido.",
            example: "2023",
          },
        ],
      },
      {
        id: "population",
        title: "População por província",
        summary:
          "Dados populacionais provinciais de 2023 — densidade, estrutura por mil habitantes e percentagem da população nacional.",
        notes: [
          "Dados ao nível provincial disponíveis apenas para 2023.",
          "Suporta paginação. Valores por defeito: page=1, per_page=5.",
          "page e per_page devem estar entre 1 e 49.",
        ],
        parameters: [
          {
            name: "field",
            type: "string",
            required: false,
            description:
              "Filtra a forma dos dados. p_thousand — população por 1.000 habitantes. p_structure — percentagem da população nacional.",
            example: "p_structure",
          },
          {
            name: "year",
            type: "integer",
            required: false,
            description: "Ano dos dados. Atualmente só 2023 está disponível.",
            example: "2023",
          },
          {
            name: "p_name",
            type: "string",
            required: false,
            description: "Filtrar por nome da província.",
            example: "Cabo Delgado",
          },
          {
            name: "page",
            type: "integer",
            required: false,
            description: "Número da página (1–49). Por defeito: 1.",
            example: "1",
          },
          {
            name: "per_page",
            type: "integer",
            required: false,
            description: "Registos por página (1–49). Por defeito: 5.",
            example: "5",
          },
        ],
      },
      {
        id: "indicators",
        title: "Indicadores demográficos",
        summary:
          "Indicadores demográficos nacionais de 2017 a 2026 — totais populacionais, taxas de natalidade e mortalidade, esperança de vida, mortalidade infantil e taxas de dependência.",
        notes: [
          "Todos os parâmetros são opcionais. Sem filtros, devolve todos os grupos de indicadores.",
          "Use y_start e y_end em conjunto para consultar um intervalo de anos.",
          "Suporta paginação.",
        ],
        parameters: [
          {
            name: "fields",
            type: "string[]",
            required: false,
            description:
              "Limita grupos devolvidos: p_thousand, i_mortality, d_rate, l_expectancy. Omitir para devolver todos. Passe um valor único (ex. l_expectancy) ou um array JSON (ex. [\"l_expectancy\"]).",
            example: "l_expectancy",
          },
          {
            name: "y_start",
            type: "integer",
            required: false,
            description: "Ano inicial. Usado sozinho, devolve apenas esse ano.",
            example: "2017",
          },
          {
            name: "y_end",
            type: "integer",
            required: false,
            description: "Ano final. Deve ser usado com y_start e ser maior que y_start.",
            example: "2022",
          },
          {
            name: "page",
            type: "integer",
            required: false,
            description: "Número da página (1–49). Por defeito: 1.",
            example: "1",
          },
          {
            name: "per_page",
            type: "integer",
            required: false,
            description: "Registos por página (1–49). Por defeito: 5.",
            example: "5",
          },
        ],
      },
      {
        id: "provinces",
        title: "Detalhes da província",
        summary:
          "Informação geral de cada província — área, densidade populacional e estado dos dados. Dados de 2023.",
        notes: ["Suporta paginação.", "Filtrar por nome da província com p_name."],
        parameters: [
          {
            name: "p_name",
            type: "string",
            required: false,
            description: "Nome da província para filtrar resultados.",
            example: "Maputo",
          },
          {
            name: "page",
            type: "integer",
            required: false,
            description: "Número da página (1–49). Por defeito: 1.",
            example: "1",
          },
          {
            name: "per_page",
            type: "integer",
            required: false,
            description: "Registos por página (1–49). Por defeito: 5.",
            example: "5",
          },
        ],
      },
      {
        id: "province-list",
        title: "Lista de províncias",
        summary: "Devolve a lista de todas as províncias disponíveis no conjunto de dados.",
        notes: ["Sem parâmetros de consulta."],
        parameters: [],
      },
    ],
  },
};

const endpointMeta = {
  country: { method: "GET", path: "/v1/country" },
  population: { method: "GET", path: "/v1/population" },
  indicators: { method: "GET", path: "/v1/indicators" },
  provinces: { method: "GET", path: "/v1/provinces/info" },
  "province-list": { method: "GET", path: "/v1/provinces" },
};

const exampleKeys = {
  country: ["countryRequest", "countryResponse"],
  population: ["populationRequest", "populationResponse"],
  indicators: ["indicatorsRequest", "indicatorsResponse"],
  provinces: ["provincesRequest", "provincesResponse"],
  "province-list": ["provinceListRequest", "provinceListResponse"],
};

export function buildDocs(locale, baseUrl) {
  const text = copy[locale];
  const examples = sharedExamples(baseUrl);

  const endpoints = text.endpoints.map((endpoint) => {
    const [requestKey, responseKey] = exampleKeys[endpoint.id];
    return {
      ...endpointMeta[endpoint.id],
      ...endpoint,
      exampleRequest: examples[requestKey],
      exampleResponse: examples[responseKey],
    };
  });

  return {
    ...text,
    authHeader: "x-api-key",
    authExample: examples.authExample,
    responseFormat: examples.responseFormat,
    baseUrl,
    endpoints,
  };
}
