import { ADD_MOVIES, ADD_FAVOURITE } from "../actions";

const initialMoviesState = {
    list: [],
    favourites: [],
}

export default function movies(state = initialMoviesState, action) {
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
            const filteredArray = state.favourites.filter((movie) => {
                movie.Title != action.movie.Title
            })
            return {
                ...state,
                favourites: filteredArray,
            };
        default:
            return state;
    }
}
