import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="">
        <div className="top-footer">
          <div className="interactive-top-footer flex font-medium">
            <div className="column-footer flex flex-col">
              <Link to="/" className="title-column-footer">
                About
              </Link>
              <Link to="/" className="hyperlink-column-footer">About Us</Link>
              <Link to="/" className="hyperlink-column-footer">Features</Link>
              <Link to="/" className="hyperlink-column-footer">News & Blog</Link>
            </div>

            <div className="column-footer flex flex-col">
              <Link to="/" className="title-column-footer">
                Connect
              </Link>
              <Link to="/" className="hyperlink-column-footer">LinkedIn</Link>
              <Link to="/" className="hyperlink-column-footer">Facebook</Link>
              <Link to="/" className="hyperlink-column-footer">Twitter</Link>
              <Link to="/" className="hyperlink-column-footer">Instagram</Link>
            </div>

            <div className="column-footer flex flex-col">
              <Link to="/" className="title-column-footer">
                Support
              </Link>
              <Link to="/" className="hyperlink-column-footer">FAQs</Link>
              <Link to="/" className="hyperlink-column-footer">Support Center</Link>
              <Link to="/" className="hyperlink-column-footer">Contact Us</Link>
            </div>
          </div>

          <div className="logo-container flex justify-center">
            <img className="logo" src="/nike-logo-001.svg" alt="Logo"></img>
          </div>
        </div>

        <div className="bot-footer flex items-center justify-center">
          <p>© 2025 | Nike | All Rights Preserved | Just Do It </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
