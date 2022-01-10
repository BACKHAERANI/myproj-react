function BlogForm({ fieldValues, handleChange, handleSubmit }) {
  const handleClickedSubmitButtion = () => {
    if (handleSubmit) {
      handleSubmit();
    } else {
      console.warn('handleSubmit 속성값을 지정해주세요.');
    }
  };

  return (
    <div>
      <h2>Title</h2>
      <input
        className="border-2 border-purple-300 my-1 p-1"
        type="text"
        name="title"
        value={fieldValues.title}
        onChange={handleChange}
      />

      <h2>Content</h2>
      <textarea
        className="border-2 border-purple-300 my-1 p-1"
        type="text"
        name="content"
        value={fieldValues.content}
        onChange={handleChange}
      />
      <hr />
      <button
        className="bg-blue-100 cursor-pointer hover:bg-blue-400"
        onClick={() => handleClickedSubmitButtion()}
      >
        저장하기
      </button>
    </div>
  );
}
export default BlogForm;
