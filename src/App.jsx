import React, { useState, useEffect } from 'react';
import './index.css';
import {
  FaCoffee,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaBars,
  FaTimes,
  FaStar,
  FaStarHalfAlt
} from 'react-icons/fa';

import dumTeaImg from './assets/picks/dum_tea.png';
import filterCoffeeImg from './assets/picks/filter_coffee.png';
import mangoMilkshakeImg from './assets/picks/mango_milkshake.png';
import dryFruitLassiImg from './assets/picks/dry_fruit_lassi.png';
import greenAppleMocktailImg from './assets/picks/green_apple_mocktail.png';
import regularTeaImg from './assets/picks/regular_tea.png';
import masalaTeaImg from './assets/picks/masala_tea.png';
import hotMilkImg from './assets/picks/hot_milk.png';
import chocolateMilkshakeImg from './assets/picks/chocolate_milkshake.png';
import sweetLassiImg from './assets/picks/sweet_lassi.png';
import lemonSodaImg from './assets/picks/lemon_soda.png';
import allamTeaImg from './assets/picks/allam_tea.png';
import lemonTeaImg2 from './assets/picks/lemon_tea.png';
import blackTeaImg from './assets/picks/black_tea.png';
import greenTeaImg2 from './assets/picks/green_tea.png';
import elachiTeaImg from './assets/picks/elachi_tea.png';
import normalCoffeeImg from './assets/picks/normal_coffee.png';
import blackCoffeeImg from './assets/picks/black_coffee.png';
import coldCoffeeImg from './assets/picks/cold_coffee.png';
import haldiMilkImg from './assets/picks/haldi_milk.png';
import badamMilkImg from './assets/picks/badam_milk.png';
import boostDrinkImg from './assets/picks/boost_drink.png';
import horlicksImg from './assets/picks/horlicks.png';
import bournvitaImg from './assets/picks/bournvita.png';
import butterscotchShakeImg from './assets/picks/butterscotch_shake.png';
import vanillaShakeImg from './assets/picks/vanilla_shake.png';
import strawberryShakeImg from './assets/picks/strawberry_shake.png';
import oreoShakeImg from './assets/picks/oreo_shake.png';
import kitkatShakeImg from './assets/picks/kitkat_shake.png';
import munchShakeImg from './assets/picks/munch_shake.png';
import mangoLassiImg from './assets/picks/mango_lassi.png';
import strawberryLassiImg from './assets/picks/strawberry_lassi.png';
import roohAfzaLassiImg from './assets/picks/rooh_afza_lassi.png';
import badamLassiImg from './assets/picks/badam_lassi.png';
import butterscotchLassiImg from './assets/picks/butterscotch_lassi.png';
import masalaSodaImg from './assets/picks/masala_soda.png';
import blackCurrantMocktailImg from './assets/picks/black_currant_mocktail.png';
import magicLimeMintImg from './assets/picks/magic_lime_mint.png';
import litchiCrushImg from './assets/picks/litchi_crush.png';
import gallery1Img from './assets/picks/gallery_1.png';
import gallery2Img from './assets/picks/gallery_2.png';
import gallery3Img from './assets/picks/gallery_3.png';
import gallery4Img from './assets/picks/gallery_4.png';

// Data Arrays
const topPicksItems = [
  { id: 'tp1', name: 'Special Dum Tea', description: 'Traditional slow-brewed tea (Chef\'s Special)', price: '₹15/-', img: dumTeaImg },
  { id: 'tp2', name: 'Authentic Filter Coffee', description: 'Authentic South Indian filter coffee', price: '₹25/-', img: filterCoffeeImg },
  { id: 'tp3', name: 'Mango Milkshake', description: 'Thick, creamy mango delight', price: '₹59/-', img: mangoMilkshakeImg },
  { id: 'tp4', name: 'Dry Fruit Lassi', description: 'Rich lassi loaded with dry fruits', price: '₹70/-', img: dryFruitLassiImg },
  { id: 'tp5', name: 'Green Apple Mocktail', description: 'Refreshing crisp green apple mocktail', price: '₹40/-', img: greenAppleMocktailImg },
];

const teaItems = [
  { id: 't1', name: 'Single Tea', description: 'Classic refreshing tea', price: '₹12/-', img: regularTeaImg },
  { id: 't2', name: 'Dum Tea', description: 'Traditional slow-brewed tea', price: '₹15/-', img: dumTeaImg },
  { id: 't3', name: 'Allam Tea', description: 'Ginger-infused fresh tea', price: '₹20/-', img: allamTeaImg },
  { id: 't4', name: 'Lemon Tea', description: 'Zesty lemon tea', price: '₹15/-', img: lemonTeaImg2 },
  { id: 't5', name: 'Black Tea', description: 'Strong and aromatic black tea', price: '₹15/-', img: blackTeaImg },
  { id: 't6', name: 'Green Tea', description: 'Healthy and light green tea', price: '₹15/-', img: greenTeaImg2 },
  { id: 't7', name: 'Masala Tea', description: 'Spiced aromatic milk tea', price: '₹15/-', img: masalaTeaImg },
  { id: 't8', name: 'Elachi Tea', description: 'Flavored with cardamom', price: '₹20/-', img: elachiTeaImg },
  { id: 't9', name: 'Ginger + Elaichi', description: 'Perfect blend of ginger and cardamom', price: '₹20/-', img: masalaTeaImg },
];

const coffeeItems = [
  { id: 'c1', name: 'Coffee', description: 'Classic hot coffee', price: '₹15/-', img: normalCoffeeImg },
  { id: 'c2', name: 'Black Coffee', description: 'Dark roasted black coffee', price: '₹15/-', img: blackCoffeeImg },
  { id: 'c3', name: 'Filter Coffe', description: 'Authentic South Indian filter coffee', price: '₹25/-', img: filterCoffeeImg },
  { id: 'c4', name: 'Hot Chocolate', description: 'Rich chocolate drink', price: '₹20/-', img: chocolateMilkshakeImg },
  { id: 'c5', name: 'Cold Coffee', description: 'Chilled blended creamy coffee', price: '₹60/-', img: coldCoffeeImg },
];

const milkItems = [
  { id: 'm1', name: 'Milk', description: 'Warm and comforting plain milk', price: '₹15/-', img: hotMilkImg },
  { id: 'm2', name: 'Haldi Milk', description: 'Turmeric infused healthy milk', price: '₹20/-', img: haldiMilkImg },
  { id: 'm3', name: 'Hot Badam Milk', description: 'Almond enriched hot milk', price: '₹20/-', img: badamMilkImg },
  { id: 'm4', name: 'Boost', description: 'Energy drink with milk', price: '₹20/-', img: boostDrinkImg },
  { id: 'm5', name: 'Horlicks', description: 'Classic malted milk drink', price: '₹20/-', img: horlicksImg },
  { id: 'm6', name: 'Bournvita', description: 'Chocolatey malt drink', price: '₹20/-', img: bournvitaImg },
  { id: 'm7', name: 'Hot Choclate', description: 'Rich and creamy hot chocolate', price: '₹20/-', img: hotMilkImg },
];

const shakeItems = [
  { id: 'ms1', name: 'Mango Milkshake', description: 'Sweet mango milkshake', price: '₹59/-', img: mangoMilkshakeImg },
  { id: 'ms2', name: 'Butterscotch', description: 'Rich butterscotch delight', price: '₹59/-', img: butterscotchShakeImg },
  { id: 'ms3', name: 'Chocolate', description: 'Classic chocolate milkshake', price: '₹59/-', img: chocolateMilkshakeImg },
  { id: 'ms4', name: 'Vanilla', description: 'Smooth vanilla milkshake', price: '₹59/-', img: vanillaShakeImg },
  { id: 'ms5', name: 'Strawberry', description: 'Fresh strawberry milkshake', price: '₹59/-', img: strawberryShakeImg },
  { id: 'ms6', name: 'Oreo', description: 'Crunchy oreo blend', price: '₹69/-', img: oreoShakeImg },
  { id: 'ms7', name: 'Kitkat', description: 'Kitkat chocolate milkshake', price: '₹69/-', img: kitkatShakeImg },
  { id: 'ms8', name: 'Munch', description: 'Munch chocolate milkshake', price: '₹69/-', img: munchShakeImg },
];

const lassiItems = [
  { id: 'l1', name: 'Lassi', description: 'Traditional sweet lassi', price: '₹40/-', img: sweetLassiImg },
  { id: 'l2', name: 'Mango Lassi', description: 'Refreshing mango lassi', price: '₹50/-', img: mangoLassiImg },
  { id: 'l3', name: 'Strawberry Lassi', description: 'Strawberry flavored lassi', price: '₹50/-', img: strawberryLassiImg },
  { id: 'l4', name: 'Rooh Afza Lassi', description: 'Rose syrup flavored lassi', price: '₹50/-', img: roohAfzaLassiImg },
  { id: 'l5', name: 'Badam Lassi', description: 'Almond enriched lassi', price: '₹50/-', img: badamLassiImg },
  { id: 'l6', name: 'Butterscotch Lassi', description: 'Butterscotch flavored lassi', price: '₹60/-', img: butterscotchLassiImg },
  { id: 'l7', name: 'Dry Fruit Lassi', description: 'Lassi loaded with dry fruits', price: '₹70/-', img: dryFruitLassiImg },
];

const mocktailItems = [
  { id: 'mk1', name: 'Lemon Soda', description: 'Zesty lemon soda', price: '₹25/-', img: lemonSodaImg },
  { id: 'mk2', name: 'Masala Soda', description: 'Spiced up refreshing soda', price: '₹30/-', img: masalaSodaImg },
  { id: 'mk3', name: 'Green Apple', description: 'Crisp green apple mocktail', price: '₹40/-', img: greenAppleMocktailImg },
  { id: 'mk4', name: 'Black Current', description: 'Sweet and tangy blackcurrant', price: '₹40/-', img: blackCurrantMocktailImg },
  { id: 'mk5', name: 'Magic Lime Mint', description: 'Minty lime refresher', price: '₹40/-', img: magicLimeMintImg },
  { id: 'mk6', name: 'Litchi Crush', description: 'Sweet litchi flavored mocktail', price: '₹40/-', img: litchiCrushImg },
];

const galleryImages = [
  gallery1Img,
  gallery2Img,
  gallery3Img,
  gallery4Img,
];

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    text: '"The best coffee in town. Period. The atmosphere is just so relaxing and the staff is incredibly friendly."',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    text: '"I love coming here to work. Their cold coffee and croissants are my absolute favorite morning treat."',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Davis',
    text: '"Such a cozy little place! The chocolate cake is divine. Highly recommend stopping by if you\'re in the area."',
    rating: 4.5
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle Scroll to add active class and sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Reveal animation on scroll
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} style={{ opacity: 0.3 }} />);
    }
    return stars;
  };

  return (
    <>
      {/* ---------------- Navbar ---------------- */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="nav-brand">Magic Cup</a>

        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#menu" onClick={closeMenu}>Menu</a></li>
          <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
          <li><a href="#reviews" onClick={closeMenu}>Reviews</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      {/* ---------------- Hero Section ---------------- */}
      <section id="home" className="hero">
        <div className="hero-content fade-in">
          <h1>Magic Cup</h1>
          <p>Fresh Coffee, Fresh Moments</p>
          <a href="#menu" className="btn-primary">Explore Menu</a>
        </div>
      </section>

      {/* ---------------- About Section ---------------- */}
      <section id="about" className="about section-padding">
        <div className="about-container reveal">
          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80" alt="Cafe Interior" />
          </div>
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Magic Cup is a cozy place where people enjoy freshly brewed coffee, tasty desserts, and a relaxing atmosphere.
              We believe that every cup of coffee tells a story and every visit should be an experience to remember.
            </p>
            <p>
              Sourced from the finest coffee beans globally, our skilled baristas craft beverages that cater to the most discerning of palates.
              Whether you are meeting friends, working remotely, or just taking a moment for yourself, our warm ambience welcomes you.
            </p>
            <a href="#contact" className="btn-primary" style={{ marginTop: '1rem' }}>Visit Us</a>
          </div>
        </div>
      </section>

      {/* ---------------- Menu Section ---------------- */}
      <section id="menu" className="menu section-padding">
        <h2 className="section-title reveal">Our Menu</h2>

        {/* Top Picks Section */}
        <h3 className="reveal" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: 'var(--primary-color)' }}>Our Top Picks</h3>
        <div className="menu-grid" style={{ marginBottom: '4rem' }}>
          {topPicksItems.map((item, index) => (
            <div className="menu-card top-pick-card reveal" key={item.id} style={{ transitionDelay: `${(index % 4) * 0.1}s` }}>
              <div className="menu-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="menu-info">
                <h3>{item.name} <FaStar style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginLeft: '5px' }} /></h3>
                <p>{item.description}</p>
                <div className="menu-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tea Section */}
        <h3 className="reveal" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: 'var(--primary-color)' }}>Tea</h3>
        <div className="menu-grid" style={{ marginBottom: '4rem' }}>
          {teaItems.map((item, index) => (
            <div className="menu-card reveal" key={item.id} style={{ transitionDelay: `${(index % 4) * 0.1}s` }}>
              <div className="menu-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Coffee Section */}
        <h3 className="reveal" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: 'var(--primary-color)' }}>Coffee</h3>
        <div className="menu-grid" style={{ marginBottom: '4rem' }}>
          {coffeeItems.map((item, index) => (
            <div className="menu-card reveal" key={item.id} style={{ transitionDelay: `${(index % 4) * 0.1}s` }}>
              <div className="menu-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Milk Section */}
        <h3 className="reveal" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: 'var(--primary-color)' }}>Milk</h3>
        <div className="menu-grid" style={{ marginBottom: '4rem' }}>
          {milkItems.map((item, index) => (
            <div className="menu-card reveal" key={item.id} style={{ transitionDelay: `${(index % 4) * 0.1}s` }}>
              <div className="menu-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Milk Shake Section */}
        <h3 className="reveal" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: 'var(--primary-color)' }}>Milk Shake</h3>
        <div className="menu-grid" style={{ marginBottom: '4rem' }}>
          {shakeItems.map((item, index) => (
            <div className="menu-card reveal" key={item.id} style={{ transitionDelay: `${(index % 4) * 0.1}s` }}>
              <div className="menu-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Lassi Section */}
        <h3 className="reveal" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: 'var(--primary-color)' }}>Lassi</h3>
        <div className="menu-grid" style={{ marginBottom: '4rem' }}>
          {lassiItems.map((item, index) => (
            <div className="menu-card reveal" key={item.id} style={{ transitionDelay: `${(index % 4) * 0.1}s` }}>
              <div className="menu-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mocktails Section */}
        <h3 className="reveal" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: 'var(--primary-color)' }}>Mocktails</h3>
        <div className="menu-grid">
          {mocktailItems.map((item, index) => (
            <div className="menu-card reveal" key={item.id} style={{ transitionDelay: `${(index % 4) * 0.1}s` }}>
              <div className="menu-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Gallery Section ---------------- */}
      <section id="gallery" className="gallery section-padding">
        <h2 className="section-title reveal">Our Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((src, index) => (
            <div className="gallery-item reveal" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
              <img src={src} alt={`Gallery ${index + 1}`} />
              <div className="gallery-overlay">
                <FaCoffee />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Customer Reviews Section ---------------- */}
      <section id="reviews" className="reviews section-padding">
        <h2 className="section-title reveal">Customer Reviews</h2>
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <div className="review-card reveal" key={review.id} style={{ transitionDelay: `${index * 0.15}s` }}>
              <div className="stars">
                {renderStars(review.rating)}
              </div>
              <p className="review-text">{review.text}</p>
              <h4 className="review-author">- {review.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Contact Section ---------------- */}
      <section id="contact" className="contact section-padding">
        <h2 className="section-title reveal">Contact Us</h2>
        <div className="contact-container reveal">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div className="info-text">
                <h4>Address</h4>
                <p>123 Coffee Avenue, New York, NY 10012</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><FaPhoneAlt /></div>
              <div className="info-text">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <div className="info-text">
                <h4>Email</h4>
                <p>hello@magiccup.com</p>
              </div>
            </div>

            <h4 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>Opening Hours</h4>
            <p style={{ color: '#ddd' }}>Mon - Fri: 7:00 AM - 8:00 PM</p>
            <p style={{ color: '#ddd' }}>Sat - Sun: 8:00 AM - 9:00 PM</p>
          </div>

          <div className="contact-form">
            <h3>Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="footer">
        <h2 className="footer-brand">Magic Cup</h2>
        <div className="footer-socials">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Magic Cup. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
