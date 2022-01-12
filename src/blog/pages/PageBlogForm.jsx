import BlogForm from '../compoents/blog/BlogForm';
import { useNavigate, useParams } from 'react-router-dom';

function PageBlogForm() {
  const navigate = useNavigate();
  const { postId } = useParams();

  return (
    <BlogForm
      postId={postId}
      handleDidSave={(savedPost) => navigate(`/blog/${savedPost.id}/`)}
    />
  );
}

export default PageBlogForm;
