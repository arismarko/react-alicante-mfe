import Head from 'next/head';
import {PrismaClient} from '@prisma/client';

const Orders = props => {
  return (
  <div>
    <Head>
      <title>Orders2</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1>Orders2</h1>
      
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

  console.log(prisma);

  const orders = await prisma.Order.findMany();

  console.log(orders);

  return {
    props: { orders: orders.map(
      order => {
        return { 
          id: order.id,
          createdAt: order.createdAt.toString(),
          updatedAt: order.updatedAt.toString(),
          buyerId: order.buyerId,
        }

      }
    ) },
    revalidate: 10,
  };


};

export default Orders;
