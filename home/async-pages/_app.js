import App from 'next/app';
import Nav from '../components/nav';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{border: '20px solid red'}}>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

MyApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};
export default MyApp;
