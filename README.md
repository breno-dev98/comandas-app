# 📌 **README — Sistema de Comandas (WIP)**

## 🧾 Sobre o Projeto

Este projeto é um **sistema de comandas para bares e restaurantes**, em desenvolvimento com foco em escalabilidade, segurança e boas práticas de arquitetura.

Atualmente, o sistema já possui:

* Autenticação completa com **Auth.js (NextAuth v5)** usando estratégia **JWT**
* Cadastro de usuário via backend (rota `/api/users`)
* Tela de login funcional
* Dashboard protegido via **middleware**
* Logout com Server Actions
* Banco de dados gerenciado pelo **Prisma ORM**
* Criptografia de senhas com **bcryptjs**
* Estrutura inicial de rotas e grupos de páginas (public / protected)

O projeto está sendo construído em etapas e ainda está em desenvolvimento.

---

## 🚀 **Tecnologias Utilizadas**

### **Frontend / Backend (Fullstack Next.js)**

* **Next.js 15+ / App Router**
* **React**
* **ShadcnUI**
* **TypeScript**
* **Server Components + Server Actions**
* **Middleware para autenticação**
* **Auth.js (NextAuth v5)**

### **Backend**

* **Prisma ORM**
* **PostgreSQL**
* **bcryptjs**
* **Validação com Zod**

---

## 📁 **Estrutura de Pastas (atual)**

```
src/
 ├─ app/
 │   ├─ (public)/
 │   │   └─ auth/page.tsx        # Tela de login
 │   ├─ (protected)/
 │   │   └─ dashboard/page.tsx   # Dashboard do usuário (rota privada)
 │   ├─ api/
 │   │   ├─ users/
 │   │   │   └─ route.ts         # Cadastro de usuários
 │   │   ├─ categorias/
 │   │   │   └─ route.ts         # CRUD (inicial) de categorias
 │   │   └─ auth/
 │   │       └─ [...nextauth]/route.ts # Rotas internas do Auth.js
 ├─ lib/
 │   ├─ auth.ts                  # Configuração do Auth.js
 │   └─ prisma.ts                # Instância do Prisma
 ├─ utils/
 │   └─ bcryptHelper.ts          # Criptografia de senhas
 ├─ validators/
 │   └─ loginSchema.ts           # Validação do formulário de login
```

---

## 🔐 **Autenticação e Segurança**

O projeto usa:

### ✔ **Auth.js com JWT**

* Não utiliza banco de dados de sessões
* Tokens são verificados via middleware antes do acesso às rotas protegidas

### ✔ **Middleware**

Controla o acesso às rotas em `/protected/*`:

* Usuários sem token → redirecionados para `/auth`
* Usuários autenticados → acesso liberado

### ✔ **bcryptjs para hashing**

Senhas são salvas **criptografadas** com salt aleatório.

---

## 📌 **Rotas Existentes**

### **API**

| Rota              | Método              | Descrição                                |
| ----------------- | ------------------- | ---------------------------------------- |
| `/api/users`      | GET/POST                | Criação de usuário (senha criptografada) |
| `/api/categorias` | GET/POST/PUT/DELETE | CRUD inicial de categorias               |
| `/api/auth/*`     | Auth.js             | Login e gerenciamento de sessão          |

---

## 🖥️ **Páginas**

### **Public**

* **/auth** — Tela de login com validação e integração Auth.js

### **Protected**

* **/(protected)/dashboard** — Exibe:

  * Nome do usuário autenticado
  * Role do usuário
  * Botão de logout

Todas as rotas protegidas utilizam middleware + `auth()` como reforço.

---

## 🛠️ **Status Atual do Projeto**

### ✔ Já implementado:

* Autenticação com Credenciais (Auth.js)
* Middleware que protege áreas privadas
* Dashboard básico autenticado
* Logout via Server Action
* Estrutura public/protected
* Criptografia de senha
* Prisma configurado
* Rotas de Users e Categorias

### 🔜 Em breve:

* Autorização por roles (admin / gerente / atendente)
* CRUD completo para comandas, mesas e itens
* UI refinada para o dashboard
* Testes (unitários e e2e)
* Migrações automáticas com Prisma Migrate

---

## 📦 **Instalação e Execução**

```bash
git clone <seu-repo>
cd <sua-pasta>

pnpm install
pnpm dev
```

Certifique-se de criar um `.env` com:

```
DATABASE_URL="sua-url-do-postgres"
AUTH_SECRET="uma-chave-secreta-gerada"
NEXTAUTH_SECRET="mesma-chave-ou-nova"
```

---

## 📚 **Arquitetura em Andamento**

A aplicação está sendo construída para seguir:

* Clean Architecture simples
* Próxima etapa: separar serviços, camada de domínio e validar roles

