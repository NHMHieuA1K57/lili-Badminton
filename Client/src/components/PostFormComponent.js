import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { FaPen, FaMapMarkerAlt, FaUsers, FaCalendarAlt, FaDollarSign, FaPhoneAlt, FaFacebook } from 'react-icons/fa';
import { toast } from 'react-toastify';

const PostFormComponent = () => {
  const [post, setPost] = useState({
    title: '',
    location: '',
    groupType: '',
    courtType: '',
    slots: 0,
    date: '',
    price: '',
    phone: '',
    facebook: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Đăng bài thành công!', { position: toast.POSITION.TOP_RIGHT });
  };

  return (
    <div className="post-form-container">
      <Row>
        {/* Left Side: Thông tin chung */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Thông tin chung</Card.Title>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formLocation">
                  <Form.Label><FaMapMarkerAlt /> Địa chỉ sân (bắt buộc)</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    placeholder="Nhập địa điểm"
                    value={post.location}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formGroupType">
                  <Form.Label><FaUsers /> Loại nhóm (bắt buộc)</Form.Label>
                  <Form.Control as="select" name="groupType" value={post.groupType} onChange={handleInputChange}>
                    <option value="Nhóm xé vé">Nhóm xé vé</option>
                    <option value="Nhóm cố định">Nhóm cố định</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formSlots">
                  <Form.Label><FaUsers /> Số người trên sân (bắt buộc)</Form.Label>
                  <Form.Control type="number" name="slots" value={post.slots} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group controlId="formCourtType">
                  <Form.Label>Loại sân:</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Không có mái che"
                      name="courtType"
                      value="Không có mái che"
                      onChange={handleInputChange}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Có mái che"
                      name="courtType"
                      value="Có mái che"
                      onChange={handleInputChange}
                    />
                  </div>
                </Form.Group>

                {/* Image and video upload */}
                <Form.Group controlId="formImage">
                  <Form.Label>Thêm ảnh/Video (bắt buộc)</Form.Label>
                  <Form.Control type="file" multiple />
                </Form.Group>

                {/* Additional notes */}
                <Form.Group controlId="formNotes">
                  <Form.Label>Ghi chú thêm (nếu cần)</Form.Label>
                  <Form.Control as="textarea" rows={3} name="notes" onChange={handleInputChange} />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Side: Other information in 3 cards */}
        <Col md={6}>
          <Row>
            {/* Yêu cầu về thành viên */}
            <Col md={12}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Yêu cầu về thành viên</Card.Title>

                  <Form.Group controlId="formSlots">
                    <Form.Label><FaUsers /> Số người cần tuyển (bắt buộc)</Form.Label>
                    <Form.Control type="number" name="slots" value={post.slots} onChange={handleInputChange} />
                  </Form.Group>

                  <Form.Group controlId="formLevel">
                    <Form.Label>Trình độ (bắt buộc)</Form.Label>
                    <Form.Control as="select" name="level" onChange={handleInputChange}>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </Form.Control>
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>

            {/* Thời gian và chi phí */}
            <Col md={12}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Thời gian và chi phí</Card.Title>

                  <Form.Group controlId="formDate">
                    <Form.Label><FaCalendarAlt /> Ngày (bắt buộc)</Form.Label>
                    <Form.Control type="date" name="date" value={post.date} onChange={handleInputChange} />
                  </Form.Group>

                  <Form.Group controlId="formPrice">
                    <Form.Label><FaDollarSign /> Giá/người (bắt buộc)</Form.Label>
                    <Form.Control type="number" name="price" placeholder="Nhập giá" value={post.price} onChange={handleInputChange} />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>

            {/* Thông tin liên hệ */}
            <Col md={12}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Thông tin liên hệ</Card.Title>

                  <Form.Group controlId="formPhone">
                    <Form.Label><FaPhoneAlt /> Số điện thoại (bắt buộc)</Form.Label>
                    <Form.Control type="text" name="phone" placeholder="Nhập số điện thoại" value={post.phone} onChange={handleInputChange} />
                  </Form.Group>

                  <Form.Group controlId="formFacebook">
                    <Form.Label><FaFacebook /> Link Facebook (nếu cần)</Form.Label>
                    <Form.Control type="text" name="facebook" placeholder="Nhập link Facebook" value={post.facebook} onChange={handleInputChange} />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Checkbox and Buttons */}
      <div className="form-actions">
        <Form.Check type="checkbox" label="Lưu lựa chọn của bạn cho lần sau" />
        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">Hủy Bỏ</Button>
          <Button variant="primary" type="submit">Đăng Bài</Button>
        </div>
      </div>
    </div>
  );
};

export default PostFormComponent;
