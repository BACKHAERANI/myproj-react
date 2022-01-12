import { useParams } from 'react-router-dom';
import BlogDetail from 'blog/compoents/blog/BlogDetail';

function PageBlogDetail() {
  const { postId } = useParams();

  return (
    <div>
      <h2>나의 블로그#{postId}</h2>
      <BlogDetail postId={postId} />
    </div>
  );
}
export default PageBlogDetail;
