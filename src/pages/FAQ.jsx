import React, { useState } from 'react';

const faqData = [
  {
    question: 'How do I book a tour with Tourist?',
    answer: 'You can book a tour directly on our website by selecting your desired package and following the booking instructions. For assistance, contact our support team.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards, debit cards, and secure online payment methods. All transactions are encrypted for your security.'
  },
  {
    question: 'Can I customize my travel package?',
    answer: 'Absolutely! We offer tailor-made experiences. Contact us with your preferences and our team will help you create a personalized itinerary.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations must be made in writing. Refunds depend on the timing of your cancellation and the terms of your selected package. Please refer to our Terms & Conditions for details.'
  },
  {
    question: 'Do you offer travel insurance?',
    answer: 'We strongly recommend purchasing travel insurance. While we do not sell insurance directly, we can guide you to trusted providers.'
  },
  {
    question: 'Are your tours suitable for families?',
    answer: 'Yes, we offer a variety of family-friendly tours and can accommodate special requests for children and seniors.'
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can reach us via email at support@yourtravelco.com or call us at +012 345 67890. Our team is available 24/7.'
  },
  {
    question: 'What safety measures are in place for COVID-19?',
    answer: 'We follow all local and international guidelines to ensure your safety, including sanitization, social distancing, and flexible booking policies.'
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split questions into two columns
  const leftQuestions = faqData.slice(0, 4);
  const rightQuestions = faqData.slice(4, 8);

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* Header Start */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                FAQs & Help
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    FAQs
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* FAQ Content Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-12 text-center">
              <h6 className="section-title bg-white d-inline-block px-3 mb-4" style={{ color: '#86B817', fontWeight: 700, fontSize: '1.5rem' }}>
                Frequently Asked Questions
              </h6>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              {leftQuestions.map((faq, index) => {
                const realIndex = index;
                return (
                  <div key={realIndex} className="mb-3">
                    <div
                      className="shadow-sm rounded-3"
                      style={{ background: '#fff', border: '1px solid #e9ecef', transition: 'box-shadow 0.3s', boxShadow: openIndex === realIndex ? '0 4px 24px rgba(134,184,23,0.10)' : '0 1px 4px rgba(0,0,0,0.03)' }}
                    >
                      <button
                        className="w-100 d-flex justify-content-between align-items-center border-0 bg-transparent px-4 py-4"
                        style={{ outline: 'none', fontWeight: 600, fontSize: '1.1rem', color: '#222', cursor: 'pointer' }}
                        onClick={() => toggleFAQ(realIndex)}
                        aria-expanded={openIndex === realIndex}
                        aria-controls={`faq-body-${realIndex}`}
                      >
                        <span style={{ color: '#86B817' }}>{faq.question}</span>
                        <span
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            background: '#86B817',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.3s',
                            transform: openIndex === realIndex ? 'rotate(45deg)' : 'none',
                          }}
                        >
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7.5" y="3" width="3" height="12" rx="1.5" fill="#fff"/>
                            <rect x="3" y="10.5" width="3" height="12" rx="1.5" transform="rotate(-90 3 10.5)" fill="#fff"/>
                          </svg>
                        </span>
                      </button>
                      <div
                        id={`faq-body-${realIndex}`}
                        className="px-4"
                        style={{
                          maxHeight: openIndex === realIndex ? 200 : 0,
                          overflow: 'hidden',
                          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          background: '#f8f9fa',
                        }}
                      >
                        <div style={{ opacity: openIndex === realIndex ? 1 : 0, transition: 'opacity 0.3s', padding: openIndex === realIndex ? '16px 0' : '0' }}>
                          <span style={{ color: '#555', fontSize: '1rem' }}>{faq.answer}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-lg-6">
              {rightQuestions.map((faq, index) => {
                const realIndex = index + 4;
                return (
                  <div key={realIndex} className="mb-3">
                    <div
                      className="shadow-sm rounded-3"
                      style={{ background: '#fff', border: '1px solid #e9ecef', transition: 'box-shadow 0.3s', boxShadow: openIndex === realIndex ? '0 4px 24px rgba(134,184,23,0.10)' : '0 1px 4px rgba(0,0,0,0.03)' }}
                    >
                      <button
                        className="w-100 d-flex justify-content-between align-items-center border-0 bg-transparent px-4 py-4"
                        style={{ outline: 'none', fontWeight: 600, fontSize: '1.1rem', color: '#222', cursor: 'pointer' }}
                        onClick={() => toggleFAQ(realIndex)}
                        aria-expanded={openIndex === realIndex}
                        aria-controls={`faq-body-${realIndex}`}
                      >
                        <span style={{ color: '#86B817' }}>{faq.question}</span>
                        <span
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            background: '#86B817',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.3s',
                            transform: openIndex === realIndex ? 'rotate(45deg)' : 'none',
                          }}
                        >
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7.5" y="3" width="3" height="12" rx="1.5" fill="#fff"/>
                            <rect x="3" y="10.5" width="3" height="12" rx="1.5" transform="rotate(-90 3 10.5)" fill="#fff"/>
                          </svg>
                        </span>
                      </button>
                      <div
                        id={`faq-body-${realIndex}`}
                        className="px-4"
                        style={{
                          maxHeight: openIndex === realIndex ? 200 : 0,
                          overflow: 'hidden',
                          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          background: '#f8f9fa',
                        }}
                      >
                        <div style={{ opacity: openIndex === realIndex ? 1 : 0, transition: 'opacity 0.3s', padding: openIndex === realIndex ? '16px 0' : '0' }}>
                          <span style={{ color: '#555', fontSize: '1rem' }}>{faq.answer}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Content End */}
    </div>
  );
}

export default FAQ; 