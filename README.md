# ConectaIFCE - Plataforma Web

Aplicação frontend desenvolvida com foco em prática de desenvolvimento moderno utilizando React, integração com API REST e boas práticas de organização e arquitetura.

O projeto foi construído com base nas videoaulas do curso, feitas pelo professor Lucas Mendes.

---

## Tecnologias Utilizadas

* React + Vite
* TypeScript
* TailwindCSS
* shadcn/ui
* React Hook Form
* Zod (validação)
* React Router DOM
* ESLint + Prettier

---

## Funcionalidades

A aplicação contempla as seguintes funcionalidades:

### Autenticação

* Login
* Registro de usuário
* Armazenamento de usuário autenticado em contexto global
* Tratamento de erros da API
* Controle de loading

### Proteção de Rotas

* Rotas privadas acessíveis apenas para usuários autenticados
* Redirecionamento automático para login

---

### Feed

* Listagem de usuários recomendados.
---

### Perfil

* Visualização de perfil de usuário
* Informações dinâmicas

---

### Decisão

Foi adotado o padrão **feature-based** para facilitar:

* Escalabilidade
* Organização
* Reutilização de código

---

## Principais Decisões Técnicas

### Uso do React Hook Form + Zod

Diferente do projeto original:

* Foi implementada validação com **Zod**
* Melhor controle de erros
* Tipagem forte com TypeScript

---

### Separação de lógica com Hooks

Exemplo:

* `useFormLogin`
* `useFormRegister`

 Benefícios:

* Código mais limpo
* Separação entre UI e lógica
* Reutilização

---

### Camada de Serviço (Services)

As chamadas da API foram isoladas em arquivos próprios:

```
services/login.service.ts
```

=> Evita lógica de API dentro dos componentes

---

### Contexto de Autenticação

Foi implementado um contexto global:

```
AuthContext
```
---

### Cliente HTTP Centralizado

Criação de um `http-client` com:

* tratamento de erros
* uso de token automático
* padronização de requisições

---

### Proteção de Rotas

Implementação de rotas privadas:

* Verifica se usuário está autenticado
* Redireciona automaticamente

---

### Estados de Loading

* Botões com loading (`isSubmitting`)
* Feedback visual para o usuário

---

### Tratamento de Erros

* Exibição de erros vindos da API
* Mensagens amigáveis ao usuário

---

## Layout e UI

* Uso de **shadcn/ui** para componentes reutilizáveis
* Estilização com **TailwindCSS**
* Layout base reutilizável

---

## Acessibilidade

Foram aplicadas melhorias como:

* Uso correto de `label` com `htmlFor`
* Inputs acessíveis
* Feedback visual de erro
* Navegação consistente

---

## Como Rodar o Projeto

```bash
# instalar dependências
npm install

# rodar o projeto
npm run dev
```

---

## Considerações Finais

O projeto evolui significativamente em relação com o passar das videoaulas, trazendo melhorias estruturais, melhor organização de código e maior aderência a boas práticas modernas de desenvolvimento frontend.

---

## Créditos
Canal do Professor: https://www.youtube.com/@prof_lucasmendes
