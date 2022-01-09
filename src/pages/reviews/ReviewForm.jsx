import Axios from 'axios';
import useFieldValues from 'components/hooks/useFieldValues';
import { useNavigate } from 'react-router-dom';

function ReviewForm() {
  const navigate = useNavigate();
  const [fieldValues, handleChange, setFieldValues] = useFieldValues({
    content: '',
    score: 5,
  });

  const createReview = () => {
    const url = 'http://127.0.0.1:8000/shop/api/reviews/';
    Axios.post(url, fieldValues)
      .then(() => navigate('/reviews/'))
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setFieldValues({}));
  };

  return (
    <div>
      <h2>Review Form</h2>
      <h3>평점</h3>
      <select name="score" onChange={handleChange}>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <h3>리뷰</h3>
      <textarea type="text" name="content" onChange={handleChange}></textarea>
      <hr />
      <button
        onClick={() => {
          navigate('/reviews/');
          createReview();
        }}
      >
        저장
      </button>
    </div>
  );
}

export default ReviewForm;
