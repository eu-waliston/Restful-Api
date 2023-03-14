# Restful Api With Node.js Express &amp; MongoDB

## Tecnologias Utilizadas

- Node JS 
- MongoDB
- Insomnia

## Dependências

- Express 
- Mongoose 
- Body-Parser 
- Nodemon (não é pré-requisito, mas facilita o uso)

## Guia
1 - É necessário clonar o repositório com o comando git clone
<br />
2 - Entrar no diretório do projeto com cd 
<br />
3 - Instalar todas as dependências utilizando npm install
<br />
4 - Recomendo instalar o nodemon, utilizando npm install nodemon
<br />
5 - Após isso rodar a aplicação utilizando nodemon src/index.js
<br />

## Arquitetura REST

Listagem de posts - GET: http://localhost:3000/posts/

. Em caso de sucesso retorna todos os posts já cadastrados no banco de dados, cada post no formato JSON, contendo titulo, descrição e data.

Adicionar post - POST: http://localhost:3000/posts/

. Adiciona um post ao banco de dados, sendo necessário inserir o titulo, descrição e data(opcional). O Id é gerado automaticamente 

Buscar post por Id - GET: http://localhost:3000/posts/{inserir-id-aqui}

. Utiliza o Id gerado automaticamente quando o post é adicionado ao banco de dados. Retorna o arquivo no formato JSON com sucesso caso exista. Para essa busca é necessário inserir o Id


Deletar um post por Id - DELETE: http://localhost:3000/posts/{inserir-id-aqui}

. Remove o post utilizando o Id que foi gerado automaticamente, utilizando o método DELETE.

## Testes

Foram  realizados no ambiente automatizado do Insomnia, onde foi criado uma collection com 5 testes, comprovando o sucesso de cada funcionalidade. Os testes que foram feitos nesse caso podem ser vistos na figura abaixo, logo na aba a esquerda. O Insomnia é uma ferramenta extremamente útil para se testar manualmente ou automatizar os testes de qualquer API REST

![Screenshot_2023-03-13_22-50-37](https://user-images.githubusercontent.com/82295321/224873011-8a77745d-2423-4ccf-88c7-ce9883199bd5.png)


