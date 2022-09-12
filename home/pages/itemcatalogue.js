import dynamic from 'next/dynamic';

const Page = dynamic(() => import('itemcatalogue/itemcatalogue'));
export default Page;
