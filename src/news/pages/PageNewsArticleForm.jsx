import ArticleForm from 'news/compoents/ArticleForm';
import { useNavigate, useParams } from 'react-router-dom';

function PageNewsArticleForm() {
  const navigate = useNavigate();
  const { articleId } = useParams();

  return (
    <ArticleForm
      articleId={articleId}
      handleDidSave={(savedPost) => navigate(`/news/${savedPost.id}/`)}
    />
  );
}

export default PageNewsArticleForm;
