import Profile from 'pages/accounts/Profile';
import Login from 'pages/accounts/Login';
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
import ContextApiSample from 'pages/examples/ContextApiSample';
import ContextApiSample2 from 'pages/examples/ContextApiSample2/index';
import PageNewsIndex from 'news/pages/PageNewsIndex';
import PageNewsArticleDetail from 'news/pages/PageNewsArticleDetail';
import PageNewsArticleForm from 'news/pages/PageNewsArticleForm';

function App() {
  const windowWidth = useWindowWidth();
  return (
    <div className="app">
      <TopNav />
      <Routes>
        <Route path="/" element={<Navigate to="/blog/" />} />
        <Route path="/accounts/login" element={<Login />} />
        <Route path="/accounts/profile" element={<Profile />} />
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
      </Routes>
      <hr />
      윈도우 가로크기 : {windowWidth}px
    </div>
  );
}

export default App;
