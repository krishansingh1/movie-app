import Navbar from "./Navbar";
import Moviecard from "./Moviecard";
import React from "react";
import { data } from "../data";
import { addMovies, showFavourites } from "../actions";
import { connect } from "..";

class App extends React.Component {
    componentDidMount() {

        this.props.dispatch(addMovies(data))
    }

    isMovieFavourite = (movie) => {
        const { movies } = this.props;

        const index = movies.favourites.indexOf(movie);

        if (index !== -1) {
            return true;
        }

        return false;
    }

    onChangeTab = (val) => {
        this.props.dispatch(showFavourites(val));
    }

    render() {
        const { movies, search } = this.props
        const { list, favourites, showFavourites } = movies;
        console.log(this.props);

        const displayMovies = showFavourites ? favourites : list;


        return (
            <>
                <Navbar search={search} />
                <div className="main">
                    <div className="tabs">
                        <div className={`tab ${showFavourites ? " " : "active-tabs"}`} onClick={() => this.onChangeTab(false)}>Movie</div>
                        <div className={`tab ${showFavourites ? "active-tabs" : ""}`} onClick={() => this.onChangeTab(true)}>Favourite</div>
                    </div>
                    <div className="list">
                        {displayMovies.map((movie, index) => {
                            return <Moviecard movie={movie} key={index} dispatch={this.props.dispatch} isFavourite={this.isMovieFavourite(movie)} />;
                        })}
                    </div>
                </div>
                {displayMovies.length === 0 ? <div className="no-movies">No movies to display!</div> : null}
            </>
        );

    }
}

// class AppWrapper extends React.Component {
//     render() {
//         return (
//             <StoreContext.Consumer>
//                 {(store) => <App store={store} />}
//             </StoreContext.Consumer>
//         )
//     }
// }

function mapStateToProps(state) {
    return {
        movies: state.movies,
        search: state.search,
    }
}

const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;