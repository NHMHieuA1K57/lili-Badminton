import React, { useState } from 'react';
import '../styles/screens/Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    setUsername('Minh Trí'); // Set username here or fetch from a form or API
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    navigate('/register');
  }

  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li><a href="/">Trang chủ</a></li>
        <li><a href="#">Giới thiệu</a></li>
        <li><a href="/court">Giao lưu</a></li>
        <li><a href="/coach">Huấn luyện viên</a></li>
        <li><a href="#">Hướng dẫn</a></li>
        <li><a href="#">Liên hệ</a></li>
      </ul>
      {isLoggedIn ? (
        <div className="user-section">
          <button className="post-button">Đăng Bài Tìm Giao Lưu</button>
          <div className="user-info">
          <img src={process.env.PUBLIC_URL + '/assets/images/Register.png'} alt="Login" className="image" />
            <span>{username}</span>
          </div>
        </div>
      ) : (
        <div className="auth-buttons">
          <button className="login-button" onClick={handleLogin}>Đăng Nhập</button>
          <button className="register-button" onClick={handleRegister}>Đăng Ký</button>
        </div>
      )}
    </header>
  );
};

export default Header;
