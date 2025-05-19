import React from 'react'

function TermsConditions() {
  return (
    <div>
      {/* Header Start */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Terms & Conditions
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Terms & Conditions
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Terms & Conditions Content Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                Terms & Conditions
              </h6>
              <h1 className="mb-4">Booking Terms and Conditions</h1>

              <div className="mb-4">
                <h5 className="text-primary">1. Booking and Reservations</h5>
                <p>By making a booking with Tourist, you agree to:</p>
                <ul className="mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Pay the full amount for your booking</li>
                  <li>Comply with all travel requirements and restrictions</li>
                  <li>Accept our cancellation and refund policies</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="text-primary">2. Payment Terms</h5>
                <p>Our payment terms include:</p>
                <ul className="mb-4">
                  <li>Full payment is required to confirm bookings</li>
                  <li>We accept major credit cards and secure payment methods</li>
                  <li>Prices are subject to change until booking is confirmed</li>
                  <li>Additional fees may apply for special requests or services</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="text-primary">3. Cancellation Policy</h5>
                <p>Cancellation terms:</p>
                <ul className="mb-4">
                  <li>Cancellations must be made in writing</li>
                  <li>Refund amounts depend on cancellation timing</li>
                  <li>Some bookings may be non-refundable</li>
                  <li>Force majeure events may affect cancellation terms</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="text-primary">4. Travel Insurance</h5>
                <p>We strongly recommend:</p>
                <ul className="mb-4">
                  <li>Purchasing comprehensive travel insurance</li>
                  <li>Coverage for medical emergencies and trip cancellation</li>
                  <li>Insurance for personal belongings and travel documents</li>
                  <li>Understanding your insurance policy terms</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="text-primary">5. Travel Requirements</h5>
                <p>Travelers must:</p>
                <ul className="mb-4">
                  <li>Possess valid travel documents and visas</li>
                  <li>Comply with destination country regulations</li>
                  <li>Meet health and vaccination requirements</li>
                  <li>Follow local laws and customs</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="text-primary">6. Our Services</h5>
                <p>Tourist provides:</p>
                <ul className="mb-4">
                  <li>Travel booking and reservation services</li>
                  <li>Tour packages and customized itineraries</li>
                  <li>24/7 customer support</li>
                  <li>Travel assistance and guidance</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="text-primary">7. Liability</h5>
                <p>Our liability is limited to:</p>
                <ul className="mb-4">
                  <li>Direct damages caused by our negligence</li>
                  <li>Maximum liability as per applicable laws</li>
                  <li>Exclusions for force majeure events</li>
                  <li>Third-party service provider limitations</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="text-primary">8. Contact Information</h5>
                <p>For any questions regarding these terms, please contact:</p>
                <p className="mb-0">
                  <i className="fa fa-envelope me-2 text-primary"></i>
                  support@yourtravelco.com
                </p>
                <p className="mb-0">
                  <i className="fa fa-phone-alt me-2 text-primary"></i>
                  +012 345 67890
                </p>
              </div>

              <div className="mt-4">
                <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Terms & Conditions Content End */}
    </div>
  )
}

export default TermsConditions 