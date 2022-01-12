import DebugStates from 'components/DebugStates';
import useFieldValues from 'components/hooks/useFieldValues';
import Button from 'news/compoents/Button';
import H2 from 'news/compoents/H2';
import useAxios from 'axios-hooks';
import LoadingIndicator from 'news/compoents/LoadingIndicator';
import { useNavigate } from 'react-router-dom';
import ArticleList from 'news/compoents/ArticleList';

const INIT_FIELD_VALUES = { title: '', content: '' };

function PageNewsArticleForm() {
  const [{ loading: saveloanding, error: saveError }, saveRequest] = useAxios(
    { url: 'http://localhost:8000/news/api/article/', method: 'POST' },
    { manual: true },
  );
  const { fieldValues, handleFieldChange } = useFieldValues(INIT_FIELD_VALUES);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    saveRequest({
      data: fieldValues,
    }).then((response) => {
      const savedPost = response.data;
      navigate(`/news/${savedPost.id}/`);
    });
  };

  return (
    <div>
      <H2>Article Form</H2>
      {saveloanding && <LoadingIndicator>저장 중...</LoadingIndicator>}
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
        </div>

        <div className="my-3">
          <textarea
            name="content"
            value={fieldValues.content}
            onChange={handleFieldChange}
            className="p-1 bg-gray-100 w-full h-80 outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
        </div>

        <div className="my-3">
          <Button>저장하기</Button>
        </div>
      </form>
      <DebugStates fieldValues={fieldValues} />
    </div>
  );
}

export default PageNewsArticleForm;
