import { useApiAxios } from 'api/base';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LoadingIndicator from './LoadingIndicator';
import { useAuth } from 'contexts/AuthContext';

function ArticleDetail({ articleId }) {
  const navigate = useNavigate();
  const { auth } = useAuth();

  const [{ data: article, loading, error }, refetch] = useApiAxios(
    {
      url: `/news/api/article/${articleId}/`,
      method: 'GET',
      headers: { Authorization: `Bearer ${auth.access}` },
    },
    { manual: true },
  );

  const [{ loading: deleteLoading, error: deleteError }, deleteArticle] =
    useApiAxios(
      {
        url: `/news/api/article/${articleId}/`,
        method: 'DELETE',
        headers: { Authorization: `Bearer ${auth.access}` },
      },
      { manual: true },
    );

  const handleDelete = () => {
    if (window.confirm('Are you sure?')) {
      // REST API 에서는 DELETE 요청에 대한 응답이 없습니다.
      deleteArticle().then(() => {
        navigate('/news/');
      });
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && <LoadingIndicator />}
      {deleteLoading && <LoadingIndicator>삭제 중 ...</LoadingIndicator>}
      {error &&
        `로딩 중 에러가 발생했습니다. (${error.response.status} ${error.response.statusText})`}
      {deleteError &&
        `삭제 요청 중 에러가 발생했습니다. (${deleteError.response.status} ${deleteError.response.statusText})`}
      {article && (
        <>
          <h3 className="text-2xl my-5">{article.title}</h3>
          <p>by {article.author.username}</p>
          {article.photo && <img src={article.photo} alt={article.title} />}
          <div>
            {article.content.split(/[\r\n]+/).map((line, index) => (
              <p className="my-3" key={index}>
                {line}
              </p>
            ))}
          </div>
        </>
      )}
      <hr className="my-3" />
      <div className="flex gap-4 mt-3 mb-10">
        <Link to="/news/" className="hover:text-red-400">
          목록으로
        </Link>
        <Link to={`/news/${articleId}/edit/`} className="hover:text-red-400">
          수정하기
        </Link>
        <button
          disabled={deleteLoading}
          onClick={handleDelete}
          className="hover:text-red-400"
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}

export default ArticleDetail;
