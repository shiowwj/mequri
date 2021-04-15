import { SearchFormDataProps } from '../constants/Props';
import { ApiConstants } from '../constants/ApiContants';

/**
 * * Fetches WEather date based on city id
 *
 * @param cityID
 * @returns search result from openweather api
 */
const getWeatherByCityId = async (cityID: number) => {
  const cityIDParams = `${cityID ? cityID : ''}`;
  const searchParms = cityIDParams;

  const url =
    ApiConstants.OPENWEATHER_ENDPOINT_URL_GET_BYID +
    searchParms +
    ApiConstants.OPENWEATHER_ENDPOINT_URL_APPID;

  try {
    const response = await fetch(url);
    return response;
  } catch (error) {
    console.error(error);
  }
};

/**
 * * Fetches weather data based on city and or country
 * @param {city, country}
 * @returns search result from openweather api
 */
const getWeatherByCityCountry = async ({
  city,
  country,
}: SearchFormDataProps) => {
  const cityParams = `${city ? city : ''}`;
  const countryParams = `${country ? ',' + country : ''}`;
  const searchParams = `${cityParams}${
    countryParams ? countryParams : ''
  }`;
  const url =
    ApiConstants.OPENWEATHER_ENDPOINT_URL_GET_BYCITY +
    searchParams +
    ApiConstants.OPENWEATHER_ENDPOINT_URL_UNITS +
    ApiConstants.OPENWEATHER_ENDPOINT_URL_APPID;

  try {
    const response = await fetch(url);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getWeatherByCityCountry, getWeatherByCityId };
