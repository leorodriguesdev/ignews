import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import { SubscribeButton } from '../../components/SubscribeButton';

import styles from './posts.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  const [session] = useSession();

  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
            <Link key={post.uid} href={`/posts/${post.uid}`}>
              <a className={styles.post}>
                <time>{post.first_publication_date}</time>
                <strong>{post.data.title}</strong>
                <p>{post.data.subtitle}</p>
              </a>
            </Link>
          ))}
        </div>

        {!session?.activeSubscription && (
          <aside className={styles.subscribeContainer}>
            <SubscribeButton priceId="price_1JpFATAhBJknlnjYprFlAQei" />
          </aside>
        )}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Mock data para MVP - em produção seria uma API real
  const posts = [
    {
      uid: 'como-renovar-uma-aplicacao-react',
      first_publication_date: '2021-03-15',
      data: {
        title: 'Como renovar uma aplicação React',
        subtitle: 'Aprenda técnicas para renovar sua aplicação React e deixá-la mais moderna e performática',
        author: 'João Silva',
      },
    },
    {
      uid: 'criando-um-projeto-do-zero',
      first_publication_date: '2021-03-10',
      data: {
        title: 'Criando um projeto do zero',
        subtitle: 'Passo a passo para criar um projeto React moderno com as melhores práticas',
        author: 'Maria Santos',
      },
    },
    {
      uid: 'deploy-de-uma-aplicacao-react',
      first_publication_date: '2021-03-05',
      data: {
        title: 'Deploy de uma aplicação React',
        subtitle: 'Aprenda como fazer deploy de sua aplicação React na nuvem',
        author: 'Pedro Costa',
      },
    },
  ];

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
}; 