import dynamic from 'next/dynamic';
const page = import('itemcatalogue/itemcatalogue');

const Page = dynamic(() => import('itemcatalogue/itemcatalogue'));
Page.getInitialProps = async ctx => {
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    return getInitialProps(ctx);
  }
  return {};
};
export default Page;
