import dynamic from 'next/dynamic';

const Page = dynamic(() => import('orders/orders'));
export default Page;
