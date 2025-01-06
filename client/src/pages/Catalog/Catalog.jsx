// import styles from "./catalog.module.css";
import CatalogItems from "../../components/CatalogItems/CatalogItems.jsx";
import CatalogSidebar from "../../components/CatalogSidebar/CatalogSidebar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";

const Catalog = () => {
  return (
    <>
      <Header />
      <div className="flex gap-8 sm:flex-col sm:px-0 sm:py-5 lg:flex-row lg:px-[7vw] lg:py-12">
        <CatalogSidebar/>
        <div>
          <CatalogItems />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
