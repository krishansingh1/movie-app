import Navbar from "./Navbar";
import Moviecard from "./Moviecard";
import { useEffect } from "react";
import { data } from '../data';


export default function App(props) {
    useEffect(() => {
        props.store.dispatch({
            type: "ADD_MOVIES",
            movies: data,
        })
        console.log(props.store.getState());
    }, [props])

    const movies = props.store.getState();

    return (
        <>
            <Navbar />
            <div className="main">
                <div className="tabs">
                    <div className="tab">Movie</div>
                    <div className="tab">Favourite</div>
                </div>
                <div className="list">
                    {movies.map((movie, index) => {
                        return <Moviecard movie={movie} key={index} />;
                    })}
                </div>
            </div>
        </>
    );
}
