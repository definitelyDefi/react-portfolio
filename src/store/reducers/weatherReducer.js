const SET_WEATHER_FETCH = "SET_WEATHER_FETCH";
const SEARCH_WEATHER = "SEARCH_WEATHER";
const WEATHER_ERROR = "WEATHER_ERROR";

const defaultStore = {
  weather: [],
  city: null,
  country: null,
  isWeatherError: false,
  isFetching: true,
};

export let weatherReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case SET_WEATHER_FETCH:
      return { ...state, isFetching: true };

    case SEARCH_WEATHER:
      return {
        ...state,
        weather: action.weather,
        country: action.country,
        isFetching: false,
        isWeatherError: false,
      };

    case WEATHER_ERROR:
      return { ...state, weather: [], isWeatherError: true };

    default:
      return state;
  }
};

export const setWeatherFetch = () => ({ type: SET_WEATHER_FETCH });

export const searchWeather = (payload) => ({
  type: SEARCH_WEATHER,
  weather: payload.weather,
  country: payload.country,
});

export const setWeatherError = () => ({ type: WEATHER_ERROR });
