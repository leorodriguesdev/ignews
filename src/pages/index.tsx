import { GetStaticProps } from 'next'
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
      <>
        <Head>
          <title>Ínicio | ig.news</title>
        </Head>
        <main className={styles.contentContainer}>
          <section className={styles.hero}>
            <span>👏Hey, Welcome</span>
            <h1>News about <br />the <span>React</span> world.</h1>
            <p>
              Get access to all the publications <br />
              <span>for {product.amount} month</span>
            </p>
            <SubscribeButton priceId={product.priceId}/>
          </section>

          <img 
            src="/images/avatar.svg" 
            alt="girl coding" 
            className={styles.heroImage}
          />
        </main>
      </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
const price = await stripe.prices.retrieve('price_1JpFATAhBJknlnjYprFlAQei')

  const product  = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 1 day = 24 hours
  }
}