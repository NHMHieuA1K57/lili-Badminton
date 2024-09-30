import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaUserFriends, FaClipboardList, FaUsers } from 'react-icons/fa';
import '../styles/screens/ParticipationComponent.css'; // Add necessary styles here

const ParticipationComponent = () => {
  return (
    <div className="participation-section">
      <h2 className="text-center">Tham gia giao lưu</h2>
      <div className="participation-content">
        {/* Left Section */}
        <div className="left-section w-60">
          <h4>Đến với chúng tôi bạn sẽ được <span className="highlight">trải nghiệm!</span></h4>
          <div className="feature-list">
            <Row>
              <Col xs={12} sm={6} className="left-section">
            <div className="feature-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h5>Chọn sân nhanh chóng</h5>
                <p>Thông qua các buổi giao lưu, các bạn sẽ đăng ký sân Pickleball phù hợp nhất với vị trí của mình.</p>
              </div>
            </div>
            </Col>
            <Col xs={12} sm={6} className="right-section">
            <div className="feature-item">
              <FaUserFriends className="icon" />
              <div>
                <h5>Tập hợp những người có chung đam mê</h5>
                <p>Giúp bạn có cơ hội gặp gỡ những người có cùng sở thích và cùng đam mê Pickleball.</p>
              </div>
            </div>
            </Col>
            </Row>
            <Row>
            <Col xs={12} sm={6} className="left-section">
            <div className="feature-item">
              <FaClipboardList className="icon" />
              <div>
                <h5>Hướng dẫn cho người mới</h5>
                <p>Nếu bạn là người mới tham gia, chúng tôi sẽ giúp bạn làm quen với bộ môn Pickleball qua các hoạt động giao lưu.</p>
              </div>
            </div>
            </Col>
            <Col xs={12} sm={6} className="right-section">
            <div className="feature-item">
              <FaUsers className="icon" />
              <div>
                <h5>Nhóm người chơi đa dạng</h5>
                <p>Tham gia nhóm với những người chơi Pickleball từ nhiều nơi để học hỏi và vui chơi.</p>
              </div>
            </div>
            </Col>
            </Row>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section w-40">
          <div className="image-container">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/Register.png'}
              alt="Pickleball Experience"
              className="img-fluid participation-image w-100"
            />
            <div className="image-content">
              <h5>Đừng bỏ lỡ cơ hội thử sức với môn thể thao đang được yêu thích này!</h5>
              <Button className="white-button">Nhóm xe vé</Button>
              <Button className="white-button">Nhóm cố định</Button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipationComponent;
