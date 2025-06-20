# 🚀 ig.news

Uma plataforma de notícias sobre o mundo React, desenvolvida com Next.js, TypeScript e integração com Stripe para pagamentos.

## 📋 Sobre o Projeto

O **ig.news** é uma aplicação web moderna que oferece conteúdo exclusivo sobre React e tecnologias relacionadas. A plataforma permite que usuários se inscrevam para acessar conteúdo premium através de um sistema de assinatura integrado com o Stripe.

### ✨ Funcionalidades

- 🔐 **Autenticação com GitHub** - Login seguro usando NextAuth.js
- 💳 **Sistema de Assinatura** - Integração completa com Stripe
- 📱 **Design Responsivo** - Interface adaptável para diferentes dispositivos
- ⚡ **Performance Otimizada** - Desenvolvido com Next.js para máxima velocidade
- 🎨 **Interface Moderna** - Design elegante com SCSS e CSS Modules
- 📝 **Sistema de Posts** - Páginas de listagem e visualização de artigos
- 🔒 **Conteúdo Premium** - Sistema de preview para não assinantes

## 🛠️ Tecnologias Utilizadas

### Frontend
- **[Next.js 15.3.4](https://nextjs.org/)** - Framework React para produção
- **[React 19.1.0](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 4.4.4](https://www.typescriptlang.org/)** - Superset JavaScript tipado
- **[Sass 1.43.2](https://sass-lang.com/)** - Pré-processador CSS

### Autenticação & Pagamentos
- **[NextAuth.js 3.29.0](https://next-auth.js.org/)** - Autenticação para Next.js
- **[Stripe 8.184.0](https://stripe.com/)** - Processamento de pagamentos
- **[Micro 10.0.1](https://github.com/vercel/micro)** - Utilitário para webhooks

### UI/UX
- **[React Icons 4.3.1](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones

### Desenvolvimento
- **[ESLint](https://eslint.org/)** - Linter para JavaScript/TypeScript
- **[Yarn](https://yarnpkg.com/)** - Gerenciador de pacotes

## 📁 Estrutura do Projeto

```
ignews/
├── public/
│   ├── images/
│   │   ├── avatar.svg
│   │   └── logo.svg
│   └── favicon.png
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.scss
│   │   ├── SignInButton/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.scss
│   │   └── SubscribeButton/
│   │       ├── index.tsx
│   │       └── styles.module.scss
│   ├── pages/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth].ts
│   │   │   ├── create-checkout-session.ts
│   │   │   └── webhooks/
│   │   │       └── stripe.ts
│   │   ├── posts/
│   │   │   ├── index.tsx
│   │   │   ├── [slug].tsx
│   │   │   ├── posts.module.scss
│   │   │   └── post.module.scss
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   └── home.module.scss
│   ├── services/
│   │   └── stripe.ts
│   └── styles/
│       └── global.scss
├── package.json
├── tsconfig.json
├── next.config.js
├── deploy-config.md
└── yarn.lock
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- Yarn ou npm
- Conta no GitHub (para autenticação)
- Conta no Stripe (para pagamentos)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/ignews.git
cd ignews
```

### 2. Instale as dependências

```bash
yarn install
# ou
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# GitHub OAuth
GITHUB_ID=seu_github_client_id
GITHUB_SECRET=seu_github_client_secret

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=sua_nextauth_secret

# Stripe
STRIPE_API_KEY=sua_stripe_api_key
STRIPE_WEBHOOK_SECRET=sua_stripe_webhook_secret
```

### 4. Execute o projeto

```bash
# Desenvolvimento
yarn dev
# ou
npm run dev

# Build para produção
yarn build
# ou
npm run build

# Iniciar em produção
yarn start
# ou
npm start
```

O projeto estará disponível em `http://localhost:3000`

## 🔧 Configuração das APIs

### GitHub OAuth

1. Acesse [GitHub Developer Settings](https://github.com/settings/developers)
2. Crie um novo OAuth App
3. Configure a URL de callback: `http://localhost:3000/api/auth/callback/github`
4. Copie o Client ID e Client Secret para o arquivo `.env.local`

### Stripe

1. Crie uma conta no [Stripe](https://stripe.com)
2. Acesse o Dashboard e vá para Developers > API Keys
3. Copie a Secret Key para o arquivo `.env.local`
4. Crie um produto e preço no Stripe Dashboard
5. Atualize o `priceId` nos arquivos necessários (veja `deploy-config.md`)

## 📱 Funcionalidades Implementadas

### ✅ MVP Completo
- [x] Estrutura base do projeto Next.js
- [x] Autenticação com GitHub via NextAuth.js
- [x] Interface responsiva com SCSS
- [x] Integração completa com Stripe
- [x] Componentes reutilizáveis
- [x] Sistema de assinatura funcional
- [x] Página de listagem de posts
- [x] Página individual de posts
- [x] Sistema de preview para não assinantes
- [x] Webhooks do Stripe
- [x] Navegação funcional
- [x] **Pronto para Deploy** 🚀

### 🔄 Próximas Melhorias
- [ ] Integração com banco de dados (Prisma + PostgreSQL)
- [ ] Sistema de CMS para gerenciar posts
- [ ] Notificações por email
- [ ] Dashboard do usuário
- [ ] Sistema de comentários
- [ ] Analytics e métricas

## 🎨 Design System

O projeto utiliza um design system consistente com as seguintes cores:

- **Branco**: `#ffffff`
- **Cinza 100**: `#e1e1e6`
- **Cinza 300**: `#a9a9b3`
- **Cinza 800**: `#29292e`
- **Cinza 850**: `#1f2729`
- **Cinza 900**: `#121214`
- **Ciano 500**: `#61dafb`
- **Amarelo 500**: `#eba417`

## 🚀 Deploy

O projeto está **pronto para deploy**! Consulte o arquivo `deploy-config.md` para instruções detalhadas de configuração.

### Plataformas Recomendadas:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **Railway**
- **Heroku**

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@leorodriguesdev](https://github.com/leorodriguesdev)
- LinkedIn: [leorodriguesdev](https://linkedin.com/in/leorodriguesdev)

## 🙏 Agradecimentos

- [Rocketseat](https://rocketseat.com.br/) - Pela inspiração e conteúdo educacional
- [Next.js](https://nextjs.org/) - Framework incrível para React
- [Stripe](https://stripe.com/) - API de pagamentos robusta
- [NextAuth.js](https://next-auth.js.org/) - Solução de autenticação elegante

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório! 