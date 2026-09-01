const portfolioProjects = [
  
  // 01 — PRINCIPAL FULL STACK
  {
  id: "serviceflow",

  name: "ServiceFlow",

  category: "Desenvolvimento",

  type: "SaaS B2B • Full Stack",

  status: "MVP CONCLUÍDO",

  statusKey: "concluido",

  statusClass: "status-concluido",

  problem:
    "Centralizar clientes, técnicos e ordens de serviço de pequenas empresas prestadoras de serviços em uma plataforma SaaS multi-tenant.",

  stack: [
    "FastAPI",
    "React",
    "TypeScript",
    "PostgreSQL",
    "SQLAlchemy",
    "Docker"
  ],

  slug: "serviceflow.html",

  featured: true
},

 // 02 — IA E AUTOMAÇÃO
  {
  id: "agente-ia-instagram",

  name: "Agente de IA para Instagram",

  category: "Automação",

  type: "IA • Automação • API",

  status: "CONCLUÍDO",

  statusKey: "concluido",

  statusClass: "status-concluido",

  problem:
    "Automatizar o atendimento e a qualificação de leads do Instagram com respostas contextuais, memória por usuário e integração entre automação e inteligência artificial.",

  stack: [
    "Python",
    "Flask",
    "Google Gemini",
    "Make.com",
    "Docker",
    "Pytest"
  ],

  slug: "agente-ia-instagram.html",

  featured: true
  },

// 03 — SISTEMA OPERACIONAL / FINANCEIRO
  {
    id: "pilates",
    name: "Gestão para Estúdio de Pilates",
    category: "Sistemas",
    type: "Sistema de Gestão • B2B",
    status: "EM DESENVOLVIMENTO",
    statusKey: "desenvolvimento",
    statusClass: "status-desenvolvimento",

    problem:
      "Organizar pagamentos, parcelamentos, repasses, unidades e controles financeiros de uma operação com múltiplas unidades.",

    stack: [
      "Apps Script",
      "Google Sheets",
      "HTML",
      "JavaScript"
    ],

    slug: "pilates.html",

    featured: true
  },

// 04 — AUTOMAÇÃO GOOGLE WORKSPACE
  {
    id: "gestao-estudos",
    name: "Sistema de Gestão de Estudos",
    category: "Automação",
    type: "Google Workspace • Automação",
    status: "EM DESENVOLVIMENTO",
    statusKey: "desenvolvimento",
    statusClass: "status-desenvolvimento",

    problem:
      "Centralizar planejamento, registros de estudo, revisões e indicadores em um fluxo integrado.",

    stack: [
      "Apps Script",
      "Google Sheets",
      "HTML",
      "JavaScript"
    ],

    slug: "gestao-estudos.html",

    featured: false
  },


// 05 — EM DESENVOLVIMENTO
  {
    id: "whatsapp-scheduler",
    name: "WhatsApp Scheduler Pro",
    category: "Desenvolvimento",
    type: "Python • Aplicação Desktop",
    status: "EM DESENVOLVIMENTO",
    statusKey: "desenvolvimento",
    statusClass: "status-desenvolvimento",

    problem:
      "Organizar contatos, agendamentos e o processamento de mensagens em uma única aplicação.",

    stack: [
      "Python",
      "SQLite",
      "CustomTkinter",
      "MVC"
    ],

    //slug: "whatsapp-scheduler.html",
      slug: null,

    featured: false
  },

// 06 Manutenção

  {
    id: "manutencao",
    name: "Análise e Gestão de Manutenção",
    category: "Dados",
    type: "Manutenção • Dados • BI",
    status: "ROADMAP",
    statusKey: "roadmap",
    statusClass: "status-roadmap",

    problem:
      "Transformar dados de manutenção, falhas, equipamentos e ordens de serviço em indicadores para acompanhamento operacional.",

    stack: [
      "Python",
      "SQL",
      "Power BI",
      "DAX"
    ],

    slug: null,

    featured: false
  },

  {
    id: "integration-hub",
    name: "Integration Hub",
    category: "Integrações",
    type: "APIs • Backend • Integrações",
    status: "ROADMAP",
    statusKey: "roadmap",
    statusClass: "status-roadmap",

    problem:
      "Criar uma camada confiável para receber, validar, processar e sincronizar informações entre sistemas diferentes.",

    stack: [
      "Python",
      "REST API",
      "JSON",
      "SQL"
    ],

    slug: null,

    featured: false
  },


];