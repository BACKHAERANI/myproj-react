import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import useAuth from 'components/hooks/useAuth';
import { useEffect } from 'react';
import ArticleSummary from './ArticleSummary';

function ArticleList() {
  const [{ data: articleList, loading, error }, refetch] = useApiAxios(
    '/news/api/article/',
    { manual: true },
  );

  const [auth] = useAuth();

  // 1번 방법
  useEffect(() => {
    if (auth.isLoggedIn) {
    }
    refetch({
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    });
  }, [auth]);

  return (
    <div>
      <h3>뉴스 기사 목록</h3>
      {loading && '로딩 중...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {articleList &&
        articleList.map((article) => (
          <div className="border border-gray-400 mb-4 transition-transform hover:-translate-y-2 duration-300">
            {' '}
            <ArticleSummary article={article} />
          </div>
        ))}

      <DebugStates articleList={articleList} loading={loading} error={error} />
    </div>
  );
}
export default ArticleList;
