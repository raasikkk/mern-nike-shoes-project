import "./Header.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : 'visible';
  };

  const toggleAccount = () => {
    setAccountOpen(!accountOpen);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const getToken = () => {
    return document.cookie.split(';').find(item => item.trim().startsWith('token='));
  };

  const isAuthenticated = () => {
    return !!getToken();
  };

  const handleLogout = () => {
    // Clear the JWT cookie and reload the page (you might want to implement more sophisticated handling)
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'; // Example of clearing the cookie
    window.location.reload(); // Reload the page or redirect as needed
  };

  const getUserIdFromToken = () => {
    const token = getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1])); // Decode the token
      return payload._id; // Extract user ID from the token
    }
    return null;
  };

  const handleCartClick = () => {
    const userId = getUserIdFromToken();
    if (isAuthenticated() && userId) {
      // If authenticated, navigate to the cart with user ID
      navigate(`/carts/${userId}`);
    } else {
      // If not authenticated, redirect to the login page
      navigate('/login');
    }
  };

  return (
    <header>
      <div className="header">
        <div className="logo-wrapper">
          <Link to="/">
            <img className="logo" src="/nike-logo-001.svg" alt="Logo"></img>
          </Link>
        </div>

        {/* Bigger Screen Navbar */}
        <div className="navbar-wrapper">
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/catalog">Products</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="action-wrapper">
          <button className="action"  onClick={handleCartClick}>
            <Link to="/cart">
              <img
                className="cart-icon"
                src="/cart-icon.svg"
                alt="Account"
              ></img>
            </Link>
          </button>
          <button className="action" onClick={toggleAccount}>
              <img
                className="account-icon"
                src="/account-icon.svg"
                alt="Cart"
              ></img>
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden action" onClick={toggleMenu}>
            <img src="/menu-icon.svg" alt="Menu" className="md:hidden menu-icon"></img>
          </button>
        </div>

        <div className={`rounded-b-xl absolute bg-gray-100 lg:w-[10vw] lg:top-[12vh] lg:right-[7vw] p-4
        transition-all duration-200 ease-in-out origin-top overflow-hidden
          ${accountOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
          `}>
            <div>
            {isAuthenticated() ? (
              <button className="z-50" onClick={handleLogout}>Logout</button>
            ) : (
              <div className="flex flex-col items-start gap-3 z-50">
                <button className="z-50"><Link to="/register">Register</Link></button>
                <button className="z-50"><Link to="/login">Login</Link></button>
              </div>
            )}
          </div>
        </div>

        {/* Full-Screen Links */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-100 z-50 flex flex-col justify-center items-center text-black space-y-10 text-3xl transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-black text-4xl"
          >
            ✕
          </button>
          <Link to="/catalog" onClick={toggleMenu}>
            Products
          </Link>
          <Link to="/" onClick={toggleMenu}>
            Pricing
          </Link>
          <Link to="/" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/" onClick={toggleMenu}>
            FAQs
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
