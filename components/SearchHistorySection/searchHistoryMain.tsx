import React from 'react';
import SearchHistoryItem from './searchItem';

const SearchHistoryMain: React.FC = () => {

  return (
    <section id="searchHistorySection" className="py-2 px-2 flex flex-col">
      <div>
        <div className="p-4 border-b-2 border-red-100">
          <h2 className="font-semibold text-2xl text-font_primary_color flex w-full justify-center mt-4">Search History</h2>
        </div>
        <SearchHistoryItem />
      </div>
    </section>
  )
}

export default SearchHistoryMain;