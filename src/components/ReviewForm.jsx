function ReviewForm({ fieldValues, handleChange, handleSubmit }) {
  const handleClickedSubmitButtion = () => {
    if (handleSubmit) {
      handleSubmit();
    } else {
      console.warn('handleSubmit 속성값을 지정해주세요.');
    }
  };

  return (
    <div>
      <h3>평점</h3>
      <select name="score" onChange={handleChange} value={fieldValues.score}>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <h3>리뷰</h3>
      <textarea
        type="text"
        name="content"
        onChange={handleChange}
        value={fieldValues.content}
      ></textarea>
      <hr />
      <button
        className="bg-blue-100 cursor-pointer hover:bg-blue-400"
        onClick={() => handleClickedSubmitButtion()}
      >
        저장
      </button>
    </div>
  );
}
export default ReviewForm;
