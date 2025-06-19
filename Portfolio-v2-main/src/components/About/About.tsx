import { Container } from "./styles";
import SampadaKuveskar from "../../assets/image.png";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
     <div className="about-text">
  <ScrollAnimation animateIn="fadeInLeft">
    <h2>About me</h2>
  </ScrollAnimation>

  <ScrollAnimation animateIn="fadeInLeft" delay={100}>
    <p>
      Hi there! I’m Sampada Kuveskar, a passionate front-end developer skilled in HTML5, CSS3, JavaScript, ReactJS, Bootstrap, and WordPress. I specialize in creating responsive, user-friendly websites that blend creativity with technical expertise.
    </p>
  </ScrollAnimation>

  <ScrollAnimation animateIn="fadeInLeft" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
    <p>
      I am committed to continuous learning and innovation, eager to contribute effectively to dynamic teams and gain real-world experience. My work focuses on delivering high-quality web solutions that prioritize performance, usability, and SEO.
    </p>
  </ScrollAnimation>

  <ScrollAnimation animateIn="fadeInLeft" delay={400}>
    <div className="education">
      <h3>Education:</h3>
      <h4>Bachelor of Science in Information Technology</h4>
      <p>N.S.P College Devgad, Mumbai University</p>
    </div>
  </ScrollAnimation>

  <ScrollAnimation animateIn="fadeInLeft" delay={550}>
    <div className="experience">
      <h3>Experience:</h3>
      <h4>Software Developer</h4>
      <p>
        Software Developer<br />
        KIWIS AND BROWNIES IT SOLUTIONS | October 2024 - Present<br />
        Bangalore, India
      </p>
      <ul>
        <li>Developing and maintaining web applications with a focus on front-end development.</li>
        <li>Building responsive and accessible UI using ReactJS and Bootstrap.</li>
        <li>Collaborating on backend services and content management using WordPress.</li>
      </ul>
      <p><strong>AdEngage - Full Stack Developer Internship</strong><br />
        July 2023 – September 2023
      </p>
      <ul>
        <li>Completed a 3-month internship focusing on web development and WordPress.</li>
        <li>Converted PDF templates to HTML for a student storybook project.</li>
        <li>Ensured cross-browser compatibility and responsive design.</li>
        <li>Worked on user-centric designs and web platform layouts using HTML, CSS, and JavaScript.</li>
      </ul>
      <p><strong>Project Highlights:</strong></p>
      <ul>
        <li><strong>Fort Jadhavgadh:</strong> Developed fully responsive and SEO-friendly frontend independently.</li>
        <li><strong>Orchid Toyam Hotel:</strong> Designed frontend and integrated a booking engine with SEO focus.</li>
        <li><strong>Pichunt:</strong> Enhanced frontend for a stock image platform similar to Shutterstock.</li>
        <li><strong>Awestruck (Ongoing):</strong> Creating e-commerce frontend with Razorpay payment integration and UX optimization.</li>
      </ul>
    </div>
  </ScrollAnimation>

  <ScrollAnimation animateIn="fadeInLeft" delay={400}>
    <h3>Here are my main skills:</h3>
  </ScrollAnimation>

  <div className="hard-skills">
    {[
      { src: python, alt: "Python", delay: 100 },
      { src: java, alt: "Java", delay: 110 },
      { src: jsIcon, alt: "JavaScript", delay: 120 },
      { src: reactIcon, alt: "React", delay: 130 },
      { src: typescriptIcon, alt: "TypeScript", delay: 140 },
      { src: vueIcon, alt: "Vue", delay: 150 },
      { src: wordpress, alt: "WordPress", delay: 160 },
      { src: shopify, alt: "Shopify", delay: 170 },
      { src: htmlIcon, alt: "HTML", delay: 180 },
      { src: cssIcon, alt: "CSS", delay: 190 },
      { src: boostrapIcon, alt: "Bootstrap", delay: 200 },
    ].map(({ src, alt, delay }) => (
      <div className="hability" key={alt}>
        <ScrollAnimation animateIn="fadeInUp" delay={delay}>
          <img src={src} alt={alt} />
        </ScrollAnimation>
      </div>
    ))}
  </div>
</div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={SampadaKuveskar} alt="Sampada Kuveskar" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
