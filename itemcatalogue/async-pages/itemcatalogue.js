const ItemCatalogue = props => {
  return (
    <div className="hero" style={{"border": "10px solid green"}}>
      <h1>MICRO-FRONTEND A - Item Catalogue</h1>
      
      <p>This is a federated page owned by localhost:3000 Item Catalogue</p> 

        Data from federated getStaticProps

      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
)};

export const getStaticProps = async () => {
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
