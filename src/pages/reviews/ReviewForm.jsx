function ReviewForm() {
  return (
    <div>
      <h2>Review Form</h2>
      <h3>평점</h3>
      <select name="score">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <h3>리뷰</h3>
      <textarea type="text" name="content"></textarea>
      <hr />
      <button onClick={() => {}}>저장하기</button>
    </div>
  );
}

export default ReviewForm;
