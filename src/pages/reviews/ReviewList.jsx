import Axios from 'axios';
import DebugStates from 'components/DebugStates';
import { useEffect, useState } from 'react';

function ReviewList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);
    const url = ' http://localhost:8000/shop/api/reviews/';
    //Promise 객체
    Axios.get(url)
      .then(({ data }) => {
        console.group('정상응답');
        console.log(data);
        console.groupEnd();
        setReviewList(data);
      })
      .catch((error) => {
        console.group('에러응답');
        console.log(error);
        console.groupEnd();
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <h2>Review List</h2>
      {loading && <div>Loading...</div>}
      {error && <div>통신 중 오류가 발생했습니다.</div>}
      <button
        onclick={() => refetch()}
        className="bg-purple-300 hover:bg-purple-600 hover:text-yellow-400"
      >
        새로고침
      </button>
      <hr />
      <DebugStates loading={loading} error={error} reviewList={reviewList} />
    </div>
  );
}

export default ReviewList;
