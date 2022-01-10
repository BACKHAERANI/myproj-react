import Axios from 'axios';
import { useEffect, useState } from 'react';

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
  return (
    <div>
      <h2>Blog List</h2>
      <div>
        {blogList.map((list) => (
          <div
            className="bg-purple-100 border-2 border-purple-300 my-1 p-1"
            key={list.id}
          >
            {list.title}
            <hr className="border-blue-300" />
            {list.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
