import useAxios from 'axios-hooks';
import DebugStates from 'components/DebugStates';
import H3 from 'news/compoents/H3';
import Blog from '../Blog';

function BlogList() {
  const [{ data: blogList, loading, error }, refetch] = useAxios(
    'http://127.0.0.1:8000/blog/api/posts/',
  );
  return (
    <div>
      <H3>💙Blog List💙</H3>
      {loading && '로딩 중...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {blogList && blogList.map((posts) => <Blog posts={posts} />)}

      <DebugStates blogListt={blogList} loading={loading} error={error} />
    </div>
  );
}

export default BlogList;
