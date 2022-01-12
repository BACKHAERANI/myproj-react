import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import ArticleSummary from './ArticleSummary';

function ArticleList() {
  const [{ data: articleList, loading, error }, refetch] =
    useApiAxios('/news/api/article/');
  return (
    <div>
      <h3>뉴스 기사 목록</h3>
      {loading && '로딩 중...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {articleList &&
        articleList.map((article) => <ArticleSummary article={article} />)}

      <DebugStates articleList={articleList} loading={loading} error={error} />
    </div>
  );
}
export default ArticleList;
