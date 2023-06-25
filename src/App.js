import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './MainPage.css';

// Header component
const Header = () => {
  return (
    <header className="header">
      <Navbar />
    </header>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
          <img src="logo.png" alt="Logo" className="logo" />
          <h1 className="logo-text">Babysitting Services</h1>
        </div>
      <div className="navbar-container">
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#363535" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="menu">
          <ul className="menu-list">
            <li className="menu-item">
              <a href="/">Home</a>
            </li>
            <li className="menu-item">
              <a href="/about">About</a>
            </li>
            <li className="menu-item">
              <a href="/services">Services</a>
            </li>
            <li className="menu-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

// MainPage component
const MainPage = () => {
  const slides = [
    'Connecting Families with Trusted Child Carers',
    'Discover the Perfect Care for Your Child',
    'Join Our Community of Caring Parents',
    'Quality Childcare Services at Your Fingertips',
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomSlide = Math.floor(Math.random() * slides.length);
      setActiveSlide(randomSlide);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="main-page">
      <video src="video.mp4" autoPlay loop muted className="video" />
      <div className="overlay">
        <h1 className="overlay-text">
          {slides[activeSlide]}
        </h1>
      </div>
    </main>
  );
};

const AboutUs = () => {
  return (
    <section className="about-us-section">
    <h2 className="about-us-heading">About Us</h2>
    <div className="about-us-content">
      <div className="about-us-image">
        <img src="aboutpic.webp" alt="About Us" />
      </div>
      <div className="about-us-description">
        <h3 className="about-us-subheading">Who We Are</h3>
        <p className="about-us-text">
        Pookie is a babysitting-as-a-service brand that targets parents who need specialized or non-specialized care for their children while they're at work or other engagements, parents that need additional care-giving time for their kids and families whose children with disabilities require attention and specialized care.
        </p>
        <p className="about-us-text">
          {/* Integer finibus, mauris eget feugiat lacinia, urna risus suscipit massa, in dignissim velit nunc et lectus. Morbi dapibus nunc id finibus scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi vitae felis sit amet mi commodo feugiat nec a elit. Sed euismod, felis vel tempor rutrum, velit orci gravida elit, non dignissim sapien risus nec lorem. */}
        </p>
      </div>
    </div>
  </section>
  );
};

// HowItWorks component
const HowItWorks = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    const steps = stepsRef.current;
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    steps.forEach((step) => {
      observer.observe(step);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-grid">
        <div className="step" ref={(el) => (stepsRef.current[0] = el)}>
          <img src="hiw1.jpg" alt="Step 1" />
          <h3>Step 1</h3>
          <p>Sign up and create an account.</p>
        </div>
        <div className="step" ref={(el) => (stepsRef.current[1] = el)}>
          <img src="hiw2.avif" alt="Step 2" />
          <h3>Step 2</h3>
          <p>Search and select a babysitter.</p>
        </div>
        <div className="step" ref={(el) => (stepsRef.current[2] = el)}>
          <img src="hiw3.jpg" alt="Step 3" />
          <h3>Step 3</h3>
          <p>Book and enjoy your free time!</p>
        </div>
      </div>
    </section>
  );
};

// Pricing component
const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <h2 className="section-title">Pricing</h2>
      <div className="pricing-grid">
        <div className="pricing-option">
          <h3 className="pricing-title">Standard</h3>
          <p className="pricing-price">$29<span className="pricing-period">/hour</span></p>
          <ul className="pricing-features">
            <li>Experienced babysitters</li>
            <li>Flexible booking options</li>
            <li>Background checked</li>
            <li>Customer support</li>
          </ul>
          <button className="pricing-button">Get Started</button>
        </div>

        {/* Repeat the above pricing block for additional pricing options */}
        <div className="pricing-option">
          {/* Pricing details */}
        </div>

        <div className="pricing-option">
          {/* Pricing details */}
        </div>
      </div>
    </section>
  );
};

// FAQs component
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How do I create an account?',
      answer: 'To create an account, go to our website and click on the "Sign Up" button. Fill in the required information and follow the instructions to complete the account creation process.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept payments via credit card, debit card, and PayPal. Simply choose your preferred payment method during the checkout process.',
    },
    {
      question: 'Can I cancel a booking?',
      answer: 'Yes, you can cancel a booking. Please refer to our cancellation policy for more information on the cancellation process and any applicable fees.',
    },
  ];

  return (
    <section className="faq-section">
      <h2 className="section-title">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item" onClick={() => toggleAccordion(index)}>
          <div className={`faq-question ${activeIndex === index ? 'active' : ''}`}>
            <h3 className="faq-question-text">{item.question}</h3>
            <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

// ContactUs component
const ContactUs = () => {
  return (
    <section className="contact-section">
      <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '30px' }}>Contact Us</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ flex: '1', maxWidth: '500px', paddingLeft: '40px' }}>
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="name" style={{ marginBottom: '10px' }}>Name:</label>
            <input type="text" id="name" name="name" style={{ marginBottom: '20px', padding: '10px' }} />

            <label htmlFor="email" style={{ marginBottom: '10px' }}>Email:</label>
            <input type="email" id="email" name="email" style={{ marginBottom: '20px', padding: '10px' }} />

            <label htmlFor="message" style={{ marginBottom: '10px' }}>Message:</label>
            <textarea id="message" name="message" rows="4" style={{ marginBottom: '20px', padding: '10px' }}></textarea>

            <button type="submit" style={{ padding: '10px 20px', alignSelf: 'flex-start' }}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const DownloadMobileApp = () => {
  return (
    <section style={{ background: '#f7a1c5', color: '#363535', padding: '50px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '30px' }}>Download Our Mobile App</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', maxWidth: '400px', marginRight: '20px', marginBottom: '20px' }}>
          <img src="apple.png" alt="App Store" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div style={{ flex: '1', maxWidth: '400px' }}>
          <img src="google.png" alt="Play Store" style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <img src="app.png" alt="App Store" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
      </div>
    </section>
  );
};


// App component
const App = () => {
  return (
    <div className="App">
      
      <Header />
      <MainPage />
      <AboutUs />
      <HowItWorks />
      <Pricing />
      <DownloadMobileApp />
      <FAQs />
      <ContactUs />
    </div>
  );
};

export default App;
