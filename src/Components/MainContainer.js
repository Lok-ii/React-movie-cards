import Moviecard from "./Moviecard";
import "./maincontainer.css";
import data from "../data.json";

export default function MainContainer(){
    return(
        <div className="maincontainer">
            {data.map((ele)=>{
                return <Moviecard title={ele.title} year={ele.release_date} director={ele.director} overview={ele.overview} genre={ele.genres} backdrop={ele.backdrop_path} poster={ele.poster_path} runtime={ele.runtime} />
            })}
        </div>
    );
}