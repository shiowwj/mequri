import React, { useEffect, useState } from 'react';
import { SearchResultItemProps } from '../../constants/Props';
import { useCurrentSearchResult } from '../../hooks/currentSearchResult';
import { dateFormatter, capitializeFirstWord } from '../../utils/helperFunctions';

const SearchResultDisplay: React.FC = () => {

  const currentSearchResultContext = useCurrentSearchResult();
  const [resultDisplay, setResultDisplay] = useState<SearchResultItemProps | null>(null);

  useEffect(() => {
    setResultDisplay(currentSearchResultContext.currentResult);
  })
  /**
   * TODO: Map Icons to Description
   */
  return (
    <>
      <div id="searchResults" className="my-8 mx-4 py-4 px-8 border-2 bg-purple-100 rounded-lg shadow-lg" >
        <div className="mt-4">
          <h3 className="text-gray-500 my-1"
          >{resultDisplay?.city}, {resultDisplay?.country}</h3>
        </div>
        <div className="mt-4 mb-6">
          <h1 className="font-semibold text-5xl tracking-wide"
          >{resultDisplay?.weather}</h1>
        </div>
        <div className="mb-6">
          <div className="mt-1 flex md:flex-row justify-center">
            <div className="mx-8 flex-grow-0 w-4/12 md:w-2/12">
              <span><b>Description:</b></span>
            </div>
            <div className="flex-grow text-left">
              {capitializeFirstWord(resultDisplay?.description)}
            </div>
          </div>
          <div className="mt-1 flex md:flex-row justify-center">
            <div className="mx-8 flex-grow-0 w-4/12 md:w-2/12">
              <span><b>Temperature:</b></span>
            </div>
            <div className="flex-grow text-left">
              {resultDisplay?.temp_min}&deg;C ~ {resultDisplay?.temp_max}&deg;C
            </div>
          </div>
          <div className="mt-1 flex md:flex-row justify-center">
            <div className="mx-8 flex-grow-0 w-4/12 md:w-2/12">
              <span><b>Humidity:</b></span>
            </div>
            <div className="flex-grow text-left">
              {resultDisplay?.humidity}%
            </div>
          </div>
          <div className="mt-1 flex md:flex-row justify-center">
            <div className="mx-8 flex-grow-0 w-4/12 md:w-2/12">
              <span><b>Time:</b></span>
            </div>
            <div className="flex-grow text-left">
              {dateFormatter(resultDisplay?.date_of_request)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchResultDisplay;