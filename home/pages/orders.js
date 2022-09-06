import dynamic from 'next/dynamic';
const page = import('orders/orders');

const Page = dynamic(() => import('orders/orders'));
Page.getInitialProps = async ctx => {
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    return getInitialProps(ctx);
  }
  return {};
};
export default Page;
