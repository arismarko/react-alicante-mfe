import dynamic from 'next/dynamic';

const Page = dynamic(() => import('itemcatalogue/itemcatalogue'));

export async function getServerSideProps(context) {
    const page = import('itemcatalogue/itemcatalogue');
    const { getStaticProps } = (await page);

    const props =  await getStaticProps(context);

    return {
        props
    }
};

export default Page;
