import './Button.css';

function BlogForm({ fieldValues, handleChange, handleSubmit, errorMessages }) {
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
        size="60"
        type="text"
        name="title"
        value={fieldValues.title}
        onChange={handleChange}
      />
      <div className="text-red-400">{errorMessages.title}</div>

      <h2>Content</h2>
      <textarea
        className="border-2 border-purple-300 my-1 p-1"
        type="text"
        name="content"
        cols="70"
        rows="20"
        value={fieldValues.content}
        onChange={handleChange}
      />
      <div className="text-red-400">{errorMessages.content}</div>
      <hr />
      <button className="button" onClick={() => handleClickedSubmitButtion()}>
        저장하기
      </button>
    </div>
  );
}
export default BlogForm;
