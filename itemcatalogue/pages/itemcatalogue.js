import dynamic from 'next/dynamic';
const page = import('../async-pages/itemcatalogue');

const Page = dynamic(() => import('../async-pages/itemcatalogue'));

export async function getStaticProps(context) {
  const { getStaticProps } = (await page);

    console.log(getStaticProps);

    if (getStaticProps) {
      const props =  await getStaticProps(context);

      return {
        props,
        revalidate: 10,
      };
    }
};

export default Page;
