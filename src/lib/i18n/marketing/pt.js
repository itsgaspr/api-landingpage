export const marketingPt = {
  meta: {
    home: {
      title: "Moz Demog API — Dados Demográficos de Moçambique",
      description:
        "API REST gratuita para dados de população e indicadores demográficos do INE. Registe-se, obtenha a sua chave API e comece a construir.",
    },
    docs: {
      title: "Documentação — Moz Demog API",
      description: "Autentique, consulte endpoints e trate respostas.",
    },
    terms: {
      title: "Termos de Utilização — Moz Demog API",
      description: "Termos de utilização do serviço Moz Demog API.",
    },
    privacy: {
      title: "Política de Privacidade — Moz Demog API",
      description: "Como recolhemos e utilizamos os seus dados.",
    },
    notFound: {
      title: "Página não encontrada — Moz Demog API",
      description: "A página que procura não existe.",
    },
    resetPassword: {
      title: "Recuperar palavra-passe — Moz Demog API",
      description: "Escolha uma nova palavra-passe através do link enviado por email.",
    },
  },
  trust: {
    badges: {
      ine: "Fonte INE",
      coverage: "2017–2026",
      rateLimit: "100 ped/min",
      status: "Operacional",
    },
    disclaimer:
      "Moz Demog API é um serviço independente. Não é afiliado nem endossado pelo INE. Os dados provêm de estatísticas públicas do INE.",
  },
  howItWorks: {
    title: "Como funciona",
    description: "Três passos desde o registo até à primeira resposta JSON.",
    steps: [
      { title: "Crie uma conta", body: "Registe-se com o seu email. A sua primeira chave API é gerada automaticamente." },
      { title: "Verifique o email", body: "Enviamos a chave por email (prefixo mz). As chaves nunca são mostradas no browser." },
      { title: "Faça um pedido", body: "Adicione o cabeçalho x-api-key a qualquer endpoint /v1 e receba JSON estruturado." },
    ],
  },
  docsPreview: {
    title: "Documentação",
    description:
      "Todos os endpoints seguem o mesmo padrão — autentique com x-api-key, consulte com parâmetros, interprete JSON. Aqui está um exemplo completo.",
    readFullDocs: "Ver documentação completa",
  },
  useCases: {
    title: "Feito para projetos reais",
    description: "Quer esteja a desenvolver software ou a estudar demografia, a API adapta-se a si.",
    items: [
      {
        title: "Apps e dashboards",
        description: "Alimente ferramentas cívicas, dashboards internos ou visualizações com estatísticas provinciais e nacionais.",
      },
      {
        title: "Investigação e análise",
        description: "Extraia uma década de indicadores do INE para notebooks, R ou Python sem copiar dados de relatórios.",
      },
      {
        title: "Aprendizagem e ensino",
        description: "Pratique clientes HTTP, paginação e JSON com dados demográficos reais — gratuito e documentado.",
      },
    ],
  },
  dataCoverage: {
    title: "Cobertura de dados",
    description:
      "Consulte indicadores nacionais ao longo de uma década, explore população provincial de 2023 e filtre por ano, província ou campo — tudo numa única API.",
    columns: {
      resource: "Recurso",
      years: "Anos",
      scope: "Âmbito",
      notes: "Notas",
    },
    rows: [
      {
        resource: "GET /v1/country",
        years: "2017 – 2026",
        scope: "Nacional",
        notes: "Capital, área, chefe de Estado, língua",
      },
      {
        resource: "GET /v1/indicators",
        years: "2017 – 2026",
        scope: "Nacional",
        notes: "Natalidade, mortalidade, esperança de vida, urbanização",
      },
      {
        resource: "GET /v1/population",
        years: "2023",
        scope: "Provincial",
        notes: "Densidade, estrutura por mil, quota de género",
      },
      {
        resource: "GET /v1/provinces/info",
        years: "2023",
        scope: "Provincial",
        notes: "Área, densidade, estado dos dados",
      },
      {
        resource: "GET /v1/provinces",
        years: "—",
        scope: "Referência",
        notes: "Lista das 11 províncias",
      },
    ],
  },
  faq: {
    title: "FAQ",
    description: "Perguntas frequentes sobre a API, chaves e dados.",
    items: [
      {
        q: "A API é gratuita?",
        a: "Sim. Moz Demog API é gratuita. Crie uma conta, receba a chave por email e comece a fazer pedidos.",
      },
      {
        q: "De onde vêm os dados?",
        a: "Todos os dados demográficos provêm do Instituto Nacional de Estatística (INE). Nós estruturamos e mantemos os dados — isto não é um produto oficial do INE.",
      },
      {
        q: "Porque preciso de uma chave API?",
        a: "As chaves ajudam a prevenir abuso e permitem limites de taxa justos. Cada chave está associada à sua conta e é enviada por email.",
      },
      {
        q: "Porque os dados provinciais só existem para 2023?",
        a: "O detalhe provincial na nossa base de dados cobre atualmente 2023. Indicadores nacionais abrangem 2017–2026 incluindo projeções.",
      },
      {
        q: "Posso usar comercialmente?",
        a: "Sim, por agora a API é gratuita para uso pessoal e comercial. Consulte os Termos de Utilização para detalhes e atribuição.",
      },
      {
        q: "Quais são os limites de taxa?",
        a: "100 pedidos por minuto nos endpoints de dados. Rotas /auth limitadas a 5 pedidos por minuto.",
      },
      {
        q: "Perdi a minha chave API. O que faço?",
        a: "Abra o separador Nova chave, introduza o email e a palavra-passe da conta, e enviamos uma nova chave por email.",
      },
      {
        q: "Como reporto dados errados ou bugs?",
        a: "Use o formulário de contacto no final da página inicial. Inclua o endpoint, parâmetros e o que esperava vs o que recebeu.",
      },
    ],
  },
  contact: {
    title: "Contacto e suporte",
    description:
      "Dúvidas, dados incorretos ou feedback — envie-nos uma mensagem e responderemos.",
    fields: {
      name: "Nome",
      email: "O seu email",
      topic: "Assunto",
      message: "Mensagem",
    },
    placeholders: {
      name: "Opcional",
      email: "voce@exemplo.com",
      message: "Descreva a sua questão ou problema...",
    },
    submit: "Enviar mensagem",
    submitting: "A enviar...",
    success: "Mensagem enviada. Responderemos para o email que indicou.",
    privacyNote: "O seu email é usado apenas para responder a esta mensagem.",
    errors: {
      required: "Por favor preencha o email e a mensagem.",
      sendFailed: "Não foi possível enviar a mensagem. Tente novamente.",
      network: "Erro de rede. Verifique a ligação e tente novamente.",
    },
    topics: ["Reportar bugs", "Correções de dados", "Questões sobre a API", "Feedback geral"],
  },
  notFound: {
    title: "Página não encontrada",
    description: "A página que procura não existe ou foi movida.",
    home: "Voltar ao início",
    docs: "Ver documentação",
  },
  legal: {
    termsTitle: "Termos de Utilização",
    privacyTitle: "Política de Privacidade",
    lastUpdated: "Última atualização: Agosto de 2026",
    termsSections: [
      {
        title: "1. Descrição do serviço",
        body: "Moz Demog API fornece acesso só de leitura a dados demográficos estruturados sobre Moçambique via HTTP. O serviço é gratuito a critério do operador.",
      },
      {
        title: "2. Uso aceitável",
        body: "Pode usar a API em projetos pessoais, educacionais e comerciais. Não deve contornar limites de taxa, abusar do serviço, partilhar chaves publicamente ou usá-la para fins ilegais.",
      },
      {
        title: "3. Chaves API e contas",
        body: "É responsável por manter a chave API confidencial. Não publique chaves em repositórios públicos ou código client-side. Podemos revogar chaves expostas ou abusadas.",
      },
      {
        title: "4. Precisão e atribuição",
        body: "Os dados provêm de estatísticas públicas do INE. Esforçamo-nos pela precisão mas não garantimos completude ou atualidade. Ao publicar trabalho baseado nestes dados, atribua o INE como fonte original. Moz Demog API é independente e não é afiliada ao INE.",
      },
      {
        title: "5. Disponibilidade",
        body: "O serviço é fornecido \"tal como está\" sem garantias de SLA. Podemos alterar endpoints, limites ou disponibilidade a qualquer momento.",
      },
      {
        title: "6. Limitação de responsabilidade",
        body: "O operador não é responsável por decisões tomadas com base nos dados, interrupções do serviço ou danos indiretos.",
      },
      {
        title: "7. Alterações",
        body: "Estes termos podem ser atualizados. O uso continuado após alterações constitui aceitação dos termos revistos.",
      },
    ],
    privacySections: [
      {
        title: "1. O que recolhemos",
        body: "No registo, recolhemos nome de utilizador, email e palavra-passe encriptada. Guardamos metadados de chaves API. Podemos registar metadados de pedidos para prevenir abuso.",
      },
      {
        title: "2. Como usamos os dados",
        body: "O email serve para entregar chaves API, links de recuperação de palavra-passe e mensagens essenciais. Não vendemos dados pessoais a terceiros.",
      },
      {
        title: "3. Comunicações por email",
        body: "Emails transacionais incluem confirmação de conta, entrega de chaves e instruções de recuperação de palavra-passe.",
      },
      {
        title: "4. Retenção de dados",
        body: "Dados de conta são mantidos enquanto a conta estiver activa. Pode solicitar eliminação através do formulário de contacto no site.",
      },
      {
        title: "5. Cookies e armazenamento local",
        body: "A landing page usa local storage para lembrar a preferência de idioma. Não usamos cookies de publicidade.",
      },
      {
        title: "6. Terceiros",
        body: "A API pode estar alojada em infraestrutura de terceiros (ex. Vercel, Neon). O email transacional usa um fornecedor externo.",
      },
      {
        title: "7. Contacto",
        body: "Para questões de privacidade, use o formulário de contacto no site.",
      },
    ],
  },
};
