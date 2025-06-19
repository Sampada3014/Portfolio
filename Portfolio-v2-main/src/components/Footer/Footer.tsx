import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import instagramIcon from "../../assets/instagram.svg";

export function Footer() {
  return (
    <footer className="footer-section">
      <Container className="footer">
        {/* Navigation Links */}
        <div className="footer-nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Rooms</a>
          <a href="#">Booking</a>
          <a href="#">Contact</a>
          <a href="#">Blogs</a>
        </div>

        {/* Logo & Horizontal Line */}
        <div className="footer-center">
          <hr />
          <a href="#" className="logo">
            <span>Sampada</span> <span>Kuveskar</span>
          </a>
          <hr />
        </div>

        {/* Social Media Links */}
        <div className="social-media">
          <a href="https://in.linkedin.com/in/sampada-kuveskar-07514525a" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="Whatsapp" />
          </a>
          <a href="https://www.instagram.com/sampadacreativestudio/" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>

        {/* 3-column info section */}
        <div className="footer-info">
          <div>
            <h4>Contact Us</h4>
            <p>(+122) 34 5678 9100</p>
            <p>sampada@email.com</p>
          </div>
          <div>
            <h4>Address</h4>
            <p>120 Genève, West<br />Lancashire, England</p>
          </div>
          <div>
            <h4>Work Hours</h4>
            <p>Mon – Thu: 10 am – 08 pm</p>
            <p>Fri – Sun: 11 am – 09 pm</p>
          </div>
        </div>
      </Container>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <Container className="footer-bottom-content">
          <p>© {new Date().getFullYear()} Sampada Kuveskar. All rights reserved.</p>
          <p>
            Designed by <a href="#">Sampada Creative Studio</a>
          </p>
        </Container>
        <div className="back-to-top">
          <a href="#">↑</a>
        </div>
      </div>
    </footer>
  );
}
