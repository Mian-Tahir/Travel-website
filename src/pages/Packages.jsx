import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Packages() {

  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  return (
    <div>
          <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            Packages
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
                Packages
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
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
              <a href="/packages/thailand" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>
                Read More
              </a>
              <a href="/booking/thailand" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>
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
              <a href="/packages/indonesia" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>
                Read More
              </a>
              <a href="/booking/indonesia" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>
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
              <a href="/packages/malaysia" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>
                Read More
              </a>
              <a href="/booking/malaysia" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>
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
          <a className="btn btn-outline-light py-3 px-5 mt-2" href="/booking">
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
    {/* Booking Start */}
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
    </div>
  )
}

export default Packages