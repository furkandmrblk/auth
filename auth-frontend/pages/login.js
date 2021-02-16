import Head from 'next/head';
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import GlobalStyle from '../theme/globalStyles';

export default function login() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>Authentication</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Navbar />
      <Login />
    </div>
  );
}
