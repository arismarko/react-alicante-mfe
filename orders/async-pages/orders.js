import React from 'react';
import Head from 'next/head';
import {PrismaClient} from '@prisma/client';

const Orders = props => {
  console.log(props);
  return (
  <div>
    <Head>
      <title>Orders</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1>Orders</h1>
      
      <p>This is a federated page owned by localhost:3002 Orders</p> 

        Data from federated getStaticProps

      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 20px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
)};

export const getStaticProps = async () => {
  const prisma = new PrismaClient();
  const orders = await prisma.order.findMany();

  console.log(orders);

  return {
    props: { orders },
    revalidate: 10,
  };
};

export default Orders;
