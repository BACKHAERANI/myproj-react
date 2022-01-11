import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_HOST } from 'Constants';
import Axios from 'axios';

function BlogDetail({}) {
  const { postId } = useParams();
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const url = `${API_HOST}/blog/api/posts/${postId}/`;

    Axios.get(url)
      .then(({ data }) => {
        setBlogList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [postId]);

  return (
    <div>
      <h2 className="my-1 p-4">
        [{blogList.id}] {blogList.title}
      </h2>
      <div className="bg-yellow-100 border-2 border-purple-300 my-1 p-1">
        {blogList.content}
      </div>
      <br />
      <img src="https://placeimg.com/640/480/animals" alt="" />
    </div>
  );
}

export default BlogDetail;
