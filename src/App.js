import Pageprofile from 'pages/accounts/Pageprofile';
import PageLogin from 'pages/accounts/PageLogin';
import ReviewList from 'pages/reviews/ReviewList';
import { Route, Routes, Navigate } from 'react-router-dom';
import TopNav from 'components/TopNav';
import 'App.css';
import Components from 'pages/examples/Components';
import ReviewForm from 'pages/reviews/ReviewForm';
import PageBlog from 'blog/pages/PageBlogList';
import PostDetail from 'blog/pages/PageBlogDetail';
import PostForm from 'blog/pages/PageBlogForm';
import Clock from 'Clock/Clock';
import useWindowWidth from 'Clock/useWindowWidth';
import CssModule from 'pages/examples/CssModule';
import CssInJs from 'pages/examples/CssInJs';
import ContextApiSample2 from 'pages/examples/ContextApiSample2/index';
import PageNewsIndex from 'news/pages/PageNewsIndex';
import PageNewsArticleDetail from 'news/pages/PageNewsArticleDetail';
import PageNewsArticleForm from 'news/pages/PageNewsArticleForm';
import PagecookierunIndex from 'cookierun/pages/PagecookierunIndex';
import PagecookierunDetail from 'cookierun/pages/PagecookierunDetail';
import PagecookierunForm from 'cookierun/pages/PagecookierunForm';
import PageSignupFrom from 'pages/accounts/PageSignupFrom';
import { AuthProvider } from 'contexts/AuthContext';

function App() {
  const windowWidth = useWindowWidth();
  return (
    <AuthProvider>
      <div className="app">
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/blog/" />} />
          <Route path="/accounts/login" element={<PageLogin />} />
          <Route path="/accounts/profile" element={<Pageprofile />} />
          <Route path="/accounts/signup/" element={<PageSignupFrom />} />
          <Route path="/reviews/" element={<ReviewList />} />
          <Route path="/reviews/new/" element={<ReviewForm />} />
          <Route path="/reviews/:reviewId/edit/" element={<ReviewForm />} />
          <Route path="/examples/components/" element={<Components />} />
          <Route path="/blog/" element={<PageBlog />} />
          <Route path="/blog/:postId/" element={<PostDetail />} />
          <Route path="/blog/new/" element={<PostForm />} />
          <Route path="/blog/:postId/edit/" element={<PostForm />} />
          <Route path="/news/" element={<PageNewsIndex />} />
          <Route path="/news/new/" element={<PageNewsArticleForm />} />
          <Route path="/news/:articleId/" element={<PageNewsArticleDetail />} />
          <Route
            path="/news/:articleId/edit/"
            element={<PageNewsArticleForm />}
          />
          <Route path="/Clock/" element={<Clock />} />
          <Route path="/examples/CssModule/" element={<CssModule />} />
          <Route path="/examples/CssInJs/" element={<CssInJs />} />
          <Route
            path="/examples/ContextApiSample/"
            element={<ContextApiSample2 />}
          />
          <Route path="/cookierun/" element={<PagecookierunIndex />} />
          <Route path="/cookierun/:charId/" element={<PagecookierunDetail />} />
          <Route
            path="/cookierun/:charId/edit/"
            element={<PagecookierunForm />}
          />
          <Route path="/cookierun/new/" element={<PagecookierunForm />} />
        </Routes>
        <hr />
        윈도우 가로크기 : {windowWidth}px
      </div>
    </AuthProvider>
  );
}

export default App;
