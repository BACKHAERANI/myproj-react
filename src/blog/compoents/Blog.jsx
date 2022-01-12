import { Link } from 'react-router-dom';

function Blog({ posts }) {
  return (
    <div className="flex h-10 p-2 w-full px-3 bg-white rounded-lg mb-5 border border-gray-400 hover:text-blue-500 hover:border-purple-600">
      <Link to={`/blog/${posts.id}/`}>{posts.title}</Link>
    </div>
  );
}

export default Blog;
