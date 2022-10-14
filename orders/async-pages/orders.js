import Head from 'next/head';

const Orders = props => {
  console.log(props);
  return (
  <div>
    <Head>
      <title>MICRO-FRONTEND B - Orders</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div style={{"border": "10px solid pink"}}>
      <h1>MICRO-FRONTEND B - Orders</h1>
      
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
  const { PrismaClient } = await import('../prisma/generated/client2');
  const prisma = new PrismaClient();

  const orders = await prisma.Order.findMany();
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
