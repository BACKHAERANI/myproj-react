import { Link } from 'react-router-dom';

function CookierunSummary({ character }) {
  return (
    <div className="border boreder-gray-300 rounded-lg mb-3 hover:-translate-y-2 duration-300">
      {character.photo && (
        <img
          src={character.photo}
          alt={character.name}
          className="w-10 h-10 mr-1  inline"
        />
      )}
      <Link to={`/cookierun/${character.id}/`}>{character.name}</Link>
    </div>
  );
}

export default CookierunSummary;
