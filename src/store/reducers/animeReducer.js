
const SET_SEARCH_FETCH = 'SET_SEARCH_FETCH'
const SET_VIEW_FETCH = 'SET_VIEW_FETCH'
const SEARCH_ANIME = 'SEARCH_ANIME'
const SET_CURRENT_ANIME = 'SET_CURRENT_ANIME'
const RESET_ANIME = 'RESET_ANIME'
const SET_GENRES = 'SET_GENRES'

const defaultStore = {
    items: [],
    currentAnime: [],
    isError: false,
    isFetching: true,
    genres: []
    
}

export let animeReducer = (state = defaultStore, action) =>{

switch (action.type){
    
    case SET_SEARCH_FETCH:
        return {...state, isFetching: true}
    
    case SET_VIEW_FETCH:
        return {...state, currentAnime:{isFetching: true}}
        
    case SEARCH_ANIME:
        return{...state, items: action.items, isFetching: false}
        
    case SET_CURRENT_ANIME:
        return{...state, currentAnime: 
            {   canonicalTitle: action.canonicalTitle,
                description: action.description,
                title_en: action.title_en,
                title_jp: action.title_jp,
                startDate: action.startDate,
                endDate: action.endDate,
                popularityRank: action.popularityRank,
                ageRating: action.ageRating,
                showType: action.showType,
                status: action.status,
                posterImage: action.posterImage,
                episodeCount: action.episodeCount,
                totalLength: action.totalLength,
                coverImage: action.coverImage,
                youtubeVideoId: action.youtubeVideoId,
                isFetching: false
            
            }
        }        
    case RESET_ANIME:
        return({...state, items:[]})
    
    case SET_GENRES:
        return({...state, genres: action.genres})

    default:
        return state

}
}

export const reset_anime = () =>(
    {type:RESET_ANIME}
)

export const setGenres = (payload) =>(
    {type:SET_GENRES, genres: payload}
)

export const setSearchFetch = () =>(
    {type:SET_SEARCH_FETCH}
)

export const setViewFetch = () =>(
    {type:SET_VIEW_FETCH}
)

export const setAnimes = (payload) =>(
    {type:SEARCH_ANIME, items: payload}
)

export const setCurrAnime = (payload) =>(
    {type:SET_CURRENT_ANIME, 
        canonicalTitle: payload.canonicalTitle,
        description: payload.description,
        title_en: payload.en_jp,
        title_jp: payload.ja_jp,
        startDate: payload.startDate,
        endDate: payload.endDate,
        popularityRank: payload.popularityRank,
        ageRating: payload.ageRating,
        showType: payload.showType,
        status: payload.status,
        posterImage: payload.posterImage,
        episodeCount: payload.episodeCount,
        totalLength:  payload.totalLength,
        coverImage: payload.coverImage,
        youtubeVideoId: payload.youtubeVideoId}
)





