import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Blog from '../Blog';
import { axiosInstance } from 'api/base';
import H2 from 'news/compoents/H2';
import Button from 'news/compoents/Button';

function BlogList() {
  const [blogList, setBlogList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    const url = `/blog/api/posts/`;

    axiosInstance
      .get(url)
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
    const url = `/blog/api/posts/${deletingblogID}/`;

    axiosInstance
      .delete(url)
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
      <H2>Blog List</H2>
      <Button className="button" onClick={() => navigate('/blog/new/')}>
        New!포스팅
      </Button>
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
