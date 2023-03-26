import React from "react";
import { data } from '../data';
import { addMovieToList } from '../actions';

class Navbar extends React.Component {

    constructor(props) {

    }
    render() {
        return (
            <div className="nav">
                <div className="search-container">
                    <input />
                    <button id="search-btn">Search</button>
                </div>
            </div>
        );
    }
}

export default Navbar;
