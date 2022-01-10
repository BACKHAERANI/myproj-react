import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Blog from '../Blog';

function BlogList() {
  const [blogList, setBlogList] = useState([]);

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

  const handleChangedDetail = () => {
    console.log('click');
  };

  return (
    <div>
      <h2>Blog List</h2>
      <div>
        {blogList.map((bloglist) => (
          <Blog
            key={bloglist.id}
            blog={bloglist}
            handleChangedDetail={handleChangedDetail}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
