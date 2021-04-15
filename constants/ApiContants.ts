const ApiConstants = {
  OPENWEATHER_ENDPOINT_URL_GET_BYCITY: `https://api.openweathermap.org/data/2.5/weather?q=`,
  OPENWEATHER_ENDPOINT_URL_GET_BYID: `https://api.openweathermap.org/data/2.5/weather?id=`,
  OPENWEATHER_ENDPOINT_URL_APPID: `&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`,
  OPENWEATHER_ENDPOINT_URL_UNITS: `&units=metric`,
};

export { ApiConstants };

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
// api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
// api.openweathermap.org/data/2.5/weather?id=2172797&appid={API key}
