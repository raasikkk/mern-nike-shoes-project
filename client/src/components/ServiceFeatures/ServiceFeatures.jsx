import "./serviceFeatures.css";

const ServiceFeatures = () => {
  return (
    <section>
      <div className="service-features">
        <div className="item-service-features">
          <div className="icon-service-features">
            <img src="/encrypted-icon.svg" alt="Secure" />
          </div>
          <div className="content-service-features">
            <h2>Secure Payments</h2>
            <p>Secure an order</p>
          </div>
        </div>

        <div className="item-service-features">
          <div className="icon-service-features">
            <img src="/autorenew-icon.svg" alt="24/7" />
          </div>
          <div className="content-service-features">
            <h2>24/7 Support</h2>
            <p>Contact us any time</p>
          </div>
        </div>

        <div className="item-service-features">
          <div className="icon-service-features">
            <img
              src="/delivery-truck-speed-icon.svg"
              alt="Delivery Truck Speed"
            />
          </div>
          <div className="content-service-features">
            <h2>Fast delivery</h2>
            <p>Fast delivery on order</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
