import { useApiAxios } from 'api/base';
import LoadingIndicator from 'news/compoents/LoadingIndicator';
import { Link } from 'react-router-dom';

function CookierunDetail({ charId }) {
  const [{ data: character, loading, error }, refetch] = useApiAxios(
    `/cookierun/api/characters/${charId}`,
  );

  const [{ loading: deleteLoading, error: deleteError }, deleteCharacter] =
    useApiAxios({ url: `/cookierun/api/characters/${charId}` });
  return (
    <div>
      {loading && <LoadingIndicator />}
      {deleteLoading && (
        <LoadingIndicator>쿠키가 부서지고 있어요...</LoadingIndicator>
      )}
      {error &&
        `로딩 중 에러가 발생했습니다. (${error.response.status} ${error.response.statusText})`}
      {deleteError &&
        `삭제 요청 중 에러가 발생했습니다.  (${deleteError.response.status} ${deleteError.response.statusText})`}
      {character && (
        <>
          <h2 className="text-2xl text-center h-10 p-1 my-5 border border-orange-500 rounded-md">
            {character.name} ({character.foreign_name})
          </h2>
          <span className="text-lg"> 쿠키 소개 : </span>
          <div className=" border border-orange-500 rounded-md">
            {character.content.split(/[\r\n]+/).map((line, index) => (
              <p className="my-3 mx-4" key={index}>
                {line}
              </p>
            ))}
          </div>
          <span className="text-lg"> 등급 : </span>
          <div className="border border-orange-500 rounded-md">
            <span className="mx-4">{character.rating}_클래스</span>
          </div>
          <span className="text-lg"> 콤비 펫 : </span>
          <div className=" mt- border border-orange-500 rounded-md">
            <span className="mx-4">{character.pet}</span>
          </div>
          <span className="text-lg"> 가격 : </span>
          <div className=" mt- border border-orange-500 rounded-md">
            <span className="mx-4">{character.price} 코인</span>
          </div>
          <img src={character.photo}></img>
          <div className="flex gap-4 mt-3 mb-10">
            <Link
              to="/cookierun/"
              className="border-2 border-orange-400 rounded-lg hover:bg-orange-400"
            >
              목록으로
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CookierunDetail;
