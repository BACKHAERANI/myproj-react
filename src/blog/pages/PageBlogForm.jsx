import BlogForm from '../compoents/blog/BlogForm';
import useFieldValues from 'components/hooks/useFieldValues';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';

function PageBlogForm() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { fieldValues, handleChange, clearFieldValues, setFieldValues } =
    useFieldValues({
      title: '',
      content: '',
    });

  const saveBlog = async () => {
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
      console.error(e);
    }
  };

  return (
    <div>
      <h2>Blog Form</h2>
      <BlogForm
        fieldValues={fieldValues}
        handleChange={handleChange}
        handleSubmit={() => saveBlog()}
      />
    </div>
  );
}

export default PageBlogForm;
