//action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SHOW_FAVOURITES = "SHOW_FAVOURITES";

//action creators
export function addMovies(movies) {
    return {
        type: "ADD_MOVIES",
        movies,
    }
}

export function addFavourite(movie) {
    return {
        type: "ADD_FAVOURITE",
        movie,
    }
}

export function removeFavourite(movie) {
    return {
        type: "REMOVE_FROM_FAVOURITES",
        movie,
    }
}

export function showFavourites(val) {
    return {
        type: "REMOVE_FROM_FAVOURITES",
        val,
    }
}
