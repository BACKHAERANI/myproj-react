import BlogList from '../compoents/blog/BlogList';

function PageBlogList() {
  return (
    <div>
      <h1 className="pb-1 text-gray-500 border-b-4 border-purple-500 text-xl">
        Blog
      </h1>
      <BlogList />
    </div>
  );
}

export default PageBlogList;
