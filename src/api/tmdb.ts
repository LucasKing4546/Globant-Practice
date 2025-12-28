const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const baseUrl = import.meta.env.VITE_TMDB_BASE_URL;

export async function fetchPopularMovies(page: number) {
  const res = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}`)
  if (!res.ok) throw new Error(`Failed to fetch popular movies: ${res.status}`)
  return res.json()
}

export async function fetchMovieById(movie_id: number) {
  const res = await fetch(`${baseUrl}/movie/${movie_id}?api_key=${apiKey}`)
  if (!res.ok) throw new Error(`Failed to fetch movie: ${res.status}`)
  return res.json()
}

export async function searchMovie(query: string, page: number = 1) {
  const res = await fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&page=${page}`)
  if (!res.ok) throw new Error(`Failed to search movies: ${res.status}`)
  return res.json()
}
