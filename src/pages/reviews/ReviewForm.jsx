import useFieldValues from 'components/hooks/useFieldValues';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from 'api/base';
import DebugStates from 'components/DebugStates';
import ReviewForm from 'components/ReviewForm';
import { useState } from 'react';
import { useEffect } from 'react';

function PageReviewForm() {
  const { reviewId } = useParams(); // 파람스 ':'으로 시작하는 값들을 가져온다
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();
  const { fieldValues, handleChange, clearFieldValues, setFieldValues } =
    useFieldValues({
      content: '',
      score: 5,
    });
  useEffect(() => {
    const fetchReview = async () => {
      setLoading(true);
      setError(null);
      const url = `/shop/api/reviews/${reviewId}/`;
      try {
        const response = await axiosInstance.get(url);
        setFieldValues(response.data);
      } catch (e) {
        setError(e);
        console.error(e);
      }
      setLoading(false);
    };
    if (reviewId) fetchReview();
    else clearFieldValues();
  }, [reviewId, setFieldValues, clearFieldValues]);
  const saveReview = async () => {
    setLoading(true);
    setError(null);
    setErrorMessages({});

    const url = !reviewId
      ? `/shop/api/reviews/`
      : `/shop/api/reviews/${reviewId}/`;

    try {
      if (!reviewId) {
        const response = await axiosInstance.post(url, fieldValues);
        console.group('saveReivew');
        console.log(response.data);
        console.groupEnd();
      } else {
        await axiosInstance.put(url, fieldValues);
      }
      navigate('/reviews/');
    } catch (e) {
      setError(e);
      setErrorMessages(e.response.data);
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
        errorMessages={errorMessages}
      />
    </div>
  );
}
export default PageReviewForm;
