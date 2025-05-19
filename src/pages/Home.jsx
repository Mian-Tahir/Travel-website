import React, { useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const teamMembers = [
    {
      name: "John Doe",
      designation: "Senior Travel Guide",
      image: "assets/img/team-1.jpg",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Emily Smith",
      designation: "Adventure Specialist",
      image: "assets/img/team-2.jpg",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Carlos Mendes",
      designation: "Tour Coordinator",
      image: "assets/img/team-3.jpg",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Aisha Khan",
      designation: "Cultural Expert",
      image: "assets/img/team-4.jpg",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  ];
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
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Enjoy Your Vacation With Us
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
  Discover breathtaking destinations, plan your dream getaway, and let us turn your travel goals into unforgettable memories.
</p>

              <div className="position-relative w-75 mx-auto animated slideInDown">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Eg: Thailand"
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                  style={{ marginTop: 7 }}
                >
                  Search
                </button>
              </div>
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
            alt="Travel Experience"
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
              First-Class Flights
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
              <i className="fa fa-arrow-right text-primary me-2" />
              5-Star Accommodations
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
              150+ Premium City Tours
            </p>
          </div>
          <div className="col-sm-6">
            <p className="mb-0">
              <i className="fa fa-arrow-right text-primary me-2" />
              24/7 Customer Support
            </p>
          </div>
        </div>
        <a className="btn btn-primary py-3 px-5 mt-2" href="/about">
          Read More
        </a>
      </div>
    </div>
  </div>
</div>
{/* About End */}
{/* Service Start */}
<div className="container-xxl py-5">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center text-primary px-3">
        Services
      </h6>
      <h1 className="mb-5">Our Services</h1>
    </div>
    <div className="row g-4">
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item rounded pt-3 h-100">
          <div className="p-4 d-flex flex-column h-100">
            <i className="fa fa-3x fa-globe text-primary mb-4" />
            <h5>Worldwide Tours</h5>
            <p className="flex-grow-1">
              Discover stunning destinations around the world with carefully planned itineraries and expert guidance.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="service-item rounded pt-3 h-100">
          <div className="p-4 d-flex flex-column h-100">
            <i className="fa fa-3x fa-hotel text-primary mb-4" />
            <h5>Hotel Reservation</h5>
            <p className="flex-grow-1">
              Book from a selection of top-rated hotels with exclusive deals for the perfect stay anywhere you travel.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="service-item rounded pt-3 h-100">
          <div className="p-4 d-flex flex-column h-100">
            <i className="fa fa-3x fa-user text-primary mb-4" />
            <h5>Travel Guides</h5>
            <p className="flex-grow-1">
              Get insider knowledge and local insights from experienced guides for a truly immersive travel experience.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
        <div className="service-item rounded pt-3 h-100">
          <div className="p-4 d-flex flex-column h-100">
            <i className="fa fa-3x fa-cog text-primary mb-4" />
            <h5>Event Management</h5>
            <p className="flex-grow-1">
              Whether it's a wedding, conference, or special event, we handle all planning and logistics seamlessly.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item rounded pt-3 h-100">
          <div className="p-4 d-flex flex-column h-100">
            <i className="fa fa-3x fa-passport text-primary mb-4" />
            <h5>Visa Assistance</h5>
            <p className="flex-grow-1">
              Get professional help with visa processing and documentation to ensure a stress-free travel experience.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="service-item rounded pt-3 h-100">
          <div className="p-4 d-flex flex-column h-100">
            <i className="fa fa-3x fa-shield-alt text-primary mb-4" />
            <h5>Travel Insurance</h5>
            <p className="flex-grow-1">
              Stay protected with comprehensive travel insurance plans covering medical emergencies, cancellations, and more.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="service-item rounded pt-3 h-100">
          <div className="p-4 d-flex flex-column h-100">
            <i className="fa fa-3x fa-map-marked-alt text-primary mb-4" />
            <h5>Custom Itineraries</h5>
            <p className="flex-grow-1">
              Enjoy tailor-made itineraries based on your preferences, travel style, and unique needs for every journey.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
        <div className="service-item rounded pt-3 h-100">
          <div className="p-4 d-flex flex-column h-100">
            <i className="fa fa-3x fa-headset text-primary mb-4" />
            <h5>24/7 Support</h5>
            <p className="flex-grow-1">
              Our support team is always available to assist you before, during, and after your trip, anytime you need.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Service End */}

    {/* Destination Start */}
    <div className="container-xxl py-5 destination">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Destination
          </h6>
          <h1 className="mb-5">Popular Destination</h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              <div
                className="col-lg-12 col-md-12 wow zoomIn"
                data-wow-delay="0.1s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-1.jpg"
                    alt=""
                  />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    30% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Thailand
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.3s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-2.jpg"
                    alt=""
                  />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    25% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Malaysia
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.5s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-3.jpg"
                    alt=""
                  />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    35% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Australia
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 wow zoomIn"
            data-wow-delay="0.7s"
            style={{ minHeight: 350 }}
          >
            <a
              className="position-relative d-block h-100 overflow-hidden"
              href=""
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/destination-4.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                20% OFF
              </div>
              <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                Indonesia
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Destination Start */}
   {/* Package Start */}
<div className="container-xxl py-5">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center text-primary px-3">
        Packages
      </h6>
      <h1 className="mb-5">Awesome Packages</h1>
    </div>
    <div className="row g-4 justify-content-center">
      {/* Package 1 */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid" src="assets/img/package-1.jpg" alt="Thailand Package" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />Thailand
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />3 Days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />2 Person
            </small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">$149.00</h3>
            <div className="mb-3">
              <small className="fa fa-star text-warning" />
              <small className="fa fa-star text-warning" />
              <small className="fa fa-star text-warning" />
              <small className="fa fa-star text-warning" />
              <small className="fa fa-star text-warning" />
            </div>
            <p>
              Explore the beaches, temples, and vibrant culture of Thailand in this unforgettable 3-day escape.
            </p>
            <div className="d-flex justify-content-center mb-2">
              <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>
                Read More
              </a>
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Package 2 */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid" src="assets/img/package-2.jpg" alt="Indonesia Package" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />Indonesia
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />3 Days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />2 Person
            </small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">$139.00</h3>
            <div className="mb-3">
              <small className="fa fa-star text-warning" />
              <small className="fa fa-star text-warning" />
              <small className="fa fa-star text-warning" />
              <small className="fa fa-star text-warning" />
              <small className="fa fa-star text-warning" />
            </div>
            <p>
              Dive into Bali's scenic beauty and rich heritage with our crafted Indonesia travel package.
            </p>
            <div className="d-flex justify-content-center mb-2">
              <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>
                Read More
              </a>
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Package 3 */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img className="img-fluid" src="assets/img/package-3.jpg" alt="Malaysia Package" />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />Malaysia
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />3 Days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />2 Person
            </small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">$189.00</h3>
            <div className="mb-3">
              <small className="fa fa-star text-warning" />
              <small className="fa fa-star text-warning" />
              <small className="fa fa-star text-warning" />
              <small className="fa fa-star text-warning" />
              <small className="fa fa-star text-warning" />
            </div>
            <p>
              Enjoy the urban buzz of Kuala Lumpur and the serenity of Langkawi in this versatile travel plan.
            </p>
            <div className="d-flex justify-content-center mb-2">
              <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>
                Read More
              </a>
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
{/* Package End */}

{/* Booking Start */}
<div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container">
    <div className="booking p-5">
      <div className="row g-5 align-items-center">
        <div className="col-md-6 text-white">
          <h6 className="text-white text-uppercase">Booking</h6>
          <h1 className="text-white mb-4">Seamless Online Booking</h1>
          <p className="mb-4">
            Reserve your flights, hotels, and tours in just a few clicks with our intuitive booking platform. Enjoy transparent pricing and instant confirmations.
          </p>
          <p className="mb-4">
            Customize your itinerary by selecting dates, destinations, and special requests—our dedicated support team is here to ensure every detail exceeds your expectations.
          </p>
          <a className="btn btn-outline-light py-3 px-5 mt-2" href="#!">
            Learn More
          </a>
        </div>
        <div className="col-md-6">
          <h1 className="text-white mb-4">Book A Tour</h1>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div>
                  <input
                    type="text"
                    className="form-control bg-transparent"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <input
                    type="email"
                    className="form-control bg-transparent"
                    id="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="date">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="form-control bg-transparent"
                    placeholderText="Date & Time"
                    id="datetime"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <select
                    className="form-select bg-transparent"
                    id="select1"
                  >
                    <option value="" disabled selected>Select Destination</option>
                    <option value="1">Thailand</option>
                    <option value="2">Indonesia</option>
                    <option value="3">Malaysia</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div>
                  <textarea
                    className="form-control bg-transparent"
                    placeholder="Special Request"
                    id="message"
                    style={{ height: "100px" }}
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-outline-light w-100 py-3"
                  type="submit"
                >
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Booking End */}


    {/* Process Start */}
    <div className="container-xxl py-5">
  <div className="container">
    <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center text-primary px-3">
        Process
      </h6>
      <h1 className="mb-5">3 Easy Steps</h1>
    </div>
    <div className="row gy-5 gx-4 justify-content-center">
      <div
        className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="position-relative border border-primary pt-5 pb-4 px-4">
          <div
            className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
            style={{ width: 100, height: 100 }}
          >
            <i className="fa fa-globe fa-3x text-white" />
          </div>
          <h5 className="mt-4">Choose A Destination</h5>
          <hr className="w-25 mx-auto bg-primary mb-1" />
          <hr className="w-50 mx-auto bg-primary mt-0" />
          <p className="mb-0">
            Pick from a wide range of stunning locations tailored to your travel style. Beaches, mountains or cities, we have the right spot for every explorer.
          </p>
        </div>
      </div>
      <div
        className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <div className="position-relative border border-primary pt-5 pb-4 px-4">
          <div
            className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
            style={{ width: 100, height: 100 }}
          >
            <i className="fa fa-dollar-sign fa-3x text-white" />
          </div>
          <h5 className="mt-4">Pay Online</h5>
          <hr className="w-25 mx-auto bg-primary mb-1" />
          <hr className="w-50 mx-auto bg-primary mt-0" />
          <p className="mb-0">
            Confirm your trip instantly with our simple, secure checkout. Multiple payment options ensure your booking process is quick, safe, and hassle-free.
          </p>
        </div>
      </div>
      <div
        className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
        data-wow-delay="0.5s"
      >
        <div className="position-relative border border-primary pt-5 pb-4 px-4">
          <div
            className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
            style={{ width: 100, height: 100 }}
          >
            <i className="fa fa-plane fa-3x text-white" />
          </div>
          <h5 className="mt-4">Fly Today</h5>
          <hr className="w-25 mx-auto bg-primary mb-1" />
          <hr className="w-50 mx-auto bg-primary mt-0" />
          <p className="mb-0">
            Get ready for takeoff with your itinerary in hand. With full support and real-time updates, you're all set to begin your unforgettable journey.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    {/* Process Start */}
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
