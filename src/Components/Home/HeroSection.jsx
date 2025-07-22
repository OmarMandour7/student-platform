import backgroundImage from '../../images/Hero.jpg';

export default function Hero() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '500px',
    color: '#fff',
  };

  return (
    <section style={sectionStyle} className="d-flex align-items-center overlay mich">
      <div className="container position-relative py-5">
        <div className="col-md-8 position-absolute " style={{left :"20%"}}>
          <h1 className="display-5 fw-bold"> Start Your Learning  </h1>
          <p className="mt-3">
          An interactive learning platform that helps you watch educational videos, solve activities, and progress in your academic journey.
          </p>
        </div>
      </div>
    </section>
  );
}
