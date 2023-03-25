import Navbar from "./Navbar";
import Moviecard from "./Moviecard";
import React from "react";
import { data } from "../data";
import { addMovies } from "../actions";

class App extends React.Component {
    componentDidMount() {
        const { store } = this.props;
        store.subscribe(() => {
            this.forceUpdate();
        })

        store.dispatch(addMovies(data))
    }

    isMovieFavourite = (movie) => {
        const { favourites } = this.props.store.getState();

        const index = favourites.indexOf(movie);

        if (index !== -1) {
            return true;
        }

        return false;
    }

    render() {
        const { list } = this.props.store.getState();
        console.log(this.props.store.getState());
        return (
            <>
                <Navbar />
                <div className="main">
                    <div className="tabs">
                        <div className="tab">Movie</div>
                        <div className="tab">Favourite</div>
                    </div>
                    <div className="list">
                        {list.map((movie, index) => {
                            return <Moviecard movie={movie} key={index} dispatch={this.props.store.dispatch} isFavourite={this.isMovieFavourite(movie)} />;
                        })}
                    </div>
                </div>
            </>
        );
    }
}


export default App;