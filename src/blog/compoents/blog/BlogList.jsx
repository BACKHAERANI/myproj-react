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
      <H3>๐Blog List๐</H3>
      {loading && '๋ก๋ฉ ์ค...'}
      {error && '๋ก๋ฉ ์ค ์๋ฌ๊ฐ ๋ฐ์ํ์ต๋๋ค.'}
      {blogList && blogList.map((posts) => <Blog posts={posts} />)}

      <DebugStates blogList={blogList} loading={loading} error={error} />
    </div>
  );
}

export default BlogList;
