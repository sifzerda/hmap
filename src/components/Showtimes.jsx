import { useState, useEffect } from 'react';
import axios from 'axios';

const Showtimes = () => {
  const [cinemas, setCinemas] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState('');
  const [movies, setMovies] = useState([]);
  const [loadingCinemas, setLoadingCinemas] = useState(false);
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [error, setError] = useState(null);

  // Fetch cinemas in Melbourne
  useEffect(() => {
    const fetchCinemas = async () => {
      setLoadingCinemas(true);
      setError(null);

      const API_KEY = '8c35557e5696d4a2ed4285c5c886b15070f80a21aa2460d33dc83a0e91721ab7';

      try {
        const response = await axios.get('/serpapi/search.json', {
          params: {
            engine: 'google',
            q: 'cinemas in Melbourne',
            location: 'Melbourne, Australia',
            api_key: API_KEY
          }
        });

        const cinemasData = response.data?.organic_results || [];
        console.log('Cinemas:', cinemasData); // Log cinemas data
        setCinemas(cinemasData.map(cinema => cinema.title) || []);
      } catch (error) {
        console.error('Error fetching cinemas:', error);
        setError(error.message);
      } finally {
        setLoadingCinemas(false);
      }
    };

    fetchCinemas();
  }, []);

  // Fetch now showing movies for the selected cinema
  const fetchMovies = async () => {
    setLoadingMovies(true);
    setError(null);

    const API_KEY = '8c35557e5696d4a2ed4285c5c886b15070f80a21aa2460d33dc83a0e91721ab7';
    const location = 'Melbourne, Australia';

    try {
      const response = await axios.get('https://serpapi.com/search.json', {
        params: {
          engine: 'google',
          q: `movies now showing at ${selectedCinema}`,
          location,
          api_key: API_KEY
        }
      });

      console.log('Response from SerpApi:', response.data); // Log the response data
      const moviesData = response.data?.organic_results || [];
      console.log('Movies:', moviesData); // Log movies data
      setMovies(moviesData.map(movie => movie.title) || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoadingMovies(false);
    }
  };

  // Handle cinema input change
  const handleCinemaChange = (event) => {
    setSelectedCinema(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchMovies();
  };

  return (
    <div>
      <h1>Movie Showtimes in Melbourne</h1>
      <input
        type="text"
        placeholder="Enter a cinema"
        value={selectedCinema}
        onChange={handleCinemaChange}
      />
      <button type="submit" onClick={handleSubmit} disabled={!selectedCinema || loadingMovies || loadingCinemas}>
        {loadingMovies || loadingCinemas ? 'Loading...' : 'Search'}
      </button>
      {error && <p>Error: {error}</p>}
      {movies.length > 0 && (
        <div>
          <h2>Now Showing at {selectedCinema}</h2>
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Showtimes;