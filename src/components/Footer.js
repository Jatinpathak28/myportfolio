import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
          <h3><strong>JATIN</strong></h3>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="#https://github.com/Jatinpathak28" id="IMG1"><img src={navIcon1} alt="linkden" /></a>
                <a href="#https://www.linkedin.com/in/jatinpathak28/"id="IMG2"><img src={navIcon2} alt="facebook" /></a>
                <a href="#https://twitter.com/jatinpathak2002" id="IMG3"><img src={navIcon3} alt="instagrsm" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
