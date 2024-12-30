import "./footer.css";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="">
        <div className="top-footer">
          <div className="interactive-top-footer flex">
            <div className="column-footer flex flex-col">
              <Link to="/" className="title-column-footer">
                About
              </Link>
              <Link to="/">About Us</Link>
              <Link to="/">Features</Link>
              <Link to="/">News & Blog</Link>
            </div>

            <div className="column-footer flex flex-col">
              <Link to="/" className="title-column-footer">
                Connect
              </Link>
              <Link to="/">LinkedIn</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Twitter</Link>
              <Link to="/">Instagram</Link>
            </div>

            <div className="column-footer flex flex-col">
              <Link to="/" className="title-column-footer">
                Support
              </Link>
              <Link to="/">FAQs</Link>
              <Link to="/">Support Center</Link>
              <Link to="/">Contact Us</Link>
            </div>
          </div>

          <div className="logo-container">
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
