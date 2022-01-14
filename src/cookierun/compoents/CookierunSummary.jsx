import { Link } from 'react-router-dom';

function CookierunSummary({ character }) {
  return (
    <div>
      {character.photo && (
        <img
          src={character.photo}
          alt={character.name}
          className="w-5 h-5 mr-1 inline"
        />
      )}
      <Link to={`/cookierun/${character.id}/`}>{character.name}</Link>
    </div>
  );
}

export default CookierunSummary;
