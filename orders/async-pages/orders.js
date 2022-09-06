import React from 'react';
import Head from 'next/head';

const Orders = props => (
  <div>
    <Head>
      <title>Orders</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1>Orders Page</h1>
      <h3 className="title">This is a federated page owned by localhost:3002</h3>
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
);
Orders.getInitialProps = async () => {
  const swapi = await fetch('https://swapi.dev/api/people/1').then(res => res.json());
  return swapi;
};
export default Orders;
