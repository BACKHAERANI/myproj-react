import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Blog from '../Blog';
import { API_HOST } from 'Constants';

function BlogList() {
  const [blogList, setBlogList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    const url = `${API_HOST}/blog/api/posts/`;

    Axios.get(url)
      .then(({ data }) => {
        console.group('정상응답');
        console.log(data);
        console.groupEnd();
        setBlogList(data);
      })
      .catch((error) => {
        console.group('에러응답');
        console.log(error);
        console.groupEnd();
      });
  };

  //디테일 페이지로 이동
  const handleChangedDetail = (post) => {
    console.log('click');
    return navigate(`/blog/${post.id}/`);
  };

  //삭제
  const deleteBlog = (deletingBlog) => {
    const { id: deletingblogID } = deletingBlog;
    const url = `${API_HOST}/blog/api/posts/${deletingblogID}/`;

    Axios.delete(url)
      .then(() => {
        console.log('삭제성공');
        // 삭제된 항목만 상탯값에서 제거
        setBlogList((prevReviewList) =>
          prevReviewList.filter((post) => post.id !== deletingblogID),
        );
      })
      .catch((error) => {
        console.group('에러응답');
        console.log(error);
        console.groupEnd();
      });
  };

  return (
    <div>
      <h2>Blog List</h2>
      <button className="bg-pink-300" onClick={() => navigate('/blog/new/')}>
        New!포스팅
      </button>
      <div>
        {blogList.map((bloglist) => (
          <Blog
            key={bloglist.id}
            blog={bloglist}
            handleChangedDetail={() => {
              handleChangedDetail(bloglist);
            }}
            handleDelete={() => {
              deleteBlog(bloglist);
            }}
            handleEdit={() => navigate(`/blog/${bloglist.id}/edit`)}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
