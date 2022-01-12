import BlogList from '../compoents/blog/BlogList';
import Button from 'news/compoents/Button';
import { useNavigate } from 'react-router-dom';

function PageBlogList() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="pb-1 text-gray-500 border-b-4 border-blue-500 text-xl">
        Blog
      </h1>
      <BlogList />
      <Button onClick={() => navigate('/blog/new/')}>새 포스팅쓰기</Button>
    </div>
  );
}

export default PageBlogList;
