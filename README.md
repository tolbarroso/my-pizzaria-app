# My Pizzaria App

Este projeto é uma aplicação de CRUD (Create, Read, Update, Delete) para gerenciar clientes, pedidos e produtos de uma pizzaria. A aplicação foi desenvolvida utilizando React e Firebase, com integração de APIs para busca de CEP e listagem de estados e municípios.

## Funcionalidades

- Cadastro de Clientes
- Cadastro de Pedidos
- Cadastro de Produtos
- Preenchimento automático de endereço com base no CEP
- Listagem de estados e municípios utilizando a API do IBGE
- Login Simulado

## Tecnologias Utilizadas

- React
- Firebase Firestore
- React Hook Form
- Yup para validação de formulários
- React Router para navegação
- API ViaCEP para busca de endereço por CEP
- API do IBGE para listagem de estados e municípios

## Estrutura do Projeto

my-pizzaria-app/
│
├── public/
│ ├── index.html
│ └── ...
│
├── src/
│ ├── components/
│ │ ├── AddressForm.js
│ │ ├── Login.js
│ │ ├── Navbar.js
│ │ ├── OrderForm.js
│ │ ├── ProductForm.js
│ │ ├── SelectMunicipality.js
│ │ ├── SelectState.js
│ │ └── ...
│ │
│ ├── pages/
│ │ ├── AddressPage.js
│ │ ├── OrderPage.js
│ │ ├── ProductPage.js
│ │ └── ...
│ │
│ ├── services/
│ │ ├── firebase.js
│ │ ├── ibge.js
│ │ └── viacep.js
│ │
│ ├── App.js
│ ├── index.js
│ └── ...
│
├── .gitignore
├── package.json
├── README.md
└── ...

## Instalação e Execução

1. Clone o repositório:

   ```sh
   git clone https://github.com/tolbarroso/my-pizzaria-app.git
   cd my-pizzaria-app

2. Instale as dependências:

npm install

3. Configure as variáveis de ambiente no arquivo src/services/firebase.js com suas credenciais do Firebase.

4. Execute a aplicação:

npm start

5. Abra http://localhost:3000 para visualizar no navegador.

## Deploy
O projeto pode ser facilmente implantado na Vercel. Siga os passos abaixo:

1. Faça login na Vercel e crie um novo projeto.
2. Conecte o repositório do GitHub.
3. Configure as variáveis de ambiente, se necessário.
4. Clique em "Deploy" e aguarde a publicação do projeto.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença
Este projeto está licenciado sob a licença MIT.

Com isso, o projeto está completo e pronto para ser executado localmente ou implantado na Vercel. Certifique-se de substituir as credenciais do Firebase por suas próprias credenciais no arquivo `src/services/firebase.js`.