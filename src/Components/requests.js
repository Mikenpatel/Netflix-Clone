const API_KEY = "1260ce332288b0d801ffb6260fd9fdbd";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchChomeday: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
