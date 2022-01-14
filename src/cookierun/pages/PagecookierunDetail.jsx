import CookierunDetail from 'cookierun/compoents/CookierunDetail';
import { useParams } from 'react-router-dom';

function PageCookierunDetail() {
  const { charId } = useParams();
  return (
    <div>
      <CookierunDetail charId={charId} />
    </div>
  );
}

export default PageCookierunDetail;
