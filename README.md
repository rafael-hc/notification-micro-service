
# Microserviço de Notificações

Microsserviço de notificações desenvolvido no Ignite Lab 04 de Node.js.
Uma aplicação moderna e escalável.


## Aprendizados

Durante o desenvolvimento do projeto aprendi conceitos de inversão e injeção de dependências,  value object pattern, conceito de mappers, testes unitários com Jest, factory pattern.  


## Stack utilizada

 - Nest.js
 - Prisma ORM
 - TypeScript
 - Jest


## Instalação

Instale notification-micro-service com npm

```bash
  git clone https://github.com/rafael-hc/notification-micro-service.git
  cd notification-micro-service
  npm install
```
    
## Documentação da API

#### Retorna as notificações por destinatário

```http
  POST notifications
```
Body Json parans 

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `content` | `string` | **Obrigatório**. O conteúdo da notificação (mínimo 5 e máximo 240 caracteres) |
| `category` | `string` | **Obrigatório**. A categira da notificação |
| `recipientId` | `string` | **Obrigatório**. O ID do destinatário da notificação |

#### Retorna as notificações por destinatário

```http
  GET notifications/from/:recipientId
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `recipientId` | `string` | **Obrigatório**. O ID do destinatário que você quer |

#### Retorna a quantidade de notificações por destinatário

```http
  GET notifications/count/from/:recipientId
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `recipientId`      | `string` | **Obrigatório**. O ID do destinatário que você quer |


#### Marca uma notificação como cancelada

```http
  PATCH notifications/:id/cancel
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da notificação que você quer cancelar |


#### Marca uma notificação como lida

```http
  PATCH notifications/:id/read
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da notificação que você quer marcar como lida |


#### Marca uma notificação como não lida

```http
  PATCH notifications/:id/unread
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da notificação que você quer marcar como não lida |

