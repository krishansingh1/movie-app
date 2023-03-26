import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITES, SHOW_FAVOURITES } from "../actions";

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false,
}

export function movies(state = initialMoviesState, action) {
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies,
            };
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites],
            };
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(movie =>
                movie.Title !== action.movie.Title
            )
            return {
                ...state,
                favourites: filteredArray,
            };
        case SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val,
            };
        default:
            return state;
    }
}


const initialSearchState = {
    results: {},
}

export function search(state = initialSearchState, action) {
    return state;
}

const intialRootState = {
    movies: initialMoviesState,
    search: initialSearchState,
}

export default function rootReducer(state = intialRootState, action) {
    return {
        movies: movies(state, action),
        search: search(state, action),
    }
}