import React from "react";
import axiosInstance from "./axios";
import requests from "./requests";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const request = await axiosInstance.get(requests.fetchNetflixOriginals);

      const randomNumber = Math.floor(
        Math.random() * request.data.results.length - 1
      );

      setMovie(request.data.results[randomNumber]);

      return request;
    }
    fetchData();
  }, []);

  const styles = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header className="banner" style={styles}>
      <div className="banner_content">
        <h1 className="banner_title">{movie?.title || movie?.name}</h1>
        <div className="banner_button_container">
          <button className="banner_buttons">Play</button>
          <button className="banner_buttons">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_bottom"></div>
    </header>
  );
}

export default Banner;
