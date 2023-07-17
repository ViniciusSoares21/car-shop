# Car Shop

## Descrição 
Neste projeto, apliquei os princípios de Programação Orientada a Objetos (POO) para construir uma API com operações CRUD para gerenciar uma concessionária de veículos. Utilizei o banco de dados MongoDB e o framework Mongoose para essa finalidade.



## Tecnologias e Ferramentas

<details>
  <summary><strong>💾 Back-end</strong></summary>
  
- Typescript
- Node.js
- [Express](https://expressjs.com/pt-br/)
- [Docker](https://www.docker.com/)
- mongoose
- MongoDB
- ODM - Interface da aplicação com o banco de dados.
- POO - Programação Orientada a Objetos.
- SOLID
</details>
<details>
  <summary><strong>🔍 Testes</strong></summary>
  
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
</details>
<details>
  <summary><strong>🕵️ Alinhamento de código</strong></summary>
  
- [ESlint](https://eslint.org/)
</details>

## Execução do Projeto

<details>
<summary><strong>⚙️ Configurações</strong></summary>
1.Clone o Projeto.

    git@github.com:ViniciusSoares21/car-shop.git
    
2.Entre no diretório do projeto

    car-shop

3.<strong>Na pasta do projeto </strong>, suba os containers car_shop, e car_shop_db. <br />
  -   ⚠️ Para rodar a aplicação dessa forma você deve ter o [Docker](https://www.docker.com/) instalado na sua máquina.
  
    docker-compose up -d

5.Rode o container car_shop via CLI ou abri-lo no VS Code
    
    docker exec -it car_shop bash
    
4.Instale as dependências rodando o comando abaixo.

    npm install
    
</details>

<details>
<summary><strong>🚀 Inicialização</strong></summary>

Dentro do container car_shop rode o comando 

    npm run dev

</details>

## Exemplos de uso
<details>
  <summary><strong>🚗 Recursos de carros</strong></summary>
  <details>
    <summary><strong>POST  /cars</strong></summary>
    
  - Cadastra um novo carro
    ```json
    {
      "model": "Marea",
      "year": 2002,
      "color": "Black",
      "status": true,
      "buyValue": 15.990,
      "doorsQty": 4,
      "seatsQty": 5
    }
    ```
  - Retorno com SUCESSO
    ```json
      {
        "id": "6348513f34c397abcad040b2",
        "model": "Marea",
        "year": 2002,
        "color": "Black",
        "status": true,
        "buyValue": 15.990,
        "doorsQty": 4,
        "seatsQty": 5
      }
    ```
  </details>
  <details>
    <summary><strong>GET /cars</strong></summary>
    
  - Retorna todos os carros do banco de dados
    ```json
    [
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Marea",
        "year": 2002,
        "color": "Black",
        "status": true,
        "buyValue": 15.99,
        "doorsQty": 4,
        "seatsQty": 5
      },
      {
        "id": "634852326b35b59438fbea31",
        "model": "Tempra",
        "year": 1995,
        "color": "Black",
        "buyValue": 39,
        "doorsQty": 2,
        "seatsQty": 5
      }
    ]
    ```
  </details>
  <details>
    <summary><strong>GET /cars/:id</strong></summary>
    
  - Retorna um carro do banco de dados
    ```json
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Marea",
      "year": 2002,
      "color": "Black",
      "status": true,
      "buyValue": 15.99,
      "doorsQty": 4,
      "seatsQty": 5
    }
    ```
  - ⚠️ Retorno com ERRO
    - `carro` inexistente
      ```json
          STATUS http `404`
          {
            "message": "Car not found"
          }
       ```
    - `id` inválido
      ```json
          STATUS http `422`
          {
            "message": "Invalid mongo id"
          }
       ```
  </details>
  <details>
    <summary><strong>PUT  /cars/:id</strong></summary>
    
  - Atualiza um carro pelo id
    ```json
    {
      "model": "Marea",
      "year": 1992,
      "color": "Red",
      "status": true,
      "buyValue": 12.000,
      "doorsQty": 2,
      "seatsQty": 5
    }
    ```
  - Retorno com SUCESSO
    ```json
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Marea",
        "year": 1992,
        "color": "Red",
        "status": true,
        "buyValue": 12.000,
        "doorsQty": 2,
        "seatsQty": 5
      }
    ```
  - ⚠️ Retorno com ERRO
    - `carro` inexistente
      ```json
          STATUS http `404`
          {
            "message": "Car not found"
          }
       ```
    - `id` inválido
      ```json
          STATUS http `422`
          {
            "message": "Invalid mongo id"
          }
       ```
  </details>
  <details>
    <summary><strong>DELETE  /cars/:id</strong></summary>
    
  - Deleta um carro baseado no `id`
    - `status 204`
  - ⚠️ Retorno com ERRO
    - `carro` inexistente
      ```json
          STATUS http `404`
          {
            "message": "Car not found"
          }
       ```
    - `id` inválido
      ```json
          STATUS http `422`
          {
            "message": "Invalid mongo id"
          }
       ```
  </details>
</details>

<details>
  <summary><strong>🏍 Recursos de motos</strong></summary>
  
  <details>
    <summary><strong>POST  /motorcycles</strong></summary>
    
  - Cadastra uma nova moto no banco de dados
     ```json
     {
       "model": "Honda Cb 600f Hornet",
       "year": 2005,
       "color": "Yellow",
       "status": true,
       "buyValue": 30.000,
       "category": "Street",
       "engineCapacity": 600
     }
     ```
  - Retorno com SUCESSO
    ```json
    {
      "id": "6348513f34c397abcad040b2",
      "model": "Honda Cb 600f Hornet",
      "year": 2005,
      "color": "Yellow",
      "status": true,
      "buyValue": 30.000,
      "category": "Street",
      "engineCapacity": 600
    }
    ```
  </details>
  <details>
    <summary><strong>GET  /motorcycles</strong></summary>
    
  - Retorna todoas motos
     ```json
     [
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Honda Cb 600f Hornet",
        "year": 2005,
        "color": "Yellow",
        "status": true,
        "buyValue": 30.000,
        "category": "Street",
        "engineCapacity": 600
      },
      {
        "id": "634852326b35b59438fbea31",
        "model": "Honda Cbr 1000rr",
        "year": 2011,
        "color": "Orange",
        "status": true,
        "buyValue": 59.900,
        "category": "Street",
        "engineCapacity": 1000
      }
    ]
     ```
  </details>
  <details>
    <summary><strong>GET  /Motorcycle/:id</strong></summary>
    
  - Retorna uma moto baseado no `id`
    ```json
    {
      "id": "634852326b35b59438fbea31",
      "model": "Honda Cbr 1000rr",
      "year": 2011,
      "color": "Orange",
      "status": true,
      "buyValue": 59.900,
      "category": "Street",
      "engineCapacity": 1000
    }
    ```
  - ⚠️ Retorno com ERRO
    - `moto` inexistente
      ```json
          STATUS http `404`
          {
            "message": "Motorcycle not found"
          }
       ```
    - `id` inválido
      ```json
          STATUS http `422`
          {
            "message": "Invalid mongo id"
          }
       ```
  </details>
  <details>
    <summary><strong>PUT  /motorcycles/:id</strong></summary>
    
  - atualiza uma moto do banco de dados
    ```json
    {
      "model": "Honda Cb 600f Hornet",
      "year": 2014,
      "color": "Red",
      "status": true,
      "buyValue": 45.000,
      "category": "Street",
      "engineCapacity": 600
    }
    ```
  - Retorno com SUCESSO
    ```json
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Honda Cb 600f Hornet",
      "year": 2014,
      "color": "Red",
      "status": true,
      "buyValue": 45.000,
      "category": "Street",
      "engineCapacity": 600
    }
    ```
  - ⚠️ Retorno com ERRO
    - `moto` inexistente
      ```json
          STATUS http `404`
          {
            "message": "Motorcycle not found"
          }
       ```
    - `id` inválido
      ```json
          STATUS http `422`
          {
            "message": "Invalid mongo id"
          }
       ```
  </details>
  <details>
    <summary><strong>DELETE  /motorcycles/:id</strong></summary>
    
  - Deleta uma moto baseado no `id`
    - `status 204`
  - ⚠️ Retorno com ERRO
    - `moto` inexistente
      ```json
          STATUS http `404`
          {
            "message": "Motorcycle not found"
          }
       ```
    - `id` inválido
      ```json
          STATUS http `422`
          {
            "message": "Invalid mongo id"
          }
       ```
  </details>
</details>
 
## Criado por [Vinicius Soares](https://www.linkedin.com/in/vinicius-soares21/)
    

