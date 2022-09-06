import dynamic from 'next/dynamic';
const page = import('../async-pages/itemcatalogue');

const Page = dynamic(() => import('../async-pages/itemcatalogue'));

export const getStaticProps = async ctx => {
  const { getStaticProps } = (await page);

  console.log(getStaticProps);

  if (getStaticProps) {
    return getStaticProps(ctx);
  } else {
    return {}
  }
};

export default Page;
