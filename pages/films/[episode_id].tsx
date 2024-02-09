import { useRouter } from 'next/router';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { fetcher } from '../../library/fetcher';

interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
}

interface Error {
  message?: string;
}

const FilmPage: React.FC = () => {
  const router = useRouter();
  const { episode_id } = router.query;

  const { data, isLoading, error } = useQuery<Film, Error>(
    `film-${episode_id}`,
    () => fetcher(`https://swapi.dev/api/films/${episode_id}`)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error && error.message) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <style jsx>{`
        .container {
          background-color: #f0f0f0;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h1 {
          color: #333;
          text-align: center;
          padding-bottom: 35px;
        }

        p {
          margin-bottom: 10px;
        }

        button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 25px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
          text-align: center;
          display: block;
          margin: 0 auto;
        }

        button:hover {
          background-color: #0056b3;
        }
      `}</style>

      <div className="container">
        <h1>{data.title}</h1>
        <p>{data.opening_crawl}</p>
        <p>Director: {data.director}</p>
        <p>Producer: {data.producer}</p>
        <p>Release Date: {data.release_date}</p>
        <button onClick={() => router.push('/')}>Back to Films</button>
      </div>
    </div>
  );
};

const queryClient = new QueryClient();

const FilmPageWithQueryClientProvider: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FilmPage />
    </QueryClientProvider>
  );
};

export default FilmPageWithQueryClientProvider;
