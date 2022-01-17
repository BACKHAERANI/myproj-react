import H1 from 'news/compoents/H1';
import H3 from 'news/compoents/H3';
import useFieldValues from 'components/hooks/useFieldValues';
import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';

const INIT_FIELD_VALUES = { username: '', password: '' };

function PageLogin() {
  const [
    { data: accounts, loading: accountLoading, error: accountError },
    requestToken,
  ] = useApiAxios(
    { url: `/accounts/api/token/`, method: 'POST' },
    { manual: true },
  );

  const { fieldValues, handleFieldChange } = useFieldValues(
    accounts || INIT_FIELD_VALUES,
  );

  const handleSubmit = (e) => {
    requestToken({ data: fieldValues }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      {accountLoading && '로딩 중'}
      {accountError && '에러가 발생했습니다.'}

      <H1>Login</H1>
      <div className="my-5">
        <H3>Username : </H3>
        <input
          type="text"
          name="username"
          value={fieldValues.username}
          onChange={handleFieldChange}
          className="border outline-none hover:border-orange-500"
        />
      </div>
      <div className="my-5">
        <H3>Password : </H3>
        <input
          type="password"
          name="password"
          value={fieldValues.password}
          onChange={handleFieldChange}
          className="border outline-none hover:border-orange-500"
        />
      </div>
      <div className="my-5">
        <button
          onClick={handleSubmit}
          className="h-10 w-40 border-2  border-orange-500 hover:bg-orange-500"
        >
          Login
        </button>
      </div>
      <DebugStates accounts={fieldValues} error={accountError} />
    </div>
  );
}

export default PageLogin;
