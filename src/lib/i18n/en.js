import { API_V1_URL } from "../constants.js";
import { buildDocs } from "./docsContent.js";
import { marketingEn } from "./marketing/en.js";

export const en = {
  brand: "Moz Demog API",
  nav: {
    integrate: "Integrate",
    docs: "Docs",
    getStarted: "Get started",
    faq: "FAQ",
    coverage: "Coverage",
    useCases: "Use cases",
    contact: "Contact",
  },
  hero: {
    titleLine1: "Demographic data",
    titleLine2: "for developers",
    description:
      "The simplest way to access Mozambique population and indicator data. Structured JSON from INE — delivered through a clean REST API.",
    ctaPrimary: "Get started",
    ctaSecondary: "Documentation",
    footnote: "Official data from INE · 2017–2026 · Free to use",
  },
  integrate: {
    title: "Integrate",
    description:
      "A simple interface so you can start querying demographic data in minutes. Works with curl, fetch, Python, or any HTTP client.",
  },
  features: {
    titleLine1: "First-class",
    titleLine2: "developer experience",
    description:
      "We built the API we wished existed — one that just works when you need reliable demographic data about Mozambique.",
    items: [
      {
        title: "Structured JSON responses",
        description:
          "Every endpoint returns a consistent envelope — success, status, message, data, and pagination metadata where applicable.",
      },
      {
        title: "Official INE data",
        description:
          "Population, provincial breakdowns, life expectancy, infant mortality, dependency rates, and national indicators from 2017 to 2026.",
      },
      {
        title: "Built for developers",
        description:
          "Read-only GET endpoints, API key authentication, 100 requests per minute, and clear error codes. No preprocessing required.",
      },
    ],
  },
  about: {
    title: "Everything in your control",
    description:
      "Query national indicators across a full decade, drill into provincial population for 2023, and filter by year, province, or field — all through a single API.",
    stats: {
      baseUrl: "Base URL",
      coverage: "Coverage",
      provinces: "Provinces",
      rateLimit: "Rate limit",
    },
    provincesTitle: "Provinces covered",
    footnote: "Read-only API · Province-level detail available for 2023 · Data sourced from INE",
  },
  getStarted: {
    title: "Start sending requests today",
    description:
      "Create a free account and receive your API key by email. No credit card. No setup.",
  },
  auth: {
    howItWorks: "How it works",
    steps: [
      "Create a free account — your first key is generated automatically.",
      "Check your email for the key (starts with mz).",
      "Pass it as x-api-key on every /v1 request.",
    ],
    tabs: {
      signup: "Create account",
      generate: "New key",
      forgot: "Reset password",
    },
    fields: {
      username: "Username",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm password",
      accountEmail: "Account email",
      keyName: "Key name",
      newPassword: "New password",
      confirmNewPassword: "Confirm new password",
    },
    placeholders: {
      username: "yourname",
      email: "you@example.com",
      password: "Minimum 8 characters",
      confirmPassword: "Repeat your password",
      keyName: "default",
    },
    submit: {
      signup: "Create account",
      signupLoading: "Creating account...",
      generate: "Generate key",
      generateLoading: "Generating...",
      forgot: "Send reset link",
      forgotLoading: "Sending...",
      reset: "Update password",
      resetLoading: "Updating...",
    },
    forgotHint:
      "Enter your account email. If an account exists, we'll email you a link to choose a new password. The link works once.",
    forgotPasswordLink: "Forgot password?",
    backToGenerate: "Back to new key",
    goToDocs: "View documentation",
    generateHint: "For existing accounts. Confirm your email and password to receive a new API key.",
    resetPage: {
      title: "Choose a new password",
      description:
        "You opened the link from your email. Enter a new password below — no need to copy anything.",
      invalidDescription:
        "This reset link is missing or invalid. Request a new one from the New key tab.",
      requestNewLink: "Request a new reset link",
    },
    footnote: "Keys are delivered by email and never shown in the browser.",
    errors: {
      fillAll: "Please fill in all fields.",
      passwordLength: "Password must be at least 8 characters.",
      passwordMatch: "Passwords do not match.",
      emailRequired: "Please enter the email linked to your account.",
      signupFailed: "Could not create your account. Please try again.",
      generateFailed: "Could not generate a key. Please try again.",
      network: "Network error. Check your connection and try again.",
      invalidResetLink: "This reset link is invalid or has already been used. Request a new one.",
    },
    success: {
      signup:
        "Account created. Your API key has been sent to your email — check your inbox before making your first request.",
      generate: "New API key sent to your email. Use it in the x-api-key header.",
      forgot:
        "If an account exists for that email, we've sent a reset link. Check your inbox — the link can only be used once.",
      reset: "Password updated. You can sign in with your new password.",
    },
  },
  footer: {
    ctaTitle: "Demographic data, available today.",
    getStarted: "Get started",
    contact: "Contact",
    builtBy: "Data from INE · Built by",
    documentation: "Documentation",
    getApiKey: "Get API key",
    terms: "Terms",
    privacy: "Privacy",
    status: "Status",
    faq: "FAQ",
  },
  language: {
    en: "English",
    pt: "Português",
  },
  common: {
    copy: "Copy",
    copied: "Copied",
  },
  docs: buildDocs("en", API_V1_URL),
  ...marketingEn,
};
