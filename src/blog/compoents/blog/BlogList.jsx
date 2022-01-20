import DebugStates from 'components/DebugStates';
import H3 from 'news/compoents/H3';
import Blog from '../Blog';
import { useEffect } from 'react';
import { useApiAxios } from 'api/base';

function BlogList() {
  const [{ data: blogList, loading, error }, refetch] =
    useApiAxios('/blog/api/posts/');

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <H3>💙Blog List💙</H3>
      {loading && '로딩 중...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {blogList && blogList.map((posts) => <Blog posts={posts} />)}

      <DebugStates blogList={blogList} loading={loading} error={error} />
    </div>
  );
}

export default BlogList;
