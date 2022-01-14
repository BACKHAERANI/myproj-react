import CookierunForm from 'cookierun/compoents/CookierunForm';
import { useNavigate, useParams } from 'react-router-dom';

function PagecookierunForm() {
  const { charId } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <CookierunForm
        charId={charId}
        handleSave={(savedChar) => navigate(`/cookierun/${savedChar.id}/`)}
      />
    </div>
  );
}

export default PagecookierunForm;
