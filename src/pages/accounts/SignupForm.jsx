import { useApiAxios } from 'api/base';
import useFieldValues from 'components/hooks/useFieldValues';
import { useNavigate } from 'react-router-dom';

const INITIAL_SIGNUP = { username: '', password: '', password2: '' };

function SignupForm() {
  const { fieldValues, handleFieldChange } = useFieldValues(INITIAL_SIGNUP);

  const navigate = useNavigate();
  const [{ loading, error, errorMessages }, get_Signup] = useApiAxios(
    {
      url: '/accounts/api/signup/',
      method: 'POST',
    },
    { manual: true },
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    get_Signup({ data: fieldValues }).then((response) => {
      const { username, password, password2 } = response.data;
      console.log('signup');
      navigate('/accounts/login/');
    });
  };

  return (
    <div className="my-4">
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          <span> UserName:</span>
          <input
            type="text"
            name="username"
            value={fieldValues.username}
            onChange={handleFieldChange}
            className="p-3 bg-orange-100 focus:outline-none focus:border-2 focus:border-orange-500 w-full"
          />
          {errorMessages.username?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-4">
          <span> PassWord:</span>
          <input
            type="text"
            name="password"
            value={fieldValues.password}
            onChange={handleFieldChange}
            className="p-3 bg-orange-100 focus:outline-none focus:border-2 focus:border-orange-500 w-full"
          />
          {errorMessages.password?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-4">
          <span> PassWord 확인:</span>
          <input
            type="text"
            name="password2"
            value={fieldValues.password2}
            onChange={handleFieldChange}
            className="p-3 bg-orange-100 focus:outline-none focus:border-2 focus:border-orange-500 w-full"
          />
          {errorMessages.non_field_errors?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-3">
          <button className="h-10 border-2 border-orange-400 w-full rounded-lg hover:bg-orange-400">
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
