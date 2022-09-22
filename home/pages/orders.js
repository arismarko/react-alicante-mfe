import dynamic from 'next/dynamic';

const Page = dynamic(() => import('orders/orders'));

export async function getServerSideProps(context) {
    const page = import('orders/orders');
    const { getStaticProps } = (await page);

    const props =  await getStaticProps(context);

    console.log(props)

    return {
        props
    }
  };
export default Page;
