const API_KEY = "af4d66ef9311891007749a9dab0713b3";

/**
 * Big O Notation -1
 *
 * This is over engineering at its finest. Each time the tv/movies producers come up with a new category,
 * we need to recompile the project and publish it in order to get this info.
 *
 * Plus you are using a pagination system that we never requested. I do like when students go the extra mile to learn new stuff.
 * But those features should be added after the minimun features are done and tested. Again is better to have 5 solid features than 10 acceptable ones.
 *
 * A solution for the recompile problem would be:
 * 1. Create a collection folder in firebase where each document correspond to a one of these request categories. Something like:
 * categories/
 *  documentId: "grijeogojeqrgoijqer"
 *    name: "Tredning",
 *    url: "/all/week"
 *  documentId: "vfvjiodfiovrger[pw"
 *    name: "Netflix Originals",
 *    url: "discover/tv"
 *
 * 2. Fetch this list as an array and create the categories on the fly on the frontend.
 */
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
