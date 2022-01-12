import useAxios from 'axios-hooks';
import { Link } from 'react-router-dom';

function ArticleDetail({ articleId }) {
  const [{ data: article, loading, error }] = useAxios(
    `http://127.0.0.1:8000/news/api/article/${articleId}`,
  );
  return (
    <div>
      {loading && '로딩 중...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {article && (
        <>
          <h3 className="text-2xl my-5">{article.title}</h3>
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
      <div className="flex gap-4 mb-10">
        <Link className="hover:text-red-400" to="/news/">
          목록
        </Link>
        <Link className="hover:text-blue-400" to={`/news/${articleId}/edit/`}>
          수정
        </Link>
      </div>
    </div>
  );
}

export default ArticleDetail;
