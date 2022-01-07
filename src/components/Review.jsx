import Rating from 'components/Rating';

function Review({ review, handleDelete, handleEdit }) {
  const { content, score } = review;

  //handleEdit/handleDelete에 대한 방어적 코드 작성

  return (
    <div className="bg-yellow-100 border-2 border-purple-300 my-1 p-1 ">
      <div>
        <span
          onClick={() => handleEdit()}
          className="hover:text-blue-400 cursor-pointer mr-1 text-sm"
        >
          수정
        </span>
        <span
          onClick={() => handleDelete()}
          className="hover:text-red-400 cursor-pointer text-sm"
        >
          삭제
        </span>
      </div>
      {content}
      <Rating score={score} />
    </div>
  );
}

export default Review;
