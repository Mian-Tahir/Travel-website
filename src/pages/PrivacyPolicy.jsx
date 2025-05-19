import React from 'react'

function PrivacyPolicy() {
  return (
    <div>
      {/* Header Start */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Privacy Policy
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Privacy Policy
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Privacy Policy Content Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                Privacy Policy
              </h6>
              <h1 className="mb-4">Your Privacy Matters to Us</h1>
              
              <div className="mb-4">
                <h5 className="text-primary">1. Information We Collect</h5>
                <p>At Tourist, we collect information that you provide directly to us, including:</p>
                <ul className="mb-4">
                  <li>Personal information (name, email address, phone number)</li>
                  <li>Travel preferences and requirements</li>
                  <li>Payment information for bookings</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="text-primary">2. How We Use Your Information</h5>
                <p>We use your information to:</p>
                <ul className="mb-4">
                  <li>Process your travel bookings and reservations</li>
                  <li>Send you travel updates and confirmations</li>
                  <li>Provide customer support and assistance</li>
                  <li>Send you promotional offers and newsletters (with your consent)</li>
                  <li>Improve our services and website experience</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="text-primary">3. Information Sharing</h5>
                <p>We may share your information with:</p>
                <ul className="mb-4">
                  <li>Travel service providers (hotels, airlines, tour operators)</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="text-primary">4. Data Security</h5>
                <p>We implement appropriate security measures to protect your personal information, including:</p>
                <ul className="mb-4">
                  <li>Encryption of sensitive data</li>
                  <li>Secure servers and networks</li>
                  <li>Regular security assessments</li>
                  <li>Limited access to personal information</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="text-primary">5. Your Rights</h5>
                <p>You have the right to:</p>
                <ul className="mb-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="text-primary">6. Contact Us</h5>
                <p>If you have any questions about our Privacy Policy, please contact us at:</p>
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
      {/* Privacy Policy Content End */}
    </div>
  )
}

export default PrivacyPolicy 