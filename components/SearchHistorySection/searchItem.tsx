import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import { dbFirebase } from '../../utils/firestoreDB';
import { SearchResultItemProps, MessageTypes } from '../../constants/Props';
import CustomMessage from '../common/CustomMessage';
import { dateFormatter } from '../../utils/helperFunctions';
import { getWeatherByCityId } from '../../utils/openweatherAPI';
import { useCurrentSearchResult } from '../../hooks/currentSearchResult';

const SearchHistoryItem: React.FC = () => {

  const currentSearchResultContext = useCurrentSearchResult();
  const [searchHistoryList, setSearchHistoryList] = useState<SearchResultItemProps[] | null>();
  // const [ hasLoaded, setHasLoaded ] = useState(false);

  // const getWeatherByID

  const fetchResultsList = async () => {
    try {
      const retrieveSearchHistoryList = await dbFirebase().getAllSearchResults();
      if (retrieveSearchHistoryList) {
        if (retrieveSearchHistoryList.length > 0) {
          setSearchHistoryList(retrieveSearchHistoryList);
          // return retrieveSearchHistoryList
        }
      } else {
        setSearchHistoryList(null);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (!searchHistoryList || currentSearchResultContext.hasTriggeredEvent) {
      fetchResultsList();
      if (currentSearchResultContext.hasTriggeredEvent) {
        currentSearchResultContext.setHasTriggeredEvent(false);
      }
    }
  }, [searchHistoryList, currentSearchResultContext.currentResult, currentSearchResultContext.hasTriggeredEvent])

  const handleSearchWeatherByCityID = async (item: SearchResultItemProps) => {
    const cityId = item.cityId;
    try {
      const searchResultResponse = await getWeatherByCityId(cityId);
      if (searchResultResponse) {
        const data = await searchResultResponse.json();
        if (searchResultResponse.status === 200) {
          const timeStamp = new Date();
          let searchResultObj: SearchResultItemProps = {
            id: item.id,
            cityId: cityId,
            city: item.city,
            country: item.country,
            weather: data['weather'][0]['main'],
            description: data['weather'][0]['description'],
            icon: data['weather'][0]['icon'],
            temp_max: data['main']['temp_max'],
            temp_min: data['main']['temp_min'],
            humidity: data['main']['humidity'],
            date_of_request: timeStamp
          };
          currentSearchResultContext.setCurrentResults(searchResultObj)
          // update db 
          await dbFirebase().updateSearchResult(searchResultObj)
          // let app know search has been successful -> to reload list
          currentSearchResultContext.setHasTriggeredEvent(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleDeleteSearchItem = async (item: SearchResultItemProps) => {
    //delete from db
    await dbFirebase().deleteSearchResult(item);
    // reload list
    currentSearchResultContext.setHasTriggeredEvent(true);
    fetchResultsList();
  }

  return (
    <div className="flex flex-col">
      {searchHistoryList ?
        searchHistoryList.map((item, index) => {
          return (
            <div className="flex flex-row mt-4 mx-8 py-4 px-4 border-yellow-900 border-2 rounded-lg justify-between"
              key={index}>
              <div className="flex flex-row">
                <div>
                  {index + 1}.
                </div>
                <div className="mx-4">
                  {item.city}, {item.country}
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mx-4">
                  {dateFormatter(item.date_of_request)}
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    handleSearchWeatherByCityID(item);
                  }}
                  className="mx-4">
                  <img className="w-6 h-6" src="/images/search-icon.svg" alt="search-item" />
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteSearchItem(item);
                  }}>
                  <img className="w-6 h-6" src="/images/trash-icon.svg" alt="delete-item" />
                </div>
              </div>
            </div>
          )
        }) :
        <CustomMessage
          message='No Records'
          type={MessageTypes.DEFAULT}
        />
      }
    </div>
  )
}

export default SearchHistoryItem;