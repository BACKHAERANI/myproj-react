import Button from 'news/compoents/Button';
import H2 from './H2';
import LoadingIndicator from 'news/compoents/LoadingIndicator';
import useFieldValues from 'components/hooks/useFieldValues';
import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import { useEffect } from 'react';

const INIT_FIELD_VALUES = { title: '', content: '' };

// !articleId => manual=true
// articleId =>manual=false

function ArticleForm({ articleId, handleDidSave }) {
  // articleId 값이 있을 때에만 조회
  // articleId => manual=false
  // !articleId => manual=true
  const [{ data: article, loading: getLoading, error: getError }] = useApiAxios(
    `/news/api/article/${articleId}/`,
    { manual: !articleId },
  );

  const [
    {
      loading: saveLoading,
      error: saveError,
      errorMessages: saveErrorMessages,
    },
    saveRequest,
  ] = useApiAxios(
    {
      url: !articleId
        ? '/news/api/article/'
        : `/news/api/article/${articleId}/`,
      method: !articleId ? 'POST' : 'PUT',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange, setFieldValues } = useFieldValues(
    article || INIT_FIELD_VALUES,
  );

  useEffect(() => {
    //서버로 photo=null이 전달되면 아래 오류가 발생
    //fieldValues에서 photo만 제거하거나 photo만 null로 변경
    setFieldValues((prevFieldValues) => ({ ...prevFieldValues, photo: '' }));
  }, [article]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // fieldValues : 객체 (except 파일)
    // 파일을 업로드할려면, FormData 인스턴스를 써야합니다.
    const formData = new FormData();
    Object.entries(fieldValues).forEach(([name, value]) => {
      if (Array.isArray(value)) {
        const fileList = value;
        fileList.forEach((file) => formData.append(name, file));
      } else {
        formData.append(name, value);
      }
    });

    saveRequest({
      data: formData,
    }).then((response) => {
      const savedPost = response.data;
      if (handleDidSave) handleDidSave(savedPost);
    });
  };
  return (
    <div>
      <H2>Article Form</H2>

      {saveLoading && <LoadingIndicator>저장 중 ...</LoadingIndicator>}
      {saveError &&
        `저장 중 에러가 발생했습니다. (${saveError.response.status} ${saveError.response.statusText})`}

      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            name="title"
            value={fieldValues.title}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages.title?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <div className="my-3">
          <textarea
            name="content"
            value={fieldValues.content}
            onChange={handleFieldChange}
            className="p-1 bg-gray-100 w-full h-80 outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages.content?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-3">
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            onChange={handleFieldChange}
          />
          {saveErrorMessages.photo?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <div className="my-3">
          <Button>저장하기</Button>
        </div>
      </form>
      <DebugStates
        article={article}
        getLoading={getLoading}
        getError={getError}
        saveErrorMessages={saveErrorMessages}
        fieldValues={fieldValues}
      />
    </div>
  );
}

export default ArticleForm;
