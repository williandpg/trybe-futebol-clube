<h1><strong>Trybe Futebol Clube (TFC)</strong></h1>

<h2><strong>Descrição</strong></h2>
<p align="justify">
  O Trybe Futebol Clube é uma aplicação que exibe partidas e classificações de futebol.
  A API foi desenvolvida com TDD e integrada ao front end fornecido, com execução via Docker e docker-compose, consumindo um banco MySQL através do Sequelize. O foco principal foi a construção e validação do back end, garantindo a funcionalidade e integração adequada com o front end.
</p>

<h2><strong>Funcionalidades</strong></h2>
<ul>
  <li align="justify"><strong>Autenticação</strong> com <strong>JWT</strong> para rotas protegidas (login e permissões).</li>
  <li align="justify"><strong>Times</strong>: listagem de todos os times e consulta por ID.</li>
  <li align="justify"><strong>Partidas</strong>: listagem, criação (com validações), e atualização de status/placar conforme regras de negócio.</li>
  <li align="justify"><strong>Leaderboards</strong>: geração de classificações considerando desempenho <strong>em casa</strong>, <strong>fora</strong> e <strong>geral</strong>.</li>
  <li align="justify"><strong>Validação de dados</strong> com regras consistentes (ex.: payload, credenciais, permissões, estados da partida).</li>
  <li align="justify"><strong>Testes de integração</strong> seguindo abordagem <strong>TDD</strong> para garantir comportamento esperado da API.</li>
</ul>

<h2><strong>Demonstração do Projeto</strong></h2>
<p align="center">
  <img
    src="./app/frontend/src/images/front-example.png" alt="Demonstração do projeto TFC" width="80%">
  <br>
  <a href="https://github.com/williandpg/trybe-futebol-clube" target="_blank"><strong>Ver repositório no GitHub</strong></a>
</p>

<h2><strong>Tecnologias Utilizadas</strong></h2>
<ul>
  <li align="justify">
    <a href="https://www.typescriptlang.org/" target="_blank"><strong>TypeScript</strong></a>:
    tipagem estática e melhor organização do código no back end.
  </li>
  <li align="justify">
    <a href="https://nodejs.org/" target="_blank"><strong>Node.js</strong></a> e
    <a href="https://expressjs.com/" target="_blank"><strong>Express</strong></a>:
    base da API e roteamento HTTP.
  </li>
  <li align="justify">
    <a href="https://sequelize.org/" target="_blank"><strong>Sequelize</strong></a> e
    <a href="https://www.mysql.com/" target="_blank"><strong>MySQL</strong></a>:
    modelagem e persistência de dados.
  </li>
  <li align="justify">
    <a href="https://www.docker.com/" target="_blank"><strong>Docker</strong></a> e
    <a href="https://docs.docker.com/compose/" target="_blank"><strong>docker-compose</strong></a>:
    orquestração de front end, back end e banco de dados.
  </li>
  <li align="justify">
    <a href="https://jwt.io/" target="_blank"><strong>JWT</strong></a>:
    autenticação e proteção de rotas.
  </li>
  <li align="justify">
    <a href="https://joi.dev/" target="_blank"><strong>Joi</strong></a>:
    validação de payloads e regras de entrada.
  </li>
  <li align="justify">
    <a href="https://mochajs.org/" target="_blank"><strong>Mocha</strong></a>,
    <a href="https://www.chaijs.com/" target="_blank"><strong>Chai</strong></a> e
    <a href="https://sinonjs.org/" target="_blank"><strong>Sinon</strong></a>:
    testes de integração e stubs/mocks.
  </li>
</ul>

<h2><strong>Estrutura do Projeto</strong></h2>
<p align="justify">A estrutura do projeto é organizada da seguinte forma:</p>
<pre><code>
/
├── app/                      # Pasta principal do aplicativo, contendo o código do front end e back end
│   ├── backend/              # Código do back end (API, modelos, testes)
│   ├── frontend/             # Código do front end (interface, componentes)
│   └── docker-compose.yml
├── FAQ.md
├── package.json
├── package-lock.json
├── db.example.sql
└── README.md
</code></pre>

<h2><strong>Contato</strong></h2>
<p>
  <strong>Willian Gonçalves</strong> |
  <a href="https://www.linkedin.com/in/williandpg/" target="_blank"><strong>LinkedIn</strong></a> |
  <a href="https://github.com/williandpg" target="_blank"><strong>Github</strong></a> |
  <a href="https://williandpg.github.io/" target="_blank"><strong>Portfólio</strong></a> |
  <a href="mailto:goncalves.wdp@outlook.com" target="_blank"><strong>Email</strong></a>
</p>

<h2><strong>Créditos</strong></h2>
<p align="justify">
  Projeto desenvolvido como parte do curso de Desenvolvimento Full Stack da Trybe.
  O front end foi fornecido como base, e o objetivo principal foi construir e validar a API, o banco de dados e a integração via containers.
</p>

<details>
  <summary><strong>English Version</strong></summary>

  <h1><strong>Trybe Futebol Clube (TFC)</strong></h1>

  <h2><strong>Description</strong></h2>
  <p align="justify">
    Trybe Futebol Clube is a application that displays football matches and leaderboards.
    The API was built using TDD and integrated with a provided front end, with running with Docker and docker-compose, and using a MySQL database through Sequelize.
  </p>

  <h2><strong>Features</strong></h2>
  <ul>
    <li align="justify"><strong>JWT authentication</strong> for protected routes (login and authorization).</li>
    <li align="justify"><strong>Teams</strong>: list all teams and fetch by ID.</li>
    <li align="justify"><strong>Matches</strong>: list, create (with validations), and update status/score based on business rules.</li>
    <li align="justify"><strong>Leaderboards</strong>: generate rankings for <strong>home</strong>, <strong>away</strong>, and <strong>overall</strong> performance.</li>
    <li align="justify"><strong>Input validation</strong> to enforce consistent rules (payload, credentials, permissions, match state).</li>
    <li align="justify"><strong>Integration tests</strong> following a <strong>TDD</strong> approach.</li>
  </ul>

  <h2><strong>Project Demo</strong></h2>
  <p align="center">
    <img src="./app/frontend/src/images/front-example.png" alt="Project demo screenshot" width="80%">
    <br>
    <a href="https://github.com/williandpg/trybe-futebol-clube" target="_blank"><strong>Open repository on GitHub</strong></a>
  </p>

  <h2><strong>Technologies Used</strong></h2>
  <ul>
    <li align="justify"><a href="https://www.typescriptlang.org/" target="_blank"><strong>TypeScript</strong></a>: typed back end.</li>
    <li align="justify"><a href="https://nodejs.org/" target="_blank"><strong>Node.js</strong></a> and <a href="https://expressjs.com/" target="_blank"><strong>Express</strong></a>: API foundation.</li>
    <li align="justify"><a href="https://sequelize.org/" target="_blank"><strong>Sequelize</strong></a> and <a href="https://www.mysql.com/" target="_blank"><strong>MySQL</strong></a>: data modeling and persistence.</li>
    <li align="justify"><a href="https://www.docker.com/" target="_blank"><strong>Docker</strong></a> and <a href="https://docs.docker.com/compose/" target="_blank"><strong>docker-compose</strong></a>: service orchestration.</li>
    <li align="justify"><a href="https://jwt.io/" target="_blank"><strong>JWT</strong></a>: authentication.</li>
    <li align="justify"><a href="https://joi.dev/" target="_blank"><strong>Joi</strong></a>: request validation.</li>
    <li align="justify"><a href="https://mochajs.org/" target="_blank"><strong>Mocha</strong></a>, <a href="https://www.chaijs.com/" target="_blank"><strong>Chai</strong></a> and <a href="https://sinonjs.org/" target="_blank"><strong>Sinon</strong></a>: integration testing and mocks.</li>
  </ul>

  <h2><strong>Project Structure</strong></h2>
  <pre><code>
  /
  ├── app/                      # Main application folder, containing both front end and back end code
  │   ├── backend/              # Back end code (API, models, tests)
  │   ├── frontend/             # Front end code (interface, components)
  │   └── docker-compose.yml
  ├── FAQ.md
  ├── package.json
  ├── package-lock.json
  ├── db.example.sql
  └── README.md
  </code></pre>

  <h2><strong>Contact</strong></h2>
  <p>
    <strong>Willian Gonçalves</strong> |
    <a href="https://www.linkedin.com/in/williandpg/" target="_blank"><strong>LinkedIn</strong></a> |
    <a href="https://github.com/williandpg" target="_blank"><strong>Github</strong></a> |
    <a href="https://williandpg.github.io/" target="_blank"><strong>Portfolio</strong></a> |
    <a href="mailto:goncalves.wdp@outlook.com" target="_blank"><strong>Email</strong></a>
  </p>

  <h2><strong>Credits</strong></h2>
  <p align="justify">
    Developed as part of the Trybe Full Stack Development course.
    The front end was provided, and the main goal was building and validating the API, database, and container integration.
  </p>
</details>