export const marketingEn = {
  meta: {
    home: {
      title: "Moz Demog API — Mozambique Demographic Data",
      description:
        "Free REST API for Mozambique population and demographic indicators from INE. Sign up, get your API key, and start building.",
    },
    docs: {
      title: "Documentation — Moz Demog API",
      description: "Authenticate, query endpoints, and handle responses.",
    },
    terms: {
      title: "Terms of Use — Moz Demog API",
      description: "Terms of use for the Moz Demog API service.",
    },
    privacy: {
      title: "Privacy Policy — Moz Demog API",
      description: "How we collect and use your data.",
    },
    notFound: {
      title: "Page not found — Moz Demog API",
      description: "The page you are looking for does not exist.",
    },
    resetPassword: {
      title: "Reset password — Moz Demog API",
      description: "Choose a new password using the link from your email.",
    },
  },
  trust: {
    badges: {
      ine: "INE sourced",
      coverage: "2017–2026",
      rateLimit: "100 req/min",
      status: "Operational",
    },
    disclaimer:
      "Moz Demog API is an independent service. It is not affiliated with or endorsed by INE. Data is sourced from publicly available INE statistics.",
  },
  howItWorks: {
    title: "How it works",
    description: "Three steps from signup to your first JSON response.",
    steps: [
      { title: "Create an account", body: "Register with your email. Your first API key is generated automatically." },
      { title: "Check your inbox", body: "We send your key by email (prefix mz). Keys are never shown in the browser." },
      { title: "Make a request", body: "Add the x-api-key header to any /v1 endpoint and receive structured JSON." },
    ],
  },
  docsPreview: {
    title: "Documentation",
    description:
      "Every endpoint follows the same pattern — authenticate with x-api-key, query with parameters, parse JSON. Here is a complete example.",
    readFullDocs: "Read full documentation",
  },
  useCases: {
    title: "Built for real projects",
    description: "Whether you are shipping software or studying demographics, the API meets you where you are.",
    items: [
      {
        title: "Apps & dashboards",
        description: "Power civic tools, internal dashboards, or data visualizations with live provincial and national statistics.",
      },
      {
        title: "Research & analysis",
        description: "Pull a decade of INE indicators into notebooks, R, or Python without manual extraction from reports.",
      },
      {
        title: "Learning & teaching",
        description: "Practice HTTP clients, pagination, and JSON parsing with real demographic data — free and documented.",
      },
    ],
  },
  dataCoverage: {
    title: "Data coverage",
    description:
      "Query national indicators across a full decade, drill into provincial population for 2023, and filter by year, province, or field — all through a single API.",
    columns: {
      resource: "Resource",
      years: "Years",
      scope: "Scope",
      notes: "Notes",
    },
    rows: [
      {
        resource: "GET /v1/country",
        years: "2017 – 2026",
        scope: "National",
        notes: "Capital, area, head of state, language",
      },
      {
        resource: "GET /v1/indicators",
        years: "2017 – 2026",
        scope: "National",
        notes: "Birth rate, mortality, life expectancy, urbanization",
      },
      {
        resource: "GET /v1/population",
        years: "2023",
        scope: "Provincial",
        notes: "Density, per-thousand structure, gender share",
      },
      {
        resource: "GET /v1/provinces/info",
        years: "2023",
        scope: "Provincial",
        notes: "Area, density, data state",
      },
      {
        resource: "GET /v1/provinces",
        years: "—",
        scope: "Reference",
        notes: "List of all 11 provinces",
      },
    ],
  },
  faq: {
    title: "FAQ",
    description: "Common questions about the API, keys, and data.",
    items: [
      {
        q: "Is the API free?",
        a: "Yes. Moz Demog API is free to use. Create an account, receive your key by email, and start making requests.",
      },
      {
        q: "Where does the data come from?",
        a: "All demographic data is sourced from the National Institute of Statistics of Mozambique (INE). We structure and maintain it — this is not an official INE product.",
      },
      {
        q: "Why do I need an API key?",
        a: "Keys help prevent abuse and let us offer fair rate limits. Each key is tied to your account and sent securely by email.",
      },
      {
        q: "Why is province data only available for 2023?",
        a: "Province-level detail in our database currently covers 2023. National indicators span 2017–2026 including projections.",
      },
      {
        q: "Can I use this commercially?",
        a: "Yes, for now the API is free for personal and commercial use. See our Terms of Use for details and attribution expectations.",
      },
      {
        q: "What are the rate limits?",
        a: "100 requests per minute on data endpoints. Auth routes are limited to 5 requests per minute.",
      },
      {
        q: "I lost my API key. What do I do?",
        a: "Open the New key tab, enter your account email and password, and we'll send a new key by email.",
      },
      {
        q: "How do I report wrong data or bugs?",
        a: "Use the contact form at the bottom of the home page. Include the endpoint, query parameters, and what you expected vs received.",
      },
    ],
  },
  contact: {
    title: "Contact & support",
    description:
      "Questions, wrong data, or general feedback — send us a message and we'll get back to you.",
    fields: {
      name: "Name",
      email: "Your email",
      topic: "Topic",
      message: "Message",
    },
    placeholders: {
      name: "Optional",
      email: "you@example.com",
      message: "Describe your question or issue...",
    },
    submit: "Send message",
    submitting: "Sending...",
    success: "Message sent. We'll reply to the email you provided.",
    privacyNote: "Your email is only used to reply to this message.",
    errors: {
      required: "Please fill in your email and message.",
      sendFailed: "Could not send your message. Please try again.",
      network: "Network error. Check your connection and try again.",
    },
    topics: ["Bug reports", "Data corrections", "API questions", "General feedback"],
  },
  notFound: {
    title: "Page not found",
    description: "The page you are looking for does not exist or has been moved.",
    home: "Back to home",
    docs: "View documentation",
  },
  legal: {
    termsTitle: "Terms of Use",
    privacyTitle: "Privacy Policy",
    lastUpdated: "Last updated: August 2026",
    termsSections: [
      {
        title: "1. Service description",
        body: "Moz Demog API provides read-only access to structured demographic data about Mozambique via HTTP. The service is provided free of charge at the discretion of the operator.",
      },
      {
        title: "2. Acceptable use",
        body: "You may use the API for personal, educational, and commercial projects. You must not attempt to bypass rate limits, scrape the service aggressively, share keys publicly, or use the API for unlawful purposes.",
      },
      {
        title: "3. API keys & accounts",
        body: "You are responsible for keeping your API key confidential. Do not publish keys in public repositories or client-side code. We may revoke keys that are exposed or abused.",
      },
      {
        title: "4. Data accuracy & attribution",
        body: "Data is sourced from INE public statistics. We strive for accuracy but do not guarantee completeness or timeliness. When publishing work based on this data, attribute INE as the original source. Moz Demog API is an independent service and is not affiliated with INE.",
      },
      {
        title: "5. Availability",
        body: "The service is provided \"as is\" without SLA guarantees. We may modify endpoints, limits, or availability at any time. We will try to communicate significant changes when possible.",
      },
      {
        title: "6. Limitation of liability",
        body: "The operator is not liable for decisions made based on API data, service interruptions, or indirect damages arising from use of the service.",
      },
      {
        title: "7. Changes",
        body: "These terms may be updated. Continued use after changes constitutes acceptance of the revised terms.",
      },
    ],
    privacySections: [
      {
        title: "1. What we collect",
        body: "When you register, we collect your username, email address, and a hashed password. We store API key metadata (not plaintext keys in logs intended for public access). We may log request metadata for abuse prevention.",
      },
      {
        title: "2. How we use your data",
        body: "Your email is used to deliver API keys, password reset links, and essential service messages. We do not sell your personal data to third parties.",
      },
      {
        title: "3. Email communications",
        body: "Transactional emails include account confirmation, API key delivery, and password reset instructions. You cannot opt out of these while maintaining an active account.",
      },
      {
        title: "4. Data retention",
        body: "Account data is retained while your account is active. You may request account deletion through the contact form on our website.",
      },
      {
        title: "5. Cookies & local storage",
        body: "The landing page uses local storage to remember your language preference. We do not use advertising cookies.",
      },
      {
        title: "6. Third parties",
        body: "The API may be hosted on third-party infrastructure (e.g. Vercel, Neon). Email delivery uses a transactional email provider. These processors handle data according to their own policies.",
      },
      {
        title: "7. Contact",
        body: "For privacy questions, use the contact form on our website.",
      },
    ],
  },
};
