import React from 'react';
import Layout from '../components/Layout';
// import styles from '../styles/Home.module.css';
import SearchMain from '../components/SearchSection/searchMain';

export default function Home() {
  return (
    <Layout>
      {/* Start Search Form Section */}
      <SearchMain />
      {/* End Search Form Section */}

      {/* Search History Section  */}
      <section id="searchHistorySection" className="py-2 px-2 flex flex-col">
        <div>
          <div className="p-4 border-b-2 border-red-100">
            <h2 className="font-semibold text-2xl text-font_primary_color flex w-full justify-center mt-4">Search History</h2>
          </div>
          <div>
            <>
              Search History items
            </>
          </div>
        </div>
      </section>
      {/* End Search Form Section */}
    </Layout>
  );
}