import "../style/hero.css";
import { useNavigate } from "react-router-dom";

function Hero(){

  const navigate = useNavigate();

  return(
    <section className="hero">

      <div className="hero-content">

        <h1>
          Building Digital Experiences
          <span> That Grow Businesses</span>
        </h1>

        <p>
          AI Powered Web & Automation Solutions
        </p>

        <button
          onClick={()=>navigate("/contact")}
        >
          Get Started
        </button>

      </div>

    </section>
  );
}

export default Hero;