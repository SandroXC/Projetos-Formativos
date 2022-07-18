# Hamburgueria Blue

Projeto Desenvolvido em conjunto com a turma C013 da Blue EdTech.
Desenvolvemos ele com o intuito de aprender os conceitos para trabalhar com Nest.js + Prisma.
<br/>
Trabalhamos também com conceitos de autenticação, filtragem de buscas, documentação de projetos e bancos de dados relacionais.

## Pré-requisitos

- **Node** com versão superior ou igual que 16.15.0 - [Node Download](https://nodejs.org/pt-br/download/)
- **NPM** com versão superior ou igual que 8.5.5 - [Npm Download](https://www.npmjs.com/package/download)
- **Nest.js** com versão superior ou igual que 8.5.5 - [Nest Download](https://docs.nestjs.com/)
- **PostgreSQL** com versão superior ou igual que 8.2.6 - [PostgreSQL Download](https://www.postgresql.org/download/)

## Instalação

Clone esse projeto em seu computador com o comando (Chave SSH necessária):

```bash
#!/bin/bash
$ git clone git@github.com:IvanBorba/blue-hamburgueria.git
```

Acesse a pasta do projeto:

```bash
#!/bin/bash
$ cd blue-hamburgueria
```

Instale as dependências com o seguinte comando:

```bash
#!/bin/bash
$ npm install
```

## Execução

Após ter instalado as dependências, use o seguinte comando para rodar o projeto em um servidor local:

```bash
#!/bin/bash
$ npm run start:dev
```

Para conseguir trabalhar com o banco de dados você deverá criar um arquivo .env e adicionar uma url de conexão com seu Postgres local com a chave DATABASE_URL.

```md
DATABASE_URL="postgresql://postgres:101112@localhost:5432/hamburgueria"
```

## Funcionalidades

Para acessar a lista de endpoints e funcionalidades da aplicação, acesse nossa documentação do [Swagger](https://blue-hamburgueria-production.up.railway.app/docs/), lá você poderá testar todas as rotas.

Você também pode analisar nosso <a href="./db.pdf" download>Diagrama de Relacionamento de Entidades</a>

## Autores

- Ivan Gabriel de Borba
- Turma C013 - Blue EdTech

## Contribuição

Sinta-se a vontade para entrar em contato comigo caso tenha qualquer sugestão de melhoria no projeto

<div>
<a href="https://www.linkedin.com/in/ivan-borba/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
<a href="https://instagram.com/ivanborba_" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
<a href = "mailto:mrborbaivan@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>

## Licença

- MIT License (MIT)

## Agradecimentos

Gostaria de agradecer a todos os alunos que me acompanharam no desenvolvimento desse projeto, espero que vocês tenham aprendido tanto quanto eu.
Contem comigo sempre :D
