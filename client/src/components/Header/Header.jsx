import styles from "./Header.module.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles["logo-wrapper"]}>
          <Link to="/">
            <img
              className={styles.logo}
              src="/nike-logo-001.svg"
              alt="Logo"
            ></img>
          </Link>
        </div>

        <div className={styles["navbar-wrapper"]}>
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
        </div>

        <div className={styles["action-wrapper"]}>
          <button className={styles.action}>
            <Link to="/">
              <img
                className={styles["cart-icon"]}
                src="/cart-icon.svg"
                alt="Account"
              ></img>
            </Link>
          </button>
          <button className={styles.action}>
            <Link>
              <img
                className={styles["account-icon"]}
                src="/account-icon.svg"
                alt="Cart"
              ></img>
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
