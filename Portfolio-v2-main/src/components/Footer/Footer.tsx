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
         <a href="#">About Me </a>
         <a href="#">Project
         </a>
         <a href="#">Contact</a>
      </div>
      {/* Logo & Horizontal Line */}
      <div className="footer-center">
         <hr />
         <a href="#" className="logo">
         <span>Designed by Sampada Creative Studio</span> <span>Kuveskar</span>
         </a>
         <hr />
      </div>
      {/* Social Media Links */}
      <div className="social-media">
         <a href="https://in.linkedin.com/in/sampada-kuveskar-07514525a" target="_blank" rel="noreferrer">
         <img src={linkedin} alt="Linkedin" />
         </a>
         <a href="https://github.com/Sampada3014" target="_blank" rel="noreferrer">
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
   </Container>
</footer>
);
}
