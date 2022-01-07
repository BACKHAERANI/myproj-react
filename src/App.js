import Profile from 'pages/accounts/Profile';
import Login from 'pages/accounts/Login';
import ReviewList from 'pages/reviews/ReviewList';
import { Route, Routes } from 'react-router-dom';
import TopNav from 'components/TopNav';
import 'App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<TopNav />} />
        <Route path="/accounts/login" element={<Login />} />
        <Route path="/accounts/profile" element={<Profile />} />
        <Route path="/reviews/" element={<ReviewList />} />
      </Routes>
    </div>
  );
}

export default App;
