import React from 'react';
import Head from 'next/head';
import {PrismaClient} from '@prisma/client';

const ItemCatalogue = props => {
  console.log(props);
  return (
  <div>
    <Head>
      <title>Item ItemCatalogue</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1>Item Item Catalogue</h1>
      <h3 className="title">This is a federated page owned by localhost:3000</h3>
      <span>
        {' '}
        Data from federated <pre>getStaticProps</pre>
      </span>
      <br />
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
  const stores = await prisma.store.findMany();

  console.log("tores" +stores);

  // let response = await fetch('https://reqres.in/api/products/3');
  // let stores = await response.json();

  return {
    props: { stores },
    revalidate: 10,
  };
};

export default ItemCatalogue;
