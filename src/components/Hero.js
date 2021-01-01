import HeroImage from "../images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>More than just shorter links</h1>
        <h5>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </h5>
        <a href="#" className="get-started-btn">
          Get Started
        </a>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
