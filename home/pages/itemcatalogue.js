import dynamic from 'next/dynamic';

const Page = dynamic(() => import('itemcatalogue/itemcatalogue'));
// export const getStaticProps = async ctx => {
//   const page = import('itemcatalogue/itemcatalogue');
//   const { getStaticProps } = (await page);
//   if (getStaticProps) {
//     return getStaticProps(ctx);
//   }
//   return {};
// };
export default Page;
