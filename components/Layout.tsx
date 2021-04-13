import React, { ReactNode } from 'react';
// import Link from 'next/link';
import Head from 'next/head';
// import Header from './common/Header';
// import Footer from './common/Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'Your Personalized Weather Report',
}: Props) => {

  return (
    <div className="min-h-screen bg-main font-test">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Header /> */}
      {children}
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
