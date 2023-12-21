import "./moviecard.css";

export default function Moviecard(props) {
  return (
    <div
      className="movie-card"
      style={{
        backgroundImage: `linear-gradient(to right, #050000 60%, transparent), url(${props.backdrop})`,
      }}
    >
      <div className="movieDetails">
        <div className="upperSection">
          <div className="poster">
            <img src={props.poster} alt="" />
          </div>
          <div className="details">
            <h2 className="title">{props.title}</h2>
            <div className="release">
            <p className="year">
              {props.year}, <span className="director">{props.director}</span>
            </p>
            </div>
            <div className="otherDetails">
              <span className="time">{props.runtime} min </span>
              <span className="genre">
                {props.genre.map((item, idx) => {
                  if (idx === 0) {
                    return <span>{item.name} </span>;
                  } else {
                    return <span>, {item.name}</span>;
                  }
                })}
              </span>
            </div>
          </div>
        </div>
        <p className="description">{props.overview}</p>
        <div className="icons">
          <i class="fa-solid fa-share-nodes"></i>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-message"></i>
        </div>
      </div>
    </div>
  );
}
