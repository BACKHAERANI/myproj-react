import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Blog from '../Blog';

function BlogList() {
  const [blogList, setBlogList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    const url = 'http://127.0.0.1:8000/blog/api/posts/';

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

  const handleChangedDetail = (post) => {
    console.log('click');
    return navigate(`/blog/${post.id}/`);
  };

  const deleteBlog = (deletingBlog) => {
    const { id: deletingblogID } = deletingBlog;
    const url = `http://127.0.0.1:8000/blog/api/posts/${deletingblogID}/`;

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
          />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
