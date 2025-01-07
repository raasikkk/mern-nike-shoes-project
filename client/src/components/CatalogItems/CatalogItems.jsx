import "./catalogItems.css";
import { Link } from "react-router";

const CatalogItems = () => {
  return (
    <section>
      <div className="flex flex-wrap justify-between mb-6">

        <div className="catalog-item mb-6">
          <Link to="/">
            <div>
              <img
                className="360:w-[49.5vw] lg:w-[19vw]"
                src="/nike_dunk_low_retro.png"
                alt="nike_shoe_image"
              ></img>
            </div>
            <div className="mt-2 360:ml-2 lg-ml-0">
                <h2 className="text-base font-medium">Nike Dunk Low Retro</h2>
                <p className="text-sm text-gray-500">Shoes</p>
                <p className="text-sm text-gray-500 mt-1">Men's</p>
                <h2 className="text-base font-medium mt-1">$130</h2>
            </div>
          </Link>
        </div>

        <div className="catalog-item mb-6">
          <Link to="/">
            <div>
              <img
                className="360:w-[49.5vw] lg:w-[19vw]"
                src="/nike_dunk_low_retro.png"
                alt="nike_shoe_image"
              ></img>
            </div>
            <div className="mt-2 360:ml-2 lg-ml-0">
                <h2 className="text-base font-medium">Nike Dunk Low Retro</h2>
                <p className="text-sm text-gray-500">Shoes</p>
                <p className="text-sm text-gray-500 mt-1">Men's</p>
                <h2 className="text-base font-medium mt-1">$130</h2>
            </div>
          </Link>
        </div>

        <div className="catalog-item mb-6">
          <Link to="/">
            <div>
              <img
                className="360:w-[49.5vw] lg:w-[19vw]"
                src="/nike_dunk_low_retro.png"
                alt="nike_shoe_image"
              ></img>
            </div>
            <div className="mt-2 360:ml-2 lg-ml-0">
                <h2 className="text-base font-medium">Nike Dunk Low Retro</h2>
                <p className="text-sm text-gray-500">Shoes</p>
                <p className="text-sm text-gray-500 mt-1">Men's</p>
                <h2 className="text-base font-medium mt-1">$130</h2>
            </div>
          </Link>
        </div>

        <div className="catalog-item mb-6">
          <Link to="/">
            <div>
              <img
                className="360:w-[49.5vw] lg:w-[19vw]"
                src="/nike_dunk_low_retro.png"
                alt="nike_shoe_image"
              ></img>
            </div>
            <div className="mt-2 360:ml-2 lg-ml-0">
                <h2 className="text-base font-medium">Nike Dunk Low Retro</h2>
                <p className="text-sm text-gray-500">Shoes</p>
                <p className="text-sm text-gray-500 mt-1">Men's</p>
                <h2 className="text-base font-medium mt-1">$130</h2>
            </div>
          </Link>
        </div>

        <div className="catalog-item mb-6">
          <Link to="/">
            <div>
              <img
                className="360:w-[49.5vw] lg:w-[19vw]"
                src="/nike_dunk_low_retro.png"
                alt="nike_shoe_image"
              ></img>
            </div>
            <div className="mt-2 360:ml-2 lg-ml-0">
                <h2 className="text-base font-medium">Nike Dunk Low Retro</h2>
                <p className="text-sm text-gray-500">Shoes</p>
                <p className="text-sm text-gray-500 mt-1">Men's</p>
                <h2 className="text-base font-medium mt-1">$130</h2>
            </div>
          </Link>
        </div>

        <div className="catalog-item mb-6">
          <Link to="/">
            <div>
              <img
                className="360:w-[49.5vw] lg:w-[19vw]"
                src="/nike_dunk_low_retro.png"
                alt="nike_shoe_image"
              ></img>
            </div>
            <div className="mt-2 360:ml-2 lg-ml-0">
                <h2 className="text-base font-medium">Nike Dunk Low Retro</h2>
                <p className="text-sm text-gray-500">Shoes</p>
                <p className="text-sm text-gray-500 mt-1">Men's</p>
                <h2 className="text-base font-medium mt-1">$130</h2>
            </div>
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default CatalogItems;
