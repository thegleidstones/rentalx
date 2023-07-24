# rentalx

# Cadastro de Carros
**Requisitos Funcionais - RF**
[] - Deve ser possível cadastrar um novo carro;
[] - Deve ser possível listar todas as categorias cadastradas;

**Regras de Negócio - RN**
[] - Não deve ser possível cadastrar um carro com uma placa já existente;
[] - Não deve ser possível alterar a placa de um carro já cadastrado;
[] - O carro deve ser cadastrado como disponível;
[] - O usuário responsável pelo cadastro do carro deve ser um usuário administrador;

# Listagem de Carros
**Requisitos Funcionais - RF**
[] - Deve ser possível listar todos os carros disponíveis;
[] - Deve ser possível listar todos os carros disponíveis pelo nome da categoria;
[] - Deve ser possível listar todos os carros disponíveis pelo nome da marca;
[] - Deve ser possível listar todos os carros disponíveis pelo modelo do carro;

**Regras de Negócio - RN**
[] - O usuário não precisa estar logado no sistema para visualizar os carros disponíveis;

# Cadastro de espeficicações dos Carros
**Requisitos Funcionais - RF**
[] - Deve ser possível cadastrar uma especificação para um  carro;
[] - Deve ser possível listar todas especificações cadastradas;
[] - Deve ser possível listar todos os carros cadastradas;

**Regras de Negócio - RN**
[] - Não deve ser possível cadastrar uma especificação para um carro não cadastrado;
[] - Não deve ser possível cadastrar uma especificação já existente para o mesmo carro;
[] - O usuário responsável pelo cadastro das especificações deve ser um usuário administrador;

# Cadastro de imagens dos Carros
**Requisitos Funcionais - RF**
[] - Deve ser possível cadastrar uma imagem para um carro;
[] - Deve ser possível listar todos os carros cadastradas;

**Requisitos Não Funcionais - RNF**
[] - Utilizar o multer para upload de arquivos

**Regras de Negócio - RN**
[] - Não deve ser possível cadastrar uma imagem para um carro não cadastrado;
[] - O usuário responsável pelo cadastro das especificações deve ser um usuário administrador;

# Alugel de Carros
**Requisitos Funcionais - RF**
[] - Deve ser possível cadastrar um novo aluguel de carro;
[] - Deve ser possível listar todas as categorias cadastradas;

**Regras de Negócio - RN**
[] - O aluguel deve ter duaração mínima de 24 horas
[] - Não deve ser possível cadastrar um novo aluguel caso já exista um aluguel aberto para o mesmo usuário;
[] - Não deve ser possível cadastrar um novo aluguel caso já exista um aluguel aberto para o mesmo carro;
[] - Não deve ser possível cadastrar um novo aluguel para um usuário não cadastrado;
[] - Não deve ser possível cadastrar um novo aluguel para um carro não cadastrado;