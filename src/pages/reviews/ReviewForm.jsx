import useFieldValues from 'components/hooks/useFieldValues';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import DebugStates from 'components/DebugStates';
import ReviewForm from 'components/ReviewForm';
import { useState } from 'react/cjs/react.development';

function PageReviewForm() {
  const { reviewId } = useParams(); // 파람스 ':'으로 시작하는 값들을 가져온다
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { fieldValues, handleChange, clearFieldValues, setFieldValues } =
    useFieldValues({
      content: '',
      score: 5,
    });

  const saveReview = async () => {
    setLoading(true);
    setError(null);
    const url = 'http://127.0.0.1:8000/shop/api/reviews/';
    try {
      const response = await Axios.post(url, fieldValues);
      console.group('saveReivew');
      console.log(response.data);
      console.groupEnd();
      navigate('/reviews/');
    } catch (e) {
      setError(e);
      console.error(e);
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Review Form {reviewId ? '수정' : '생성'}</h2>
      <DebugStates reviewId={reviewId} />
      <ReviewForm
        fieldValues={fieldValues}
        handleChange={handleChange}
        handleSubmit={() => saveReview()}
        loading={loading}
      />
    </div>
  );
}
export default PageReviewForm;
