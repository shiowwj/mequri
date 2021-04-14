import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SearchFormDataProps, SearchResultsProps } from '../../constants/Props';
import { ApiConstants } from '../../constants/ApiContants';
import { useCurrentSearchResult } from '../../hooks/currentSearchResult';

const SearchWeatherForm: React.FC = () => {

  const currentSearchResultContext = useCurrentSearchResult();
  // const [hasSubmitError, setHasSubmitError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState<string>('');
  const { register, formState: { errors }, handleSubmit, reset } = useForm<SearchFormDataProps>();

  /**
   * * Handles the search form event
   */
  const onSubmitSearch = handleSubmit(async (data) => {
    console.log('submit form action....')
    const searchResultResponse = await getWeather(data);
    if (searchResultResponse) {
      const data = await searchResultResponse.json();
      if (searchResultResponse.status === 200) {
        // setHasSubmitError(false);
        currentSearchResultContext.setSearchError(false);
        const timeStamp = new Date();
        let searchResultObj: SearchResultsProps = {
          id: data['id'],
          city: data['name'],
          country: data['sys']['country'],
          weather: data['weather'][0]['main'],
          description: data['weather'][0]['description'],
          icon: data['weather'][0]['icon'],
          temp_max: data['main']['temp_max'],
          temp_min: data['main']['temp_min'],
          humidity: data['main']['humidity'],
          date_of_request: timeStamp
        };
        console.log('search result obj', searchResultObj);
        // searchMainCallBack('testtest')
        currentSearchResultContext.setCurrentResults(searchResultObj);
      } else {
        const error = data;
        currentSearchResultContext.setSearchError(true);
        currentSearchResultContext.setSearchErrorMessage(error['message']);
        // setHasSubmitError(true);
        // setErrorMessage(error['message'])
        currentSearchResultContext.setCurrentResults(null);
      }
    }
  });

  /**
   * * Handles the clearing search form event
   */
  const onClearSearchForm = handleSubmit(() => {
    reset({
      city: '',
      country: '',
    },
      {
        keepIsSubmitted: false,
        keepErrors: false,
        keepDirty: false,
      })
  });

  /**
   * * Fetches weather data based on user inputs 
   * 
   * @param {city, country} 
   * @returns searchResultObj: SearchResultsProps
   */
  const getWeather = async ({ city, country }: SearchFormDataProps) => {

    const cityParams = `${city ? city : ''}`;
    const countryParams = `${country ? ',' + country : ''}`;
    const searchParams = `${cityParams}${countryParams ? countryParams : ''}`;
    const url = ApiConstants.OPENWEATHER_ENDPOINT_URL_GET_BYCITY + searchParams + ApiConstants.OPENWEATHER_ENDPOINT_URL_UNITS + ApiConstants.OPENWEATHER_ENDPOINT_URL_APPID;

    try {
      const response = await fetch(url);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="searchWeatherForm">
      {/* Start of Search Weather Form */}
      <form className="flex flex-col w-full px-16" >
        <div className="pt-2 flex flex-col justify-evenly md:flex-row">
          <div className="min-w-40vw w-full px-2 mt-2">

            <label className="text-lg" htmlFor='name'>City:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              type='text'
              id='city'
              placeholder='Which City?'
              {...register('city', {
                required: true
              })}
            />
            {errors?.city?.type === "required" && (
              <div className="mt-2 text-xs text-red-600">
                <p>This field is required</p>
              </div>
            )}
          </div>
          <div className="min-w-40vw w-full px-2 mt-2">

            <label className="text-lg" htmlFor='name'>Country:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              type='text'
              id='country'
              placeholder='Which Country?'
              {...register('country',)}
            />
            {/* {errors?.country?.type === "required" && (
               <div className="mt-2 text-xs text-red-600">
                 <p>This field is required</p>
               </div>
             )} */}
          </div>
        </div>
        <div className="pt-8 flex flex-col justify-center md:flex-row">
          <div className="min-w-25vw px-8">
            <button
              className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-1 w-full rounded-lg"
              onClick={onSubmitSearch}
            >Search</button>
          </div>
          <div className="min-w-25vw px-8">
            <button
              className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-1 w-full rounded-lg"
              onClick={onClearSearchForm}
            >Clear</button>
          </div>
        </div>
      </form>
      {/* End of Search Weather Form */}
    </div>
  )
}

export default SearchWeatherForm;