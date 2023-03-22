import Navbar from "./Navbar";
import Moviecard from "./Moviecard";
import { data } from "../data.js";

export default function App() {
    return (
        <>
            <Navbar />
            <div className="main">
                <div className="tabs">
                    <div className="tab">Movie</div>
                    <div className="tab">Favourite</div>
                </div>
                <div className="list">
                    {data.map((movie) => {
                        return <Moviecard movie={movie} />;
                    })}
                </div>
            </div>
        </>
    );
}
