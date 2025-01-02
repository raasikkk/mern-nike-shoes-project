import "./hero.css";

const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Find your dream pair</h1>
          <p>{`Find your dream sneakers and elevate your style with Nike's exclusive collections.`}</p>
          <button className="hero-button">Explore More</button>
        </div>
        <div className="hero-image">
          <img src="/hero-image.png" alt="Hero image"></img>
          <p className="hero-image-title title-shoe">NIKE SB DUNK</p>
          <p className="hero-image-title title-discount">30%<br></br>Discount</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
