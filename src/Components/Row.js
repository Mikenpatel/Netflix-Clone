import React from "react";
import axiosInstance from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, is_large_Row }) => {
  const BASE_IMG_PATH = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      const response = await axiosInstance.get(fetchUrl);

      setMovies(response.data.results);

      return response;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "").then((response) => {
        const urlParams = new URLSearchParams(new URL(response).search);
        setTrailerUrl(urlParams.get("v"));
      });
    }
  };

  // console.log(movies);

  const imagePosters = movies.map((movie) => (
    <img
      src={`${BASE_IMG_PATH}${
        is_large_Row ? movie.poster_path : movie.backdrop_path
      }`}
      key={movie.id}
      className={`row_images ${is_large_Row && "large_row"}`}
      onClick={() => handleClick(movie)}
    />
  ));

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_container">{imagePosters}</div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
