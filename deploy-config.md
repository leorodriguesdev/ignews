# Configuração para Deploy

## Variáveis de Ambiente Necessárias

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

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

## Configuração do GitHub OAuth

1. Acesse [GitHub Developer Settings](https://github.com/settings/developers)
2. Crie um novo OAuth App
3. Configure:
   - **Application name**: ig.news
   - **Homepage URL**: `http://localhost:3000` (desenvolvimento) ou sua URL de produção
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github` (desenvolvimento) ou `https://seu-dominio.com/api/auth/callback/github` (produção)

## Configuração do Stripe

1. Crie uma conta no [Stripe](https://stripe.com)
2. Acesse o Dashboard > Developers > API Keys
3. Copie a **Secret Key** para `STRIPE_API_KEY`
4. Crie um produto e preço no Dashboard
5. Atualize o `priceId` nos arquivos:
   - `src/pages/index.tsx` (linha 35)
   - `src/pages/posts/index.tsx` (linha 45)
   - `src/pages/posts/[slug].tsx` (linha 45)

## Configuração do Webhook do Stripe

1. No Stripe Dashboard, vá para Developers > Webhooks
2. Clique em "Add endpoint"
3. Configure:
   - **Endpoint URL**: `https://seu-dominio.com/api/webhooks/stripe`
   - **Events to send**: Selecione todos os eventos relacionados a assinaturas
4. Copie o **Signing secret** para `STRIPE_WEBHOOK_SECRET`

## Para Produção

Atualize `NEXTAUTH_URL` para sua URL de produção:
```env
NEXTAUTH_URL=https://seu-dominio.com
```

## Plataformas de Deploy Recomendadas

- **Vercel**: Ideal para Next.js
- **Netlify**: Suporte completo
- **Railway**: Fácil configuração
- **Heroku**: Tradicional e confiável 