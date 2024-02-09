'use client'
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <h1>Star Wars Films</h1>
      <ul>
        {films.map((film) => (
          <li key={film.episode_id}>
            <button onClick={() => router.push(`/films/${film.episode_id}`)}>
              {film.title}
            </button>
          </li>
        ))}
      </ul>

      <style jsx>{`
        div {
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
        
        ul {
          list-style-type: none;
          padding: 0;
        }
        
        li {
          margin-bottom: 10px;
          margin-bottom: 20px;
          align-items: center;
        }
        
        button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 25px 25px 25px 25px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
          text-align: center;
          width: 100vw;
          box-sizing: border-box;
        }
        
        button:hover {
          background-color: #0056b3;
        }
      `}</style>

    </div>
  );
}

const films = [
  { episode_id: 1, title: 'A New Hope' },
  { episode_id: 2, title: 'The Empire Strikes Back' },
  { episode_id: 3, title: 'Return of the Jedi' },
  { episode_id: 4, title: 'The Phantom Menace' },
  { episode_id: 5, title: 'Attack of the Clones' },
  { episode_id: 6, title: 'Revenge of the Sith' },
];