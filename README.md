# apichinabox (Trabalho final de backend da disciplina de backend)
  API, em NodeJs, com operações básicas de CRUD para insert/delete/update de 'produtos' e 'pedidos'

> Participantes:
    Hugo Leonardo Pereira Marques;

> Tecnologias utilizadas:
  - NojeJs;
  - MongoDB;

> Requisitos mínimos (OBRIGATÓRIO):
  - NodeJs:           Disponível em: https://nodejs.org/en/download/;
  - GIT:              Para clonagem do repositório/projeto e para submissão de eventuais alterações/melhorias no projeto - disponível em: https://git-scm.com/downloads;
  - Postman:          Para submeter requisições à API - disponível em: https://www.postman.com/downloads/;
  - MongoDB Compass:  Para criação das 'collections' que armazenarão os dados, visualização dos dados e operações/alterações manuais nos registros e configuração do banco - disponível em: https://www.mongodb.com/products/compass;
  - Qualquer IDE para edição do projeto e criação do arquivo .ENV (com suporte para a linguagem Javascript);

  * Para instalação dos requisitos seguintes, com o NodeJS já instalado, execute os comandos abaixo no terminal do sistema operacional:

  - Express
    npm install --save express
  
  - Nodemon
    npm install --save-dev nodemon
        
  - dotenv
    npm install --save-dev dotenv
  
  - Mongoose
    npm install --save mongoose    

> Instruções para execução do projeto:

  1. No terminal do sistema opracional, na pasta de sua preferência, digite: 'git clone https://github.com/hmbrazil/apichinabox.git'

  2. No MongoDB Compass, crie um banco de dados, usuário/senha e duas collections com os nomes: 'produtos' e 'pedidos';
  
  2. Na IDE de sua preferência, crie de arquivo '.env', na pasta raiz do projeto, contendo as variáveis utilizadas pela API, com os seus respectivos valores:
    - 'PORT'    : Número da porta que será utilizada pela API (3000 é a porta padrão);
    - 'BD_USER' : Nome de usuário do banco de dados;
    - 'BD_PASS' : Senha do usuário do BD;
    - 'BD_NAME' : Nome do Banco de dados;

  3. No terminal, digite: 'npm run dev'
  
  4. No 'postman, execute as requisições aos endpoints da API, utilizando a porta informada no arquivo .ENV;
  
  - ENDPOINTS suportados:

    GET /produtos - busca no banco de dados a lista de produtos sem nenhum filtro
    POST /produtos - envia os parâmetros para o servidor e como resultado o servidor cria um produto no banco de dados


    GET /produtos/{idProduto} - busca as informações de um produto em específico pelo idProduto
    PATCH /produtos/{idProduto} - atualiza as propriedades de um produto no banco de dados
    DELETE /produtos/{idProduto} - exclui um produto do banco de dados pelo seu idProduto


    GET /pedidos - busca no banco de dados a lista de pedidos sem nenhum filtro
    POST /pedidos - envia os parâmetros para o servidor e como resultado o servidor cria um pedido no banco de dados


    GET /pedidos/{idPedido} - busca as informações de um pedido em específico pelo idPedido
    DELETE /pedidos/{idPedido} - exclui um pedido do banco de dados pelo seu idPedido
 
