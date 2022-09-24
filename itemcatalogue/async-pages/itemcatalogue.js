import dynamic from 'next/dynamic'

const ItemCatalogue = props => {
  console.log(props);
  return (
    <div className="hero">
      <h1>Item Catalogue2</h1>
      
      <p>This is a federated page owned by localhost:3000 Item Catalogue</p> 

        Data from federated getStaticProps

      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
)};


export const getStaticProps = async () => {
  console.log('Hello');
  const { PrismaClient } = await import('../prisma/generated/client1');
  const prisma = new PrismaClient();
  const stores = await prisma.store.findMany();

  console.log(stores);

  return {
    props: { stores },
    revalidate: 10,
  };
};

export default ItemCatalogue;
