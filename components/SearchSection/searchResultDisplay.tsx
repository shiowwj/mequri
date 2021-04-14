import React, { useEffect, useState } from 'react';
import { SearchResultsProps } from '../../constants/Props';
import { useCurrentSearchResult } from '../../hooks/currentSearchResult';

const SearchResultDisplay: React.FC = () => {

  const currentSearchResultContext = useCurrentSearchResult();
  const [resultDisplay, setResultDisplay] = useState<SearchResultsProps | null>(null);

  useEffect(() => {
    setResultDisplay(currentSearchResultContext.currentResult);
  })


  /**
   * * Function to capitalise string
   * @param text 
   * @returns string of words capitalised
   */
  const capitializeFirstWord = (text: string | undefined): string => {
    if (text == undefined) {
      return '';
    }
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    const joinedWords = words.join(" ");
    return joinedWords;
  }

  /**
   * * Function for date formatting
   * @param date 
   * @returns string of date formatteed
   * TODO: Use momentjs 
   *  
   */

  const dateFormatter = (date: Date | undefined): string => {
    let dateString: string = '';
    if (date == undefined) {
      return '';
    }
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    dateString = `${year}-${month}-${day} ${hour}:${minute}hrs`
    return dateString;
  }

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
        <div>
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