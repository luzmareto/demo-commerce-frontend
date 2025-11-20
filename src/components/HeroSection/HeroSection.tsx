import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

function HeroSection(props: HeroSectionProps) {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row align-items-center justify-content-between">

          {/* TEXT AREA */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="intro-excerpt">
              <h1>{props.title}</h1>
              <p className="mb-4">{props.subtitle}</p>
              <p>
                <Link to="/shop" className="btn btn-secondary me-2">
                  Belanja Sekarang
                </Link>
              </p>
            </div>
          </div>

          {/* IMAGE AREA */}
          <div className="col-12 col-md-6 col-lg-7">
            <div className="hero-img-wrap">
              <img src="/images/couch.png" className="img-fluid hero-img" alt="Couch" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;
