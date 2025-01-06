import "./catalog.css";
import CatalogItems from "../../components/CatalogItems/CatalogItems.jsx";
import CatalogSidebar from "../../components/CatalogSidebar/CatalogSidebar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";

const Catalog = () => {
  return (
    <>
      <Header />
      <div className="360:px-[2.5vw] 360:py-4 360:border-b border-gray-400
        lg:px-[7vw] lg:py-10 lg:border-none">
        <h1 className="font-medium 360:text-base lg:text-3xl">Shoes and Sneakers (100)</h1>
      </div>
      <div className="flex 360:flex-col lg:flex-row lg:px-[7vw] lg:py-3">
        <div className="360:py-4 lg:py-0">
          <CatalogSidebar />
        </div>
        <div className="lg:ml-10">
          <CatalogItems />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
