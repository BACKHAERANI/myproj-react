import { useApiAxios } from 'api/base';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LoadingIndicator from 'news/compoents/LoadingIndicator';

function BlogDetail({ postId }) {
  const navigate = useNavigate();

  const [{ data: blogList, loading, error }, refetch] = useApiAxios(
    `/blog/api/posts/${postId}/`,
  );

  const [{ loading: deleteLoading, error: deleteError }, deleteArticle] =
    useApiAxios(
      {
        url: `/blog/api/posts/${postId}/`,
        method: 'DELETE',
      },
      { manual: true },
    );

  const handleDelete = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      // REST API 에서는 DELETE 요청에 대한 응답이 없습니다.
      deleteArticle().then(() => {
        navigate('/blog/');
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
      {blogList && (
        <>
          <h3 className="text-2xl text-center h-10 p-1 my-5 border border-gray-500 border-dashed rounded-md ">
            {blogList.title}
          </h3>
          <div className=" border border-gray-500 border-dashed rounded-md">
            {blogList.content.split(/[\r\n]+/).map((line, index) => (
              <p className="my-3" key={index}>
                {line}
              </p>
            ))}
          </div>
        </>
      )}
      <hr className="my-3" />
      <div className="flex gap-4 mt-3 mb-10">
        <Link
          to="/blog/"
          className="border-2 border-orange-400 rounded-lg hover:bg-orange-400"
        >
          목록으로
        </Link>
        <Link
          to={`/blog/${postId}/edit/`}
          className="border-2 border-blue-500 rounded-lg hover:bg-blue-500"
        >
          수정하기
        </Link>
        <button
          disabled={deleteLoading}
          onClick={handleDelete}
          className="border-2 border-red-400 rounded-lg  hover:bg-red-400"
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}

export default BlogDetail;
