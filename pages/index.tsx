import React from 'react';
import Layout from '../components/Layout';
// import styles from '../styles/Home.module.css';
import SearchMain from '../components/SearchSection/searchMain';
import SearchHistoryMain from '../components/SearchHistorySection/searchHistoryMain';

export default function Home() {
  return (
    <Layout>
      {/* Start Search Form Section */}
      <SearchMain />
      {/* End Search Form Section */}
      {/* Search History Section  */}
      <SearchHistoryMain />
      {/* End Search Form Section */}
    </Layout>
  );
}