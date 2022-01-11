import BlogForm from '../compoents/blog/BlogForm';
import useFieldValues from 'components/hooks/useFieldValues';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function PageBlogForm() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorMessages, setErrorMessages] = useState({});
  const { fieldValues, handleChange, clearFieldValues, setFieldValues } =
    useFieldValues({
      title: '',
      content: '',
    });
  //새로운 리뷰등록
  const saveBlog = async () => {
    setLoading(true);
    setError(null);
    const url = !postId
      ? 'http://127.0.0.1:8000/blog/api/posts/'
      : `http://127.0.0.1:8000/blog/api/posts/${postId}/`;

    try {
      if (!postId) {
        const response = await Axios.post(url, fieldValues);
        console.group('saveBlog');
        console.log(response.data);
        console.groupEnd();
      } else {
        await Axios.put(url, fieldValues);
      }
      navigate('/blog/');
    } catch (e) {
      setError(e);
      setErrorMessages(e.response.data);
    }
    setLoading(false);
  };

  // 수정
  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      const url = `http://127.0.0.1:8000/blog/api/posts/${postId}/`;
      try {
        const response = await Axios.get(url);
        setFieldValues(response.data);
      } catch (e) {
        setError(e);
        setErrorMessages(e.response.data);
      }
      setLoading(false);
    };
    if (postId) fetchBlog();
    else clearFieldValues();
  }, [postId, setFieldValues, clearFieldValues]);

  return (
    <div>
      <h2>Blog Form {postId ? '수정' : '생성'}</h2>
      <BlogForm
        fieldValues={fieldValues}
        handleChange={handleChange}
        handleSubmit={() => saveBlog()}
        errorMessages={errorMessages}
      />
    </div>
  );
}

export default PageBlogForm;
