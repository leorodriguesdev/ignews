import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import { SubscribeButton } from '../../components/SubscribeButton';

import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const [session] = useSession();

  return (
    <>
      <Head>
        <title>{post.data.title} | ig.news</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.data.title}</h1>
          <time>{post.first_publication_date}</time>
          <div className={styles.postContent}>
            {post.data.content.map(content => (
              <section key={content.heading}>
                <h2>{content.heading}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: content.body.map(item => item.text).join(''),
                  }}
                />
              </section>
            ))}
          </div>
        </article>

        {!session?.activeSubscription && (
          <aside className={styles.subscribeContainer}>
            <SubscribeButton priceId="price_1JpFATAhBJknlnjYprFlAQei" />
          </aside>
        )}
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'como-renovar-uma-aplicacao-react' } },
      { params: { slug: 'criando-um-projeto-do-zero' } },
      { params: { slug: 'deploy-de-uma-aplicacao-react' } },
    ],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  // Mock data para MVP - em produção seria uma API real
  const posts = {
    'como-renovar-uma-aplicacao-react': {
      first_publication_date: '2021-03-15',
      data: {
        title: 'Como renovar uma aplicação React',
        banner: {
          url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
        author: 'João Silva',
        content: [
          {
            heading: 'Introdução',
            body: [
              {
                text: '<p>Renovar uma aplicação React pode ser um desafio, mas com as técnicas certas, você pode modernizar seu código sem quebrar a funcionalidade existente.</p>',
              },
            ],
          },
          {
            heading: 'Por que renovar?',
            body: [
              {
                text: '<p>As aplicações React evoluem rapidamente. Novas versões trazem melhorias de performance, segurança e novas funcionalidades que podem beneficiar muito seu projeto.</p>',
              },
            ],
          },
        ],
      },
    },
    'criando-um-projeto-do-zero': {
      first_publication_date: '2021-03-10',
      data: {
        title: 'Criando um projeto do zero',
        banner: {
          url: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
        },
        author: 'Maria Santos',
        content: [
          {
            heading: 'Configuração inicial',
            body: [
              {
                text: '<p>Criar um projeto React do zero pode parecer intimidador, mas com as ferramentas certas, você pode ter um ambiente de desenvolvimento robusto em poucos minutos.</p>',
              },
            ],
          },
        ],
      },
    },
    'deploy-de-uma-aplicacao-react': {
      first_publication_date: '2021-03-05',
      data: {
        title: 'Deploy de uma aplicação React',
        banner: {
          url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
        author: 'Pedro Costa',
        content: [
          {
            heading: 'Preparando para produção',
            body: [
              {
                text: '<p>Fazer o deploy de uma aplicação React na nuvem é essencial para disponibilizar seu trabalho para o mundo. Vamos aprender as melhores práticas.</p>',
              },
            ],
          },
        ],
      },
    },
  };

  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
}; 