import useAxios from 'axios-hooks';
import { Link } from 'react-router-dom';

function BlogDetail({ postId }) {
  const [{ data: blogList, loading, error }] = useAxios(
    `http://127.0.0.1:8000/blog/api/posts/${postId}`,
  );
  return (
    <div>
      {loading && '로딩 중...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {blogList && (
        <>
          <h3 className="text-2xl my-5">{blogList.title}</h3>
          <div>
            {blogList.content.split(/[\r\n]+/).map((line, index) => (
              <p className="my-3" key={index}>
                {line}
              </p>
            ))}
          </div>
        </>
      )}
      <hr className="my-3" />
      <div className="flex gap-4 mb-10">
        <Link className="hover:text-red-400" to="/blog/">
          목록
        </Link>
        <Link className="hover:text-blue-400" to={`/blog/${postId}/edit/`}>
          수정
        </Link>
      </div>
    </div>
  );
}

export default BlogDetail;
