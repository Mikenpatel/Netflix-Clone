import "./App.css";
import requests from "./Components/requests";
import Row from "./Components/Row";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        is_large_Row
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Chomeday" fetchUrl={requests.fetchChomeday} />
      <Row title="Horror" fetchUrl={requests.fetchHorror} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Romance" fetchUrl={requests.fetchRomance} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
