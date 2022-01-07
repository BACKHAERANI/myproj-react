import Rating from 'components/Rating';

function Review({ review }) {
  const { content, score } = review;

  return (
    <div className="bg-yellow-100 border-2 border-purple-300 my-1 p-1 ">
      {content}
      <Rating score={score} />
    </div>
  );
}

export default Review;
