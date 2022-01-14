import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import { useEffect } from 'react';
import CookierunSummary from './CookierunSummary';

function CookierunList() {
  const [{ data: character, loading, error }, refetch] = useApiAxios(
    '/cookierun/api/characters/',
    { manual: true },
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && '쿠키가 달려가고 있어요!'}
      {error && '쿠키가...다 타버렸어...요...'}
      {character &&
        character.map((char) => (
          <div>
            {''}
            <CookierunSummary character={char} />
          </div>
        ))}
      <DebugStates char={character} error={error} loading={loading} />
    </div>
  );
}

export default CookierunList;
