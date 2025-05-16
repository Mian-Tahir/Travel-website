
import React, { useEffect } from 'react'

function Testimonial() {
  const testimonials = [
    {
      name: "Maria Lopez",
      location: "Barcelona, Spain",
      image: "assets/img/testimonial-1.jpg",
      review: "Working with this agency was a delightful experience! They took care of every detail and made my trip unforgettable.",
    },
    {
      name: "James Patel",
      location: "London, UK",
      image: "assets/img/testimonial-2.jpg",
      review: "Exceptional service and attention to detail. Highly recommend their travel planning expertise.",
    },
    {
      name: "Sophie Zhang",
      location: "Sydney, Australia",
      image: "assets/img/testimonial-3.jpg",
      review: "A seamless journey from start to finish. They really listened to what I wanted and delivered beyond expectations.",
    },
    {
      name: "Liam O'Connor",
      location: "Dublin, Ireland",
      image: "assets/img/testimonial-4.jpg",
      review: "Professional, friendly, and knowledgeable guides. This was the best vacation I've ever had!",
    },
  ];
  
  // Initialize WOW.js animations when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if WOW is available and initialize it
      if (window.WOW) {
        const wow = new window.WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: true
        });
        wow.init();
      }
    }
  }, []);
  
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Testimonial
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Testimonial
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          
          {/* Testimonials with animation similar to team section */}
          <div className="row g-4">
            {testimonials.map((item, index) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.1 + index * 0.2}s`}
                key={index}
              >
                <div className="testimonial-item bg-white text-center border p-4 h-100">
                  <div className="overflow-hidden mb-4">
                    <img
                      className="bg-white rounded-circle shadow p-1 mx-auto"
                      src={item.image}
                      style={{ width: 100, height: 100, objectFit: "cover" }}
                      alt={item.name}
                    />
                  </div>
                  <h5 className="mb-0 text-primary">{item.name}</h5>
                  <p className="text-muted mb-3">{item.location}</p>
                  <div className="testimonial-text bg-light p-3">
                    <p className="mb-0">"{item.review}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  )
}

export default Testimonial