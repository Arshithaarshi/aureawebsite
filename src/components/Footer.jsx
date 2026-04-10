import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p><FaEnvelope /> aurea@gmail.com</p>
      <p><FaPhone /> +91 9876543210</p>
      <p>📍 Kochi, Kerala</p>

      <div className="social">
        <FaFacebook />
        <FaInstagram />
      </div>
    </footer>
  );
};

export default Footer;
