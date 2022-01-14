import { useApiAxios } from 'api/base';
import useFieldValues from 'components/hooks/useFieldValues';
import H1 from 'news/compoents/H1';
import { useEffect } from 'react';
import produce from 'immer';
import LoadingIndicator from 'news/compoents/LoadingIndicator';
import DebugStates from 'components/DebugStates';

const INIT_FIELD_VALUES = {
  name: '',
  content: '',
  rating: '',
  pet: '',
  price: '',
  photo: '',
};

function CookierunForm({ charId, handleSave }) {
  const [{ data: character, loading: getLoading, error: getError }, refetch] =
    useApiAxios(`/cookierun/api/characters/${charId}/`, { manual: !charId });

  const [
    {
      loading: saveLoading,
      error: saveError,
      errorMessages: saveErrorMessages,
    },
    saveRequest,
  ] = useApiAxios(
    {
      url: !charId
        ? `/cookierun/api/characters/`
        : `/cookierun/api/characters/${charId}/`,
      method: !charId ? 'POST' : 'PUT',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange, setFieldValues, formData } =
    useFieldValues(character || INIT_FIELD_VALUES);

  // useEffect할때 사진을 빈문자열로 만들어준다. - 사진을 저장하지 안하도 저장가능
  useEffect(() => {
    setFieldValues(
      produce((draft) => {
        draft.photo = '';
      }),
    );
  }, [character]);
  const handleSubmit = (e) => {
    e.preventDefault();
    saveRequest({
      data: formData,
    }).then((response) => {
      const savedChar = response.data;
      if (handleSave) handleSave(savedChar);
    });
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <H1>{charId ? '수정할' : '새로운'} 쿠키를 입력해주세요!</H1>
      {saveLoading && (
        <LoadingIndicator>쿠키를 굽고 있습니다.</LoadingIndicator>
      )}
      {saveError &&
        `저장 중 에러가 발생했습니다.(${saveError.response.status} ${saveError.response.statusText})`}
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <span className="text-xl">쿠키 이름:</span>
          <input
            name="name"
            placeholder="무슨 맛 쿠키인가요?"
            value={fieldValues.name}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none border-2 border-gray-400 border-dashed focus:border-solid focus:border-orange-500"
          />
          {saveErrorMessages.name?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-3">
          <span className="text-xl">쿠키 외국어 이름:</span>
          <input
            name="foreign_name"
            value={fieldValues.foreign_name}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none border-2 border-gray-400 border-dashed focus:border-solid focus:border-orange-500"
          />
          {saveErrorMessages.foreign_name?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <div className="my-3">
          <span className="text-xl">쿠키 소개:</span>
          <textarea
            name="content"
            value={fieldValues.content}
            onChange={handleFieldChange}
            className="p-1 bg-gray-100 w-full h-80 outline-none border-2 border-gray-400 border-dashed focus:border-solid focus:border-orange-500"
          />
          {saveErrorMessages.content?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-3">
          <span className="text-xl">등급 :</span>
          <select
            name="rating"
            value={fieldValues.rating}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none border-2 border-gray-400 border-dashed focus:border-solid focus:border-orange-500"
          >
            <option value="selected">등급을 선택해주세요!</option>
            <option value="C">C</option>
            <option value="B">B</option>
            <option value="A">A</option>
            <option value="S">S</option>
            <option value="L">L</option>
          </select>
          {saveErrorMessages.rating?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-3">
          <span className="text-xl">콤비 펫 :</span>
          <input
            name="pet"
            value={fieldValues.pet}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none border-2 border-gray-400 border-dashed focus:border-solid focus:border-orange-500"
          />
          {saveErrorMessages.pet?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-3">
          <span className="text-xl">가격 :</span>
          <input
            name="price"
            value={fieldValues.price}
            onChange={handleFieldChange}
            type="number"
            className="p-1 bg-gray-100 w-full outline-none border-2 border-gray-400 border-dashed focus:border-solid focus:border-orange-500"
          />
          {saveErrorMessages.price?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-3">
          <span className="text-xl">쿠키 사진 : </span>
          <li>
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              name="photo"
              onChange={handleFieldChange}
            />
          </li>
          {saveErrorMessages.photo?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <div className="my-3">
          <button className="border-2 border-orange-400 w-full rounded-lg hover:bg-orange-400">
            저장하기
          </button>
        </div>
      </form>

      <DebugStates character={fieldValues} />
    </div>
  );
}

export default CookierunForm;
