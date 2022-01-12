import ArticleList from 'news/compoents/ArticleList';
import Button from 'news/compoents/Button';
import { useNavigate } from 'react-router-dom';

function PageNewsIndex() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>뉴스 페이지</h2>
      <ArticleList />
      <Button onClick={() => navigate('/news/new/')}>새 포스팅쓰기</Button>
      <h2>뉴스 추천</h2>
      <h2>광고</h2>
    </div>
  );
}

export default PageNewsIndex;
