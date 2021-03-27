# Listagem de games e jogos - Desafios Principal 3 e Complementar 3A

Desafio com o intuito de fixar os conceitos de ORM, Query Builder e Raw Query, além da prática de modelagem de dados.

## Entidades

| Entidades | Atributos |
| - | - |
| user | id, first_name, last_name, email, created_at, updated_at |
| user | id, first_name, last_name, email, created_at, updated_at |
| games | id, title, created_at, updated_at |
| users_games | userId, gameId |

## Requisitos

- [x] Deve ser possível buscar um usuário e seus games pelo ID do usuário
- [x] Deve ser possível buscar os usuários pelo primeiro nome
- [x] Deve ser possível buscar os usuários pelo nome completo
- [x] Deve ser possível buscar um jogo pelo título (inteiro ou parcial)
- [x] Deve ser possível obter o total de jogos
- [x] Deve ser possível buscar os usuários que tem um jogo

## Regras de negócio

- [x] Listar um usuário e seus games pelo ID do usuário deve ser feito com ORM
- [x] Listar os usuários pelo primeiro nome deve ser feito com Raw Query
- [x] Listar os usuários pelo nome completo deve ser feito com Raw Query
- [x] Listar um jogo pelo título (inteiro ou parcial) deve ser feito com Query Builder
- [x] Listar o total de jogos deve ser feito com Raw Query
- [x] Listar buscar os usuários que tem um jogo deve ser feito com Query Builder

## Recursos

- TypeORM
- Postgres

## Testando o projeto

Após clonar o projeto, é necessário atualizar as dependências

### Comandos para baixar dependências e testar a aplicação

```bash
yarn
yarn test
```

## Configuração adicional


- Se o container do postgres tiver alguma configuração diferente do *ormconfig.json*, será necessário atualizar esse arquivo

## Modelagem dos dados

Haverá a necessidade de adicionar uma tabela com gêneros (*genres*), sendo que um jogo pode ter um ou mais gêneros. Além disso, haverá também uma tabela de pedidos (*orders*), para que um usuário pode comprar um ou mais jogos na mesma compra.

Abaixo está o link com a modelagem realizada para essa versão:

https://www.notion.so/nc13estudos/Modelagem-da-V2-do-gerenciamento-de-jogos-e-usu-rios-8f6831252e314cddb825b5615a2440ce
