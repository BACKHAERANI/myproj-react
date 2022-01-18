import DebugStates from 'components/DebugStates';
import { useApiAxios } from 'api/base';
import useFieldValues from 'components/hooks/useFieldValues';
import H1 from 'news/compoents/H1';
import { useNavigate } from 'react-router-dom';
import useAuth from 'components/hooks/useAuth';

const INITIAL_FIELD_VALUES = { username: '', password: '' };
const INITIAL_AUTH = { isLoggedIn: false };

function LoginForm() {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [{ loading, error }, requestToken] = useApiAxios(
    {
      url: '/accounts/api/token/',
      method: 'POST',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange } =
    useFieldValues(INITIAL_FIELD_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();

    requestToken({ data: fieldValues }).then((response) => {
      const { access, refresh, username, first_name, last_name } =
        response.data;
      setAuth({
        isLoggedIn: true,
        access,
        refresh,
        username,
        first_name,
        last_name,
      });
      console.log('access :', access);
      console.log('refresh :', refresh);
      console.log('username :', username);
      console.log('first_name :', first_name);
      console.log('last_name :', last_name);
    });
  };

  return (
    <div>
      <H1>Login</H1>

      {error?.response?.status === 401 && (
        <div className="text-red-400">로그인에 실패했습니다.</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <input
            type="text"
            name="username"
            value={fieldValues.username}
            onChange={handleFieldChange}
            placeholder="username"
            className="p-3 bg-orange-100 focus:outline-none focus:border-2 focus:border-orange-500 w-full"
          />
        </div>
        <div className="my-5">
          <input
            type="password"
            name="password"
            value={fieldValues.password}
            onChange={handleFieldChange}
            placeholder="passowrd"
            className="p-3 bg-orange-100 focus:outline-none focus:border-2 focus:border-orange-500 w-full"
          />
        </div>
        <div className="my-5">
          <button className="w-full h-10 border-2 border-orange-500 hover:bg-orange-500">
            Login
          </button>
        </div>
      </form>

      <DebugStates fieldValues={fieldValues} />
    </div>
  );
}
export default LoginForm;
