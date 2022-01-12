import ArticleForm from 'news/compoents/ArticleForm';
import { useNavigate } from 'react-router-dom';

function PageNewsArticleForm() {
  const navigate = useNavigate();

  return (
    <ArticleForm
      articleId={null}
      handleDidSave={(savedPost) => navigate(`/news/${savedPost.id}/`)}
    />
  );
}

export default PageNewsArticleForm;
