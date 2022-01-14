import CookierunList from 'cookierun/compoents/CookierunList';
import H3 from 'news/compoents/H3';
import H1 from 'news/compoents/H1';
import { useNavigate } from 'react-router-dom';

function PagecookierunIndex() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h4 className="text-xs">달리는 쿠키들!</h4>
        <H1 className="text-xl mr-40 inline">COOKIERUN</H1>
      </div>

      <CookierunList />

      <button
        onClick={() => navigate('/cookierun/new/')}
        className="mt-4 mb-3 bg-orange-400"
      >
        NEW!캐릭터
      </button>
      <hr />
      <H3>캐릭터 추천</H3>
      <hr />
      <H3>광고</H3>
    </div>
  );
}

export default PagecookierunIndex;
