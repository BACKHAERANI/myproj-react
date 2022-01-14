import CookierunList from 'cookierun/compoents/CookierunList';

function PagecookierunIndex() {
  return (
    <div>
      <h4 className="text-xs">달리는 쿠키들!</h4>
      <h2 className="text-xl inline">COOKIERUN</h2>
      <button className="bg-gray-400">NEW!캐릭터</button>
      <CookierunList />

      <h2>캐릭터 추천</h2>
      <h2>광고</h2>
    </div>
  );
}

export default PagecookierunIndex;
