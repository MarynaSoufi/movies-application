const API_KEY = process.env.REACT_APP_API_KEY;

export default {
  popularMovies : `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  popularTv: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  topRatedTv: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  airingTodayTv: `/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
  allTrending: `/trending/all/day?api_key=${API_KEY}`,
  nowPlaying:  `movie/now_playing?api_key=${API_KEY}&language=en-US&page=2`,
  genresMovie: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  genresTv: `/genre/tv/list?api_key=${API_KEY}&language=en-US`,
  upComingFilms: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=3`,
  topRatedFilms: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`,
  search: `/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
  searchMovies: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
  searchTv: `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
  detail: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US`,
  imageUrl: 'https://image.tmdb.org/t/p/w200',
  posterUrl: 'https://image.tmdb.org/t/p/w400'
}