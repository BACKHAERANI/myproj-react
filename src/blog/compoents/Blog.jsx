import { Link } from 'react-router-dom';

function Blog({ posts }) {
  return (
    <div className="p-2 mr-2 bg-white border-blue-400 h-10 hover:border-b-4 hover:text-blue-500 ">
      <Link to={`/blog/${posts.id}/`}>{posts.title}</Link>
    </div>
  );
}

export default Blog;
