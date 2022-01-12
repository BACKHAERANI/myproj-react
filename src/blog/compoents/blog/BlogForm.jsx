import Button from 'news/compoents/Button';
import H2 from 'news/compoents/H2';

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
      <H2>Title</H2>
      <input
        className="p-1 bg-gray-100 w-full outline-none border border-gray-400 border-dashed focus:border-black focus:border-solid"
        type="text"
        name="title"
        value={fieldValues.title}
        onChange={handleChange}
      />
      <div className="text-red-400">{errorMessages.title}</div>

      <H2>Content</H2>
      <textarea
        className="p-1 bg-gray-100 w-full outline-none border border-gray-400 border-dashed focus:border-black focus:border-solid"
        type="text"
        type="text"
        name="content"
        value={fieldValues.content}
        onChange={handleChange}
      />
      <div className="text-red-400">{errorMessages.content}</div>
      <hr />
      <Button className="button" onClick={() => handleClickedSubmitButtion()}>
        저장하기
      </Button>
    </div>
  );
}
export default BlogForm;
