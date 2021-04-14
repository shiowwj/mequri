import { createContext, useContext, useState } from 'react';
import { SearchResultsProps } from '../constants/Props';

/**
 * * The Current Search Result Context Prop
 * 
 * @type currentResult 
 * @type setCurrentResults
 */
type CurrentSearchResultContextProps = {
  currentResult: SearchResultsProps | null,
  setCurrentResults: (searchResult: SearchResultsProps | null) => void,
  hasSearchError: boolean,
  setSearchError: (isSearchError: boolean) => void,
  searchErrorMessage: string | null,
  setSearchErrorMessage: (errorMessage: string | null) => void,
}

/**
 * * The CurrentSearchResultContext object
 * @var currentResult null
 * @var setCurrentResults function void
 */
const CurrentSearchResultContext = createContext<CurrentSearchResultContextProps>({
  currentResult: null,
  setCurrentResults: () => { },
  hasSearchError: false,
  setSearchError: () => { },
  searchErrorMessage: null,
  setSearchErrorMessage: () => { },
});

/**
 * * The CurrentSearchResultProvider Component 
 * * 
 * @param children: any
 * @returns CurrentSearchResultContext: JSX.Element
 */
export function CurrentSearchResultProvider({ children }: any): JSX.Element {

  const [result, setResult] = useState<SearchResultsProps | null>(null);
  const [hasError, setError] = useState<boolean>(false);
  const [hasErrorMessage, setErrorMessage] = useState<string | null>(null);

  const setCurrentResults = (searchResult: SearchResultsProps | null) => {
    setResult(searchResult);
  }

  const setSearchError = (isSearchError: boolean) => {
    setError(isSearchError);
  }

  const setSearchErrorMessage = (errorMessage: string | null) => {
    setErrorMessage(errorMessage);
  }

  const value: CurrentSearchResultContextProps = {
    currentResult: result,
    hasSearchError: hasError,
    searchErrorMessage: hasErrorMessage,
    setCurrentResults,
    setSearchError,
    setSearchErrorMessage
  }

  return (
    <CurrentSearchResultContext.Provider value={value}>
      {children}
    </CurrentSearchResultContext.Provider>
  )
}

export const useCurrentSearchResult = () => {
  return useContext(CurrentSearchResultContext);
}