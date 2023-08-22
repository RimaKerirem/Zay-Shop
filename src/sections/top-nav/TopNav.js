import { Container } from "../../components/modules";
import "./top-nav.css";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function TopNav() {
  return (
    <div className="top-nav" id="top-nav">
      <Container>
        <div className="left">
          <FaEnvelope />
          <a href="mailto:info@company.com">info@company.com</a>
          <FaPhone />
          <a href="tel:010-020-0340">010-020-0340</a>
        </div>
        <div className="right">
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="http://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default TopNav;
