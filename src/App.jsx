import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import banner1 from '../src/img/banner1.jpg';
import banner2 from '../src/img/banner2.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="page-container">
      {/* Phần 1: Topbar */}
      <div className="topbar">
        <div className="topbar-left">
          <button className="topbar-button">E-OFFICE</button>
          <button className="topbar-button">EMAIL</button>
          <button className="topbar-button">THƯ VIỆN - THÔNG TIN</button>
        </div>
        <div className="topbar-right">
          <a href="#" className="topbar-link">KẾT NỐI | LIÊN HỆ</a>
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" alt="VN" className="flag-icon" />
          <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="UK" className="flag-icon" />
        </div>
      </div>

      {}
      <div className="topbar-spacing"></div>
      <div className="banner-slider">
  <div className="slides">
    <img src={banner1} alt="Banner 1" className="slide" />
    <img src={banner2} alt="Banner 2" className="slide" />
  </div>
</div>
      <main className="content">
    {}
  </main>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h4 className="footer-title">LIÊN HỆ</h4>
            <p>ĐẠI HỌC CÔNG NGHIỆP TP HỒ CHÍ MINH</p>
            <p>Địa chỉ: 12 Nguyễn Văn Bảo, P.4, Q.Gò Vấp, TP.HCM</p>
            <p>Điện thoại: 028 38940390 - 100</p>
            <p>Fax: 028 38946090</p>
            <p>Email: <a href="mailto:dhcn@iuh.edu.vn" className="footer-link">dhcn@iuh.edu.vn</a></p>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">HOẠT ĐỘNG KHÁC</h4>
            <p>Dịch vụ công cộng</p>
            <p>CLB/Đội/Nhóm sinh viên</p>
            <p>Công tác xã hội</p>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">THÔNG TIN MỞ RỘNG</h4>
            <p>Báo chí viết về IUH</p>
            <p>Khám phá IUH</p>
            <p>Kỹ năng mềm</p>
            <p>Thông tin sinh viên</p>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">VĂN BẢN TIỆN ÍCH</h4>
            <p>Quy chế - Quy định</p>
            <p>Biểu mẫu đào tạo</p>
            <p>Biểu mẫu khoa học</p>
          </div>
        </div>

        {}
        <div className="footer-bottom">
          <p>© Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
        </div>
      </footer>
      </div>
    </>
  )
}

export default App
