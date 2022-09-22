import Head from 'next/head';
import { PrismaClient } from '@prisma/client';

const ItemCatalogue = props => {
  console.log(props);
  return (
  <div style={{border: '10px solid green'}}>
    <Head>
      <title>Item Catalogue</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1>Item Catalogue</h1>
      
      <p>This is a federated page owned by localhost:3000 Item Catalogue</p> 

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

  const stores = await prisma.store.findMany();

  return {
    props: { stores },
    revalidate: 10,
  };
};

export default ItemCatalogue;
