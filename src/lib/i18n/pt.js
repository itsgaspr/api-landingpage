import { API_V1_URL } from "../constants.js";
import { buildDocs } from "./docsContent.js";

import { marketingPt } from "./marketing/pt.js";

export const pt = {
  brand: "Moz Demog API",
  nav: {
    integrate: "Integrar",
    docs: "Docs",
    getStarted: "Começar",
    faq: "FAQ",
    coverage: "Cobertura",
    useCases: "Casos de uso",
    contact: "Contacto",
  },
  hero: {
    titleLine1: "Dados demográficos",
    titleLine2: "para developers",
    description:
      "A forma mais simples de aceder a dados de população e indicadores de Moçambique. JSON estruturado do INE — entregue através de uma API REST limpa.",
    ctaPrimary: "Começar",
    ctaSecondary: "Documentação",
    footnote: "Dados oficiais do INE · 2017–2026 · Gratuito",
  },
  integrate: {
    title: "Integre",
    description:
      "Uma interface simples para começar a consultar dados demográficos em minutos. Funciona com curl, fetch, Python ou qualquer cliente HTTP.",
  },
  features: {
    titleLine1: "Experiência de developer",
    titleLine2: "de primeira classe",
    description:
      "Construímos a API que gostaríamos de ter — uma que funciona quando precisa de dados demográficos fiáveis sobre Moçambique.",
    items: [
      {
        title: "Respostas JSON estruturadas",
        description:
          "Cada endpoint devolve um envelope consistente — success, status, message, data e metadata de paginação quando aplicável.",
      },
      {
        title: "Dados oficiais do INE",
        description:
          "População, dados provinciais, esperança de vida, mortalidade infantil, taxas de dependência e indicadores nacionais de 2017 a 2026.",
      },
      {
        title: "Feito para developers",
        description:
          "Endpoints GET só de leitura, autenticação por chave API, 100 pedidos por minuto e códigos de erro claros. Sem pré-processamento.",
      },
    ],
  },
  about: {
    title: "Tudo sob o seu controlo",
    description:
      "Consulte indicadores nacionais ao longo de uma década, explore população provincial de 2023 e filtre por ano, província ou campo — tudo numa única API.",
    stats: {
      baseUrl: "URL base",
      coverage: "Cobertura",
      provinces: "Províncias",
      rateLimit: "Limite de taxa",
    },
    provincesTitle: "Províncias cobertas",
    footnote:
      "API só de leitura · Detalhe provincial disponível para 2023 · Dados do INE",
  },
  getStarted: {
    title: "Comece a fazer pedidos hoje",
    description:
      "Crie uma conta gratuita e receba a sua chave API por email. Sem cartão de crédito. Sem configuração.",
  },
  auth: {
    howItWorks: "Como funciona",
    steps: [
      "Crie uma conta gratuita — a sua primeira chave é gerada automaticamente.",
      "Verifique o email para obter a chave (começa por mz).",
      "Envie-a como x-api-key em cada pedido /v1.",
    ],
    tabs: {
      signup: "Criar conta",
      generate: "Nova chave",
      forgot: "Recuperar palavra-passe",
    },
    fields: {
      username: "Nome de utilizador",
      email: "Email",
      password: "Palavra-passe",
      confirmPassword: "Confirmar palavra-passe",
      accountEmail: "Email da conta",
      keyName: "Nome da chave",
      newPassword: "Nova palavra-passe",
      confirmNewPassword: "Confirmar nova palavra-passe",
    },
    placeholders: {
      username: "seunome",
      email: "voce@exemplo.com",
      password: "Mínimo 8 caracteres",
      confirmPassword: "Repita a palavra-passe",
      keyName: "default",
    },
    submit: {
      signup: "Criar conta",
      signupLoading: "A criar conta...",
      generate: "Gerar chave",
      generateLoading: "A gerar...",
      forgot: "Enviar link",
      forgotLoading: "A enviar...",
      reset: "Atualizar palavra-passe",
      resetLoading: "A atualizar...",
    },
    forgotHint:
      "Introduza o email da conta. Se existir, enviamos um link por email para escolher uma nova palavra-passe. O link só funciona uma vez.",
    forgotPasswordLink: "Esqueceu a palavra-passe?",
    backToGenerate: "Voltar a nova chave",
    goToDocs: "Ver documentação",
    generateHint: "Para contas existentes. Confirme email e palavra-passe para receber uma nova chave API.",
    resetPage: {
      title: "Escolha uma nova palavra-passe",
      description:
        "Abriu o link do email. Introduza a nova palavra-passe abaixo — não precisa de copiar nada.",
      invalidDescription:
        "Este link de recuperação está em falta ou é inválido. Peça um novo link no separador Nova chave.",
      requestNewLink: "Pedir novo link de recuperação",
    },
    footnote: "As chaves são enviadas por email e nunca mostradas no browser.",
    errors: {
      fillAll: "Por favor preencha todos os campos.",
      passwordLength: "A palavra-passe deve ter pelo menos 8 caracteres.",
      passwordMatch: "As palavras-passe não coincidem.",
      emailRequired: "Introduza o email associado à sua conta.",
      signupFailed: "Não foi possível criar a conta. Tente novamente.",
      generateFailed: "Não foi possível gerar a chave. Tente novamente.",
      network: "Erro de rede. Verifique a ligação e tente novamente.",
      invalidResetLink:
        "Este link de recuperação é inválido ou já foi utilizado. Peça um novo.",
    },
    success: {
      signup:
        "Conta criada. A sua chave API foi enviada por email — verifique a caixa de entrada antes do primeiro pedido.",
      generate: "Nova chave API enviada por email. Use-a no cabeçalho x-api-key.",
      forgot:
        "Se existir uma conta com esse email, enviámos um link de recuperação. Verifique a caixa de entrada — o link só pode ser usado uma vez.",
      reset: "Palavra-passe atualizada. Pode iniciar sessão com a nova palavra-passe.",
    },
  },
  footer: {
    ctaTitle: "Dados demográficos, disponíveis hoje.",
    getStarted: "Começar",
    contact: "Contacto",
    builtBy: "Dados do INE · Desenvolvido por",
    documentation: "Documentação",
    getApiKey: "Obter chave API",
    terms: "Termos",
    privacy: "Privacidade",
    status: "Estado",
    faq: "FAQ",
  },
  language: {
    en: "English",
    pt: "Português",
  },
  common: {
    copy: "Copiar",
    copied: "Copiado",
  },
  docs: buildDocs("pt", API_V1_URL),
  ...marketingPt,
};
