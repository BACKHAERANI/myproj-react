function Blog({ blog, handleChangedDetail, handleDelete }) {
  const { title } = blog;

  return (
    <div className="bg-yellow-100 border-2 border-purple-300 my-1 p-1 ">
      <div>
        <span
          onClick={() => {}}
          className="hover:text-blue-400 cursor-pointer mr-1 text-sm"
        >
          수정
        </span>
        <span
          onClick={() => {
            handleDelete();
          }}
          className="hover:text-red-400 cursor-pointer text-sm"
        >
          삭제
        </span>
      </div>
      <div
        onClick={() => handleChangedDetail()}
        className="cursor-pointer hover:text-blue-500"
      >
        {title}
      </div>
    </div>
  );
}

export default Blog;
