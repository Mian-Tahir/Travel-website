import React from 'react';

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
  {
    name: "Liam Chen",
    designation: "Wildlife Tracker",
    image: "assets/img/team-2.jpg",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Sofia Garcia",
    designation: "Mountain Guide",
    image: "assets/img/team-3.jpg",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Noah Patel",
    designation: "Local Expert",
    image: "assets/img/team-4.jpg",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Mia Brown",
    designation: "Eco-Tour Specialist",
    image: "assets/img/team-1.jpg",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
];

function Team() {
  return (
    <div>
      {/* Hero Header */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">Guides</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Travel Guides
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
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
      {/* End Team Section */}
    </div>
  );
}

export default Team;
