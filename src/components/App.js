import Navbar from "./Navbar";
import Moviecard from "./Moviecard";


export default function App(props) {
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
