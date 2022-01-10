import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Axios from 'axios';

function BlogDetail({}) {
  const { postId } = useParams();
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8000/blog/api/posts/${postId}/`;

    Axios.get(url)
      .then(({ data }) => {
        setBlogList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [postId]);

  return (
    <div className="bg-yellow-100 border-2 border-purple-300 my-1 p-1">
      {blogList.content}
    </div>
  );
}

export default BlogDetail;
