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

function App() {
  const windowWidth = useWindowWidth();
  return (
    <div className="app">
      <TopNav />
      <Routes>
        <Route path="/" element={<Navigate to="/reviews/" />} />
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
        <Route path="/Clock/" element={<Clock />} />
        <Route path="/examples/CssModule/" element={<CssModule />} />
        <Route path="/examples/CssInJs/" element={<CssInJs />} />
      </Routes>
      <hr />
      윈도우 가로크기 : {windowWidth}px
    </div>
  );
}

export default App;
