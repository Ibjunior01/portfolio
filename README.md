# Portfólio Profissional

Portfólio pessoal desenvolvido para apresentar projetos de **Desenvolvimento Full Stack, APIs, Automação, Inteligência Artificial e Dados**, com foco em soluções aplicadas a problemas reais de negócio.

O projeto foi construído com HTML, CSS e JavaScript puro, priorizando simplicidade, performance, acessibilidade, responsividade e facilidade de manutenção.

---

## Objetivo

Mais do que apresentar tecnologias, o portfólio busca documentar:

- problemas que deram origem aos projetos;
- soluções desenvolvidas;
- decisões de arquitetura;
- tecnologias utilizadas;
- aspectos de segurança;
- testes e qualidade de código;
- limitações técnicas;
- evolução e próximos passos.

A proposta é mostrar não apenas o resultado visual de uma aplicação, mas também o processo de engenharia utilizado para construí-la.

---

## Projetos em destaque

### ServiceFlow

Sistema Full Stack para gestão de serviços e ordens de atendimento.

**Principais tecnologias:**

- React;
- TypeScript;
- FastAPI;
- PostgreSQL;
- autenticação JWT;
- RBAC;
- testes automatizados;
- GitHub Actions;
- Vercel;
- Render;
- Neon.

O projeto inclui gestão de usuários, empresas, ordens de serviço, prioridades, status, histórico operacional e recursos administrativos.

**Status:** Concluído

[Ver case no portfólio](projetos/serviceflow.html)  
[Ver código no GitHub](https://github.com/Ibjunior01/serviceflow)  
[Visualizar aplicação](https://serviceflow-liard.vercel.app)

---

### Agente de IA para Instagram

API desenvolvida para integrar um fluxo automatizado de atendimento e qualificação de leads com inteligência artificial generativa.

**Principais tecnologias:**

- Python;
- Flask;
- Google Gemini;
- Make.com;
- REST API;
- Pytest;
- Ruff;
- Docker;
- Gunicorn;
- GitHub Actions.

O projeto possui memória conversacional isolada por usuário, validação de requisições, autenticação por API Key, rate limiting, tratamento de falhas externas e testes automatizados.

**Status:** Concluído

[Ver case no portfólio](projetos/agente-ia-instagram.html)  
[Ver código no GitHub](https://github.com/Ibjunior01/Agente_IA_Instagram)

---

### Gestão para Estúdio de Pilates

Sistema desenvolvido para apoiar processos financeiros e operacionais de um estúdio de Pilates, incluindo pagamentos, parcelas, repasses de profissionais, despesas e indicadores.

**Status:** Em desenvolvimento

[Ver case no portfólio](projetos/pilates.html)

---

## Outros projetos

O portfólio também apresenta projetos em desenvolvimento e iniciativas planejadas envolvendo:

- automação com Google Apps Script;
- organização e gestão de estudos;
- integrações entre plataformas;
- análise e gestão de manutenção;
- automações de comunicação;
- dados e indicadores.

Os projetos são identificados de acordo com seu estágio real:

- **Concluído** — implementação principal finalizada;
- **Em desenvolvimento** — projeto funcional ou em construção;
- **Roadmap** — iniciativa planejada, ainda sem case completo.

Nenhum projeto é apresentado como concluído antes de atingir esse estágio.

---

## Tecnologias representadas no portfólio

### Desenvolvimento

- Python
- JavaScript
- TypeScript
- React
- Node.js
- FastAPI
- Flask
- Express
- HTML5
- CSS3

### Bancos de dados e dados

- PostgreSQL
- MySQL
- SQLite
- SQL
- Pandas
- Power BI
- Power Query
- DAX

### Automação e Inteligência Artificial

- Google Apps Script
- Selenium
- Make.com
- n8n
- Google Gemini
- APIs REST
- Webhooks
- Prompt Engineering

### Engenharia e DevOps

- Git
- GitHub
- Docker
- Pytest
- GitHub Actions
- CI/CD
- MVC
- Repository Pattern
- Service Layer

---

## Tecnologias do próprio portfólio

O site foi desenvolvido sem framework frontend ou processo de build.

```text
HTML5
CSS3
JavaScript
```

Essa escolha foi intencional.

Para o escopo de um portfólio estático, adicionar React ou outro framework apenas aumentaria a complexidade sem trazer benefício proporcional.

O JavaScript é utilizado para:

- renderização dos projetos;
- filtros por status;
- navegação;
- header compartilhado;
- alternância entre tema claro e escuro;
- persistência da preferência de tema.

---

## Estrutura do projeto

```text
portfolio/
│
├── index.html
├── README.md
│
├── assets/
│   │
│   ├── css/
│   │   ├── variables.css
│   │   ├── reset.css
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── layout.css
│   │   ├── responsive.css
│   │   ├── projects-page.css
│   │   ├── case-study.css
│   │   ├── solutions-page.css
│   │   └── about-page.css
│   │
│   ├── js/
│   │   ├── header.js
│   │   ├── main.js
│   │   ├── navigation.js
│   │   ├── project-data.js
│   │   ├── projects.js
│   │   └── projects-page.js
│   │
│   └── images/
│       └── projects/
│
├── projetos/
│   ├── index.html
│   ├── serviceflow.html
│   ├── agente-ia-instagram.html
│   ├── pilates.html
│   └── gestao-estudos.html
│
├── solucoes/
│   └── index.html
│
└── sobre/
    └── index.html
```

---

## Arquitetura do catálogo de projetos

Os dados utilizados pelos cards estão centralizados em:

```text
assets/js/project-data.js
```

Cada projeto possui informações como:

```javascript
{
  id: "nome-do-projeto",
  name: "Nome do Projeto",
  category: "Categoria",
  type: "Tipo",
  status: "CONCLUÍDO",
  statusKey: "concluido",
  statusClass: "status-concluido",
  problem: "Problema que o projeto resolve.",
  stack: [
    "Tecnologia 1",
    "Tecnologia 2"
  ],
  slug: "nome-do-projeto.html",
  featured: true
}
```

Essa abordagem evita duplicação dos dados entre a Home e a página de projetos.

---

## Como adicionar um novo projeto

A estrutura foi preparada para que novos projetos possam ser adicionados sem modificar a arquitetura principal do site.

### 1. Cadastrar o projeto

Editar:

```text
assets/js/project-data.js
```

Adicionar um novo objeto ao array de projetos.

### 2. Definir o estágio

Utilizar um dos estados existentes:

```javascript
statusKey: "concluido"
```

```javascript
statusKey: "desenvolvimento"
```

ou:

```javascript
statusKey: "roadmap"
```

### 3. Criar o case

Quando houver conteúdo suficiente para apresentação, criar:

```text
projetos/nome-do-projeto.html
```

e informar o arquivo no campo:

```javascript
slug: "nome-do-projeto.html"
```

Projetos sem case devem utilizar:

```javascript
slug: null
```

### 4. Definir destaque na Home

Para exibir o projeto entre os principais:

```javascript
featured: true
```

Caso contrário:

```javascript
featured: false
```

### 5. Adicionar imagens

Quando necessário:

```text
assets/images/projects/nome-do-projeto/
```

---

## Princípios do projeto

O desenvolvimento do portfólio segue alguns princípios:

1. apresentar apenas funcionalidades e tecnologias realmente implementadas;
2. diferenciar claramente projetos concluídos, em desenvolvimento e planejados;
3. explicar problemas e decisões, não apenas listar stacks;
4. manter arquitetura proporcional ao tamanho da aplicação;
5. evitar dependências sem justificativa técnica;
6. priorizar legibilidade, acessibilidade e responsividade;
7. permitir evolução incremental sem necessidade de reconstruir o site.

---

## Interface e experiência

O portfólio possui:

- layout responsivo;
- tema claro e escuro;
- persistência da preferência de tema;
- navegação compartilhada;
- HTML semântico;
- navegação por teclado;
- skip link;
- atributos ARIA em componentes relevantes;
- suporte a `prefers-reduced-motion`;
- filtros de projetos por estágio;
- páginas individuais de cases.

---

## Executando localmente

Não há instalação de dependências.

Clone o repositório:

```bash
git clone https://github.com/Ibjunior01/portfolio.git
```

Entre na pasta:

```bash
cd portfolio
```

O projeto pode ser executado utilizando uma extensão como **Live Server** no VS Code.

Também é possível utilizar um servidor HTTP local, por exemplo:

```bash
python -m http.server 5500
```

Depois acesse:

```text
http://localhost:5500
```

---

## Publicação

A publicação do portfólio está na etapa final de configuração.

Após o deploy definitivo serão configurados e validados:

- URL canônica;
- Open Graph;
- metadados para compartilhamento;
- `robots.txt`;
- `sitemap.xml`;
- auditoria Lighthouse.

A URL pública será adicionada a este README após o deploy.

---

## Próximas evoluções

A arquitetura principal do portfólio está concluída.

As próximas evoluções concentram-se principalmente em:

- inclusão de novos projetos;
- atualização dos cases existentes;
- inclusão de vídeos de demonstração;
- imagens e screenshots;
- evolução do conteúdo conforme novos projetos forem concluídos.

---

## Contato

**GitHub:** [github.com/Ibjunior01](https://github.com/Ibjunior01)

**LinkedIn:** [linkedin.com/in/ibermonjunior](https://linkedin.com/in/ibermonjunior)

---

## Autor

Desenvolvido por **Ibermon Junior**.

Desenvolvimento Full Stack • APIs • Automação • Inteligência Artificial • Dados