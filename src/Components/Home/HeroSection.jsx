import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import heroSmall from "../../images/Hero-768.webp";
import heroMedium from "../../images/Hero-1280.webp";
import heroLarge from "../../images/Hero.webp";
export default function Hero() {

  return (
    <section
      className="d-flex align-items-center justify-center mich position-relative"
      style={{ minHeight: "100vh", color: "#fff", overflow: "hidden" }}
    >
      {/* صورة الخلفية */}
      <LazyLoadImage
        src={heroLarge}
        srcSet={`${heroSmall} 768w, ${heroMedium} 1280w, ${heroLarge} 1920w`}
        alt="Hero Background"
        placeholderSrc={heroSmall}  
        effect="blur"
        width="1920"
        height="1080"
        wrapperClassName="position-absolute top-0 start-0 w-100 h-100"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
          zIndex: 0,
        }}
      />

      {/* النص */}
      <div className="container position-relative text-center" style={{ zIndex: 1 }}>
        <h1
          className="display-4 fw-bold mb-3"
          style={{ animation: "fadeInUp 1s ease-in-out" }}
        >
          Start Your Learning
        </h1>
        <p
          className="lead"
          style={{ maxWidth: "700px", margin: "0 auto", animation: "fadeInUp 1.5s ease-in-out" }}
        >
          An interactive learning platform that helps you watch educational
          videos, solve activities, and progress in your academic journey.
        </p>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}
