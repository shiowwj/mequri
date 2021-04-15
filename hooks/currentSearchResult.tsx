import { createContext, useContext, useState } from 'react';
import { SearchResultItemProps } from '../constants/Props';

/**
 * * The Current Search Result Context Prop
 * 
 * @type currentResult 
 * @type setCurrentResults
 */
type CurrentSearchResultContextProps = {
  currentResult: SearchResultItemProps | null,
  setCurrentResults: (searchResult: SearchResultItemProps | null) => void,

  hasSearchError: boolean,
  setSearchError: (isSearchError: boolean) => void,

  searchErrorMessage: string | null,
  setSearchErrorMessage: (errorMessage: string | null) => void,

  hasTriggeredEvent: boolean,
  setHasTriggeredEvent: (triggeredEvent: boolean) => void
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

  hasTriggeredEvent: false,
  setHasTriggeredEvent: () => { }
});

/**
 * * The CurrentSearchResultProvider Component 
 * * 
 * @param children: any
 * @returns CurrentSearchResultContext: JSX.Element
 */
export function CurrentSearchResultProvider({ children }: any): JSX.Element {

  const [result, setResult] = useState<SearchResultItemProps | null>(null);
  const [hasError, setError] = useState<boolean>(false);
  const [hasErrorMessage, setErrorMessage] = useState<string | null>(null);
  const [hasTriggered, setHasTriggered] = useState<boolean>(false);

  const setCurrentResults = (searchResult: SearchResultItemProps | null) => {
    setResult(searchResult);
  }

  const setSearchError = (isSearchError: boolean) => {
    setError(isSearchError);
  }

  const setSearchErrorMessage = (errorMessage: string | null) => {
    setErrorMessage(errorMessage);
  }

  const setHasTriggeredEvent = (triggeredEvent: boolean) => {
    setHasTriggered(triggeredEvent);
  }

  const value: CurrentSearchResultContextProps = {
    currentResult: result,
    hasSearchError: hasError,
    searchErrorMessage: hasErrorMessage,
    hasTriggeredEvent: hasTriggered,
    setCurrentResults,
    setSearchError,
    setSearchErrorMessage,
    setHasTriggeredEvent
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