import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./footer.css";
import { Container, FooterBox } from "../../components/modules";

function Footer() {
  const productsList = [
    { id: "pro_1", name: "Luxury" },
    { id: "pro_2", name: "Sport Wear" },
    { id: "pro_3", name: "Men's Shoes" },
    { id: "pro_4", name: "Women's Shoes" },
    { id: "pro_5", name: "Popular Dress" },
    { id: "pro_6", name: "Gym Accessories" },
    { id: "pro_7", name: "Sport shoes" },
  ];

  const infoList = [
    { id: "info_1", name: "Home" },
    { id: "info_2", name: "About Us" },
    { id: "info_3", name: "Shop Locations" },
    { id: "info_4", name: "FAQs" },
    { id: "info_5", name: "Contact" },
  ];
  return (
    <footer>
      <div className="footer-content">
        <Container>
          <div className="footer-nav">
            <div className="zay">
              <h1 className="zay-title">Zay Shop</h1>
              <ul className="zay-content">
                <li>
                  <FaMapMarkerAlt />
                  <p>123 Consectetur at ligula 10660</p>
                </li>
                <li>
                  <FaEnvelope />
                  <a href="mailto:info@company.com">info@company.com</a>
                </li>
                <li>
                  <FaPhone />
                  <a href="tel:010-020-0340">010-020-0340</a>
                </li>
              </ul>
            </div>
            <FooterBox list={productsList} title="Products" />
            <FooterBox list={infoList} title="Further Info" />
          </div>
          <div className="footer-contact">
            <div className="social">
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
            <div className="subscribe">
              <input
                type="text"
                name=""
                id=""
                placeholder="Email Address"
                className="input"
              />
              <button>Subscribe</button>
            </div>
          </div>
        </Container>
      </div>
      <div className="copyright">
        <Container>
          <p>
            Copyright © 2021 Company Name | Designed by &ensp;
            <a
              href="https://templatemo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TemplateMo
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
