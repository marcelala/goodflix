const API_KEY = "af4d66ef9311891007749a9dab0713b3";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&with_watch_providers=8`,
  fetchSeries: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&with_watch_providers=8`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&with_watch_providers=8`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&with_watch_providers=8,`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&with_watch_providers=8`,
  searchMovie: `/search/movie?api_key=${API_KEY}&query={{query}}`,
  fetchMovieGenres: `genre/movie/list?api_key=${API_KEY}`,
  fetchMovieVideos: `/movie/{{movie_id}}/videos?api_key=${API_KEY}`,
  fetchMovieDetails: `/movie/{{movie_id}}?api_key=${API_KEY}`,
  fetchMovieRecommendations: `/movie/{{movie_id}}/recommendations?api_key=${API_KEY}`,
  fetchMovieCredits: `/movie/{{movie_id}}/credits?api_key=${API_KEY}`,
  searchTV: `/search/tv?api_key=${API_KEY}&query={{query}}`,
  fetchTVGenres: `genre/tv/list?api_key=${API_KEY}`,
  fetchTVVideos: `/tv/{{tv_id}}/videos?api_key=${API_KEY}`,
  fetchTVDetails: `/tv/{{tv_id}}?api_key=${API_KEY}`,
  fetchTVAggregateCredits: `/tv/{{tv_id}}/aggregate_credits?api_key=${API_KEY}`,
  fetchTVRecommendations: `/tv/{{tv_id}}/recommendations?api_key=${API_KEY}`,
  fetchTVSeason: `/tv/{{tv_id}}/season/{{season_number}}?api_key=${API_KEY}`,
};

export default requests;
