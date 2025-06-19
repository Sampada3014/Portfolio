import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
   <Container id="contact">
  <header>
    <h2>Contact</h2>
    <p>Ready to get started on your project?</p>
    <p>Contact me now for a free consultation.</p>
  </header>

  <div className="contacts">
    <div className="contact-item">
      <a href="mailto:Sampadakuveskar505@gmail.com">
        <img src={emailIcon} alt="Email Icon" />
      </a>
      <a href="mailto:Sampadakuveskar505@gmail.com">Sampadakuveskar505@gmail.com</a>
    </div>

    <div className="contact-item">
      <a href="tel:+918799987886">
        <img src={phoneIcon} alt="Phone Icon" />
      </a>
      <a href="tel:+918799987886">(+91) 8799987886</a>
    </div>
  </div>

  <Form />
</Container>

  )
}