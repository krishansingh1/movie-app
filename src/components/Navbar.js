import React from "react";
import { data } from '../data';
import { addMovieToList } from '../actions';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearchResults: true,
        }
    }

    handleAddToMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults: false,
        })
    }

    handleSearch = () => {

    }

    render() {
        const { showSearchResults } = this.state;
        return (
            <div className="nav">
                <div className="search-container">
                    <input />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                </div>
            </div>
        );
    }
}

export default Navbar;
