# Note-api
```
What's this all about?
Sample rest api project with a MongoDB connection to use in forntend study
```
# What technoloies are used?
|       **Question**       |     **Answer**      |
| :----------------------: | :-----------------: |
|        Language ?        |     javascript      |
|         Server ?         |       express       |
|        Database ?        |      Mongo DB       |
|        Api doc ?         |       Swagger       |
| What's the swagger file? | swagger-output.json |
# What I need to use? 
- with the node js intalled in your computer, execute the comand 'npm install'
- Create an user in the website https://cloud.mongodb.com and copy cluster's url generate to the project
- Create a file named enviroment.js in the root directory of the project  with the following structure
```
export const PASS = "password"
export const USER = "username"
export const URL = `mongodb cluster's generated url`
module.exports = { URL }
```

- if you need generate a new swagger api version, execute de comand 'npm run swagger-autogen' to generate the swagger file
- whenever there are changes in queryString or path params, the swagger the swagger will be generated with the changes
- when need change a route with payload, also need change the controller, putting the payload respecting the fields expecteds by the request
 
```
/* 
 #swagger.parameters['note_scheme'] = {
    in: 'body',
    description: 'default note schema',
    schema: {
        title: '',
        description: '', 
        createdAt: ''
    }
} 
*/
```

```
Do que se trata?
Projeto simples de api rest com conexão MongoDB para uso em projeto forntend de estudp
```
# Quais tecnologias são utilizadas?  
|                **Questão**                 |    **Resposta**     |
| :----------------------------------------: | :-----------------: |
|                linguagem ?                 |     javascript      |
|                 servidor ?                 |       express       |
|              Banco de dados ?              |      Mongo DB       |
|           documentação de api ?            |       Swagger       |
| Qual é o arquivo de documentação swagger ? | swagger-output.json |

# O eu que preciso para utilizar?  
- Com o node js instalado em seu computador, execute o comando 'npm install'
- Crie um usário no site https://cloud.mongodb.com e copiar a url do cluster gerado para o projeto
- Crie um arquivo chamado enviroment.js no diretório raiz do projeto com a seguinte extrutura:

```
export const PASS = "valor do seu password"
export const USER = "nome de usuário"
export const URL = `url gerada do seu cluster do mongodb`
module.exports = { URL }
```

- Caso preicse gerar uma nova versão da api ou do swagger, execute o comando : 'npm run swagger-autogen' para gerar o arquivo swagger
- Sempre que houver alteração dos parâmetros do tipo path e arquivpos queryString, o swagger irá ser gerado já com as atualizações
- Quando for alterar uma rota com payload, deve-se também, alterar o controller colocando o payload respeitando os campos do esperados pela requisição comentário como no exemplo abaixo:
 
```
/* 
 #swagger.parameters['note_scheme'] = {
    in: 'body',
    description: 'default note schema',
    schema: {
        title: '',
        description: '', 
        createdAt: ''
    }
} 
*/
```