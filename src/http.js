import {
  setSearchFetch,
  setAnimes,
  setGenres,
} from "./store/reducers/animeReducer";
import { setViewFetch, setCurrAnime } from "./store/reducers/animeReducer";
import {
  searchWeather,
  setWeatherError,
  setWeatherFetch,
} from "./store/reducers/weatherReducer";
import { reset_anime } from "./store/reducers/animeReducer";

export const weatherApiCallThunk = (query_city, API_KEY) => async (
  dispatch
) => {
  dispatch(setWeatherFetch());
  await fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${query_city}&key=${API_KEY}`
  )
    .then((res) => res.json())
    .then((result) => {
      dispatch(
        searchWeather({ weather: result.data, country: result.country_code })
      );
    })
    .catch(() => dispatch(setWeatherError()));
};

export const fetchAnimeThunk = (animeName) => async (dispatch) => {
  dispatch(reset_anime());
  dispatch(setSearchFetch());
  await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${animeName}`)
    .then((res) => res.json())
    .then((result) => dispatch(setAnimes(result.data)));
};

export const searchAnimeThunk = (id) => async (dispatch) => {
  dispatch(setViewFetch());
  await fetch(`https://kitsu.io/api/edge/anime/${id}`)
    .then((res) => res.json())
    .then((result) =>
      dispatch(
        setCurrAnime({
          canonicalTitle: result.data.attributes.canonicalTitle,
          description: result.data.attributes.description,
          en_jp: result.data.attributes.titles.en_jp,
          ja_jp: result.data.attributes.titles.ja_jp,
          startDate: result.data.attributes.startDate,
          endDate: result.data.attributes.endDate,
          popularityRank: result.data.attributes.popularityRank,
          ageRating: result.data.attributes.ageRating,
          showType: result.data.attributes.showType,
          status: result.data.attributes.status,
          posterImage: result.data.attributes.posterImage.large,
          episodeCount: result.data.attributes.episodeCount,
          totalLength: result.data.attributes.totalLength,
          coverImage: result.data.attributes.coverImage.small,
          youtubeVideoId: result.data.attributes.youtubeVideoId,
        })
      )
    );
};

export const fetchGenresThunk = (animeid) => async (dispatch) => {
  dispatch(setSearchFetch());
  await fetch(`https://kitsu.io/api/edge/anime/${animeid}/genres`)
    .then((res) => res.json())
    .then((result) => dispatch(setGenres(result.data)));
};
