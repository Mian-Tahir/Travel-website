import React from 'react'

function About() {

  const teamMembers = [
    {
      name: "John Doe",
      designation: "Senior Travel Guide",
      image: "assets/img/team-1.jpg",
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "Emily Smith",
      designation: "Adventure Specialist",
      image: "assets/img/team-2.jpg",
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "Carlos Mendes",
      designation: "Tour Coordinator",
      image: "assets/img/team-3.jpg",
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "Aisha Khan",
      designation: "Cultural Expert",
      image: "assets/img/team-4.jpg",
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  ];
  return (
    <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            About Us
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              {/* <li className="breadcrumb-item">
                <a href="/Pages">Pages</a>
              </li> */}
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
        
            {/* About Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: 400 }}
          >
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/about.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              About Us
            </h6>
            <h1 className="mb-4">
              Welcome to <span className="text-primary">Tourist</span>
            </h1>
            <p className="mb-4">
          At Tourist, we believe that travel is more than just visiting new
          places—it's about creating lifelong memories. Whether you're
          seeking adventure, relaxation, or cultural discovery, we provide
          tailor-made experiences that fit your style and budget.
        </p>
        <p className="mb-4">
          With a dedicated team of travel experts and a network of trusted
          partners worldwide, we ensure every journey is smooth, safe, and
          unforgettable. Let us handle the planning while you enjoy the
          journey.
        </p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  First Class Flights
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Handpicked Hotels
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />5 Star
                  Accommodations
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Latest Model Vehicles
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  150 Premium City Tours
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  24/7 Service
                </p>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Team Start */}
    <div className="container-xxl py-5">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center text-primary px-3">
        Travel Guide
      </h6>
      <h1 className="mb-5">Meet Our Guide</h1>
    </div>
    <div className="row g-4">
      {teamMembers.map((member, index) => (
        <div
          className="col-lg-3 col-md-6 wow fadeInUp"
          data-wow-delay={`${0.1 + index * 0.2}s`}
          key={index}
        >
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src={member.image} alt={member.name} />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-19px" }}
            >
              <a className="btn btn-square mx-1" href={member.facebook}>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square mx-1" href={member.twitter}>
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square mx-1" href={member.instagram}>
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">{member.name}</h5>
              <small>{member.designation}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    {/* Team End */}
    </div>
  )
}

export default About