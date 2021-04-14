import React, { useEffect, useState } from 'react';
import SearchWeatherForm from './searchWeatherForm';
import { useCurrentSearchResult } from '../../hooks/currentSearchResult';
import { SearchResultsProps, MessageTypes } from '../../constants/Props';
import SearchResultDisplay from './searchResultDisplay';
import CustomMessage from '../common/errorMessage';


const SearchMain: React.FC = () => {

  const currentSearchResultContext = useCurrentSearchResult();
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [resultDisplay, setResultDisplay] = useState<SearchResultsProps | null>(null);

  useEffect(() => {
    setResultDisplay(currentSearchResultContext.currentResult);
    setHasSubmitError(currentSearchResultContext.hasSearchError);
    setErrorMessage(currentSearchResultContext.searchErrorMessage);
  })

  return (
    <section id="searchSection" className="py-2 px-1 flex flex-col">
      <div>
        <div className="p-4 border-b-2 border-red-100">
          <h2 className="font-semibold text-2xl text-font_primary_color flex w-full justify-center mt-4">Today's Weather</h2>
        </div>
        <SearchWeatherForm />
        <hr className="mt-8"></hr>
        {hasSubmitError ?
          (errorMessage ?
            <CustomMessage
              message={errorMessage?.toUpperCase()}
              type={MessageTypes.ERROR}
            /> : <></>) :
          (resultDisplay !== null ? <SearchResultDisplay /> : <></>)
        }
      </div>
    </section>
  )
}

export default SearchMain;