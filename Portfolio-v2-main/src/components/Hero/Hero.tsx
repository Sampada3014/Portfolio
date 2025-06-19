import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/c5a2df667121438db74dd869eb18a024-removebg-preview (1).png"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import instagramIcon from '../../assets/instagram.svg'

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Sampada Kuveskar</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Website Devloper</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">2.5 Year Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
        href="https://in.linkedin.com/in/sampada-kuveskar-07514525a"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
          <a
                  href="https://www.instagram.com/sampadacreativestudio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagramIcon} alt="Instagram" />
                </a>
     </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}