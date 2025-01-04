import "./collection.css";
import { Link } from "react-router";

const Collection = () => {
  return (
    <section>
      <div className="section-collection">
        <div className="title-collection">
          <h1>Our Collection</h1>
        </div>
        <div className="items-container-collection"> 
          <Link to="/">
            <div className="item-collection">
              <img
                src="/nike_dunk_low_retro.png"
                alt="nike_dunk_low_retro_mens"
              ></img>
              <div className="desc-item-collection">
                <h2>Nike Dunk Low Retro</h2>
                <p>$129.99</p>
              </div>
            </div>
          </Link>
          
          <Link to="/">
            <div className="item-collection">
              <img
                src="/nike_dunk_low_retro.png"
                alt="nike_dunk_low_retro_mens"
              ></img>
              <div className="desc-item-collection">
                <h2>Nike Dunk Low Retro</h2>
                <p>$129.99</p>
              </div>
            </div>
          </Link>
          
          <Link to="/">
            <div className="item-collection">
              <img
                src="/nike_dunk_low_retro.png"
                alt="nike_dunk_low_retro_mens"
              ></img>
              <div className="desc-item-collection">
                <h2>Nike Dunk Low Retro</h2>
                <p>$129.99</p>
              </div>
            </div>
          </Link>
          
          <Link to="/">
            <div className="item-collection">
              <img
                src="/nike_dunk_low_retro.png"
                alt="nike_dunk_low_retro_mens"
              ></img>
              <div className="desc-item-collection">
                <h2>Nike Dunk Low Retro</h2>
                <p>$129.99</p>
              </div>
            </div>
          </Link>
          
          <Link to="/">
            <div className="item-collection">
              <img
                src="/nike_dunk_low_retro.png"
                alt="nike_dunk_low_retro_mens"
              ></img>
              <div className="desc-item-collection">
                <h2>Nike Dunk Low Retro</h2>
                <p>$129.99</p>
              </div>
            </div>
          </Link>
          
          <Link to="/">
            <div className="item-collection">
              <img
                src="/nike_dunk_low_retro.png"
                alt="nike_dunk_low_retro_mens"
              ></img>
              <div className="desc-item-collection">
                <h2>Nike Dunk Low Retro</h2>
                <p>$129.99</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="button-collection">
          <Link to="/catalog">
            <button>
              See All
              <img src="/arrow_right.svg"></img>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collection;
