import styles from "./footer.module.css";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles["top-footer"]}>

          <div className={styles["logo-footer"]}>

          </div>

          <div className={styles["column-footer"]}>
            <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
          </div>

          <div className={styles["column-footer"]}>
            <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
          </div>

          <div className={styles["column-footer"]}>
            <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
          </div>

        </div>

        <div className={styles["bot-footer"]}>
          <p>© 2025 | Nike | All Rights Preserved | Just Do It </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
