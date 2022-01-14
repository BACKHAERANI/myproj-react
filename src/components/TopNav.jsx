import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <div className="my-3 bg-orange-500 h-10">
      <ul className="flex gap-4">
        <div className=" my-1 mx-3 text-xl text-white font-bold">
          <span>RANISCOMPANY</span>
        </div>

        <li>
          <MyLink to="/accounts/login">로그인</MyLink>
        </li>
        <li>
          <MyLink to="/accounts/profile">프로필</MyLink>
        </li>
        <li>
          <MyLink to="/blog/">블로그</MyLink>
        </li>
        <li>
          <MyLink to="/news/">뉴스룸</MyLink>
        </li>
        <li>
          <MyLink to="/cookierun/">쿠키런</MyLink>
        </li>
        {/* <li>
          <MyLink to="/reviews/">리뷰</MyLink>
        </li>
        <li>
          <MyLink to="/examples/components/">컴포넌트 예시</MyLink>
        </li> */}

        {/* <li>
          <MyLink to="/Clock/">시계</MyLink>
        </li>
        <li>
          <MyLink to="/examples/CssModule/">CssModule</MyLink>
        </li>
        <li>
          <MyLink to="/examples/CssInJs/">CssInJs</MyLink>
        </li>
        <li>
          <MyLink to="/examples/ContextApiSample/">ContextApiSample</MyLink>
        </li> */}
      </ul>
    </div>
  );
}

function MyLink({ to, children }) {
  return (
    <Link to={to} className="pb-1 text-white hover:border-b-4 border-white ">
      {children}
    </Link>
  );
}

export default TopNav;
