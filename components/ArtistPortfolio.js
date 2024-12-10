'use client';
import Image from 'next/image';
import { Heart, Sparkles, Star, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ArtistPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showPrismEffect, setShowPrismEffect] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showNewsletter, setShowNewsletter] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImageDetails, setSelectedImageDetails] = useState(null);

  // Using more explicit URL structure with transformation parameters
  // Using placeholder images that comply with CSP
  const coverImage = "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451000/2023-09-03_20.25.49_3183647251206184526_1308601042_xqx5iu.jpg";
  
  const galleryImages = [
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451002/2024-04-02_12.45.47_3337068173761077717_1308601042_snhcmi.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733450998/2024-08-19_18.28.16_3437984371360582942_1308601042_gabdp0.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451003/2024-07-10_19.14.55_3409016816734469585_1308601042_rvxokn.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451004/2023-12-04_18.47.13_3250276992520046335_1308601042_uqrjfu.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451002/2023-07-24_18.53.47_3153885130742371857_1308601042_pecw9d.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451010/2023-07-03_21.56.20_3138756721381031922_1308601042_ttu1e6.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733450998/2023-09-03_20.25.49_3183647251365541991_1308601042_gtbwwn.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451000/2023-09-25_19.00.11_3199549215970245074_1308601042_j4iakg.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451005/2023-10-02_19.19.31_3204632376127438627_1308601042_dm7517.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451001/2023-11-02_12.09.30_3226883989436899426_1308601042_wloimd.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451007/2024-08-07_22.32.45_3429410121259181953_1308601042_eiqbcy.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451008/2024-10-09_19.38.43_3474983392775773842_1308601042_t4dz3v.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451000/2024-11-01_01.00.56_3491090642103770637_1308601042_d8t1vp.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451003/2023-08-12_12.04.53_3167450057662995686_1308601042_xm42ro.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451001/2023-08-07_22.18.49_3164135190428146005_1308601042_zzzt4y.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451011/2023-06-14_20.31.09_3124943106634981124_1308601042_nmddc2.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451011/2023-05-27_19.55.27_3111879179630267834_1308601042_zo1bor.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451002/2023-05-21_22.49.10_3107617954628907646_1308601042_qoszye.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451005/2023-02-06_13.07.14_3031948383952123873_1308601042_wgqwve.jpg",
    "https://res.cloudinary.com/dchn4bbjr/image/upload/v1733451005/2022-12-13_16.04.20_2992174850883976493_1308601042_fno8dg.jpg",
  ];

  const sections = {
    home: {
      title: "✧･ﾟ msk ･ﾟ✧",
      content: "Digital Artist / Gyal Culture Addict"
    },
    gallery: {
      title: "⋆˙⟡♡ Art Gallery ♡⟡˙⋆",
      content: ""
    },
    store: {
      title: "✧･ﾟ Shop My Art ･ﾟ✧",
      content: "Coming Soon..."
    },
    about: {
      title: "♡･ﾟ About The Artist ･ﾟ♡",
      content: "Creating prismatic dreams in the digital realm"
    },
    contact: {
      title: "✧･ﾟ Contact Me ･ﾟ✧",
      content: ""
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setShowPrismEffect(true);
      setTimeout(() => setShowPrismEffect(false), 1000);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const ImageModal = ({ image, onClose, initialPosition }) => {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
      // Trigger animation completion after a short delay
      const timer = setTimeout(() => setAnimationComplete(true), 50);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div
        className="fixed inset-0 bg-black/0 backdrop-blur-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: animationComplete ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: animationComplete ? 'blur(8px)' : 'blur(0px)',
        }}
        onClick={onClose}
      >
        <div
          className="absolute transform-gpu transition-all duration-500 ease-out"
          style={{
            width: animationComplete ? '90vw' : initialPosition.width,
            height: animationComplete ? '90vh' : initialPosition.height,
            left: animationComplete ? '5vw' : initialPosition.left,
            top: animationComplete ? '5vh' : initialPosition.top,
          }}
        >
          <Image
            src={image}
            alt="Artwork"
            className="w-full h-full object-contain rounded-lg transform-gpu transition-transform duration-500"
            style={{
              transform: animationComplete ? 'scale(1) rotate(0deg)' : 'scale(0.9) rotate(-5deg)',
            }}
            onClick={(e) => e.stopPropagation()}
            width={1200}
            height={1200}
          />
        </div>
      </div>
    );
  };

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    
    try {
      await fetch('https://script.google.com/macros/s/1TKH_Yw31SyfCiD9n4Kbfwv91Ou28817k9D3uW2Yl4_FMWrGPy1NWcmGb/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString()
        })
      });

      alert('Thank you for subscribing! ♡');
      e.target.reset();
    } catch (error) {
      console.error('Error:', error);
      alert('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Custom cursor */}
      <div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Heart className="w-full h-full text-pink-500 drop-shadow-lg" />
      </div>

      {/* Floating decorative elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float${i} ${15 + i * 2}s infinite alternate`
          }}
        >
          {i % 3 === 0 ? (
            <Sparkles className="text-pink-400/50 w-12 h-12" />
          ) : i % 3 === 1 ? (
            <Star className="text-purple-400/50 w-10 h-10" />
          ) : (
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400/30 to-blue-400/30 rounded-full blur-xl" />
          )}
        </div>
      ))}

      {/* Cover Image */}
      <Image
        src={coverImage}
        alt="Cover"
        width={1200}
        height={600}
        className="w-full h-[60vh] object-cover"
        priority
        onError={handleImageError}
      />
      
      {/* Prismatic Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(255, 182, 193, 0.4) 0%,
              rgba(147, 112, 219, 0.4) 25%,
              rgba(183, 223, 255, 0.4) 50%,
              rgba(255, 182, 193, 0.4) 75%,
              transparent 100%)
          `,
          opacity: showPrismEffect ? 0.3 : 0,
          transition: 'opacity 0.3s ease-out'
        }}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-md z-40 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo/Title for mobile */}
          <div className="text-pink-800 font-bold text-xl">
            ✧･ﾟ msk ･ﾟ✧
          </div>

          {/* Hamburger menu for mobile */}
          <button 
            className="md:hidden text-pink-800 hover:text-pink-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current"></div>
              </div>
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                className={`px-6 py-2 rounded-full font-bold backdrop-blur-sm transition-all duration-300 ${
                  activeSection === section 
                    ? 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white shadow-lg' 
                    : 'bg-white/30 text-pink-700 hover:bg-white/50'
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="mt-4 space-y-2 p-2 bg-white/30 backdrop-blur-md rounded-lg">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                className={`w-full px-6 py-2 rounded-full font-bold backdrop-blur-sm transition-all duration-300 text-left ${
                  activeSection === section 
                    ? 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white shadow-lg' 
                    : 'bg-white/30 text-pink-700 hover:bg-white/50'
                }`}
                onClick={() => {
                  setActiveSection(section);
                  setIsMobileMenuOpen(false);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            {sections[activeSection].title}
          </h1>

          {activeSection === 'home' && (
            <div className="relative max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={coverImage}
                  alt="Cover Art"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                  onError={() => {
                    console.error('Cover image failed to load');
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent" />
              </div>
              <p className="text-2xl text-center mt-8 text-pink-800">
                {sections[activeSection].content}
              </p>
            </div>
          )}

          {activeSection === 'gallery' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, i) => (
                <div
                  key={i}
                  className="relative group cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setSelectedImageDetails({
                      image,
                      initialPosition: {
                        width: rect.width,
                        height: rect.height,
                        left: rect.left,
                        top: rect.top,
                      }
                    });
                  }}
                >
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-lg transform rotate-2 group-hover:rotate-6 transition-transform duration-300" 
                  />
                  <div className="relative bg-white rounded-lg overflow-hidden transform-gpu transition-transform duration-300 group-hover:scale-95">
                    <Image
                      src={image}
                      alt={`Artwork ${i + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover aspect-square transition-all duration-300 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        console.error('Gallery image failed to load:', image);
                        e.target.src = '/api/placeholder/400/400';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'store' && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="text-6xl mb-8">？</div>
              <p className="text-2xl font-bold text-pink-800 text-center">
                Coming Soon...
              </p>
            </div>
          )}

          {activeSection === 'about' && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/30 backdrop-blur-md rounded-xl p-8 shadow-xl">
                <p className="text-xl text-center text-pink-800">
                  {sections[activeSection].content}
                </p>
              </div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/30 backdrop-blur-md rounded-xl p-8 shadow-xl">
                <form 
                  action="https://docs.google.com/forms/d/e/1FAIpQLSdJhVe9zYZH5AB6R0Fcq2BHrXVoQTTwExW0_wj4vmC3YDRXKg/formResponse"
                  method="POST"
                  target="_blank"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    fetch(e.target.action, {
                      method: 'POST',
                      mode: 'no-cors',
                      body: formData
                    })
                    .then(() => {
                      alert('Message sent successfully! ♡');
                      e.target.reset();
                    })
                    .catch(() => {
                      alert('Oops! Something went wrong. Please try again.');
                    });
                  }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-pink-800 mb-2">Name</label>
                    <input
                      name="entry.239466880" // Replace with your actual form field ID
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-pink-200 focus:outline-none focus:border-pink-400"
                    />
                  </div>
                        <div>
                    <label className="block text-pink-800 mb-2">Email</label>
                    <input
                      name="entry.2114364710" // Replace with your actual form field ID
                      type="email"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-pink-200 focus:outline-none focus:border-pink-400"
                    />
                  </div>
                  <div>
                    <label className="block text-pink-800 mb-2">Subject</label>
                    <input
                      name="entry.31372182" // Replace with your actual form field ID
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-pink-200 focus:outline-none focus:border-pink-400"
                    />
                  </div>
                  <div>
                    <label className="block text-pink-800 mb-2">Message</label>
                    <textarea
                      name="entry.1100771166"
                      required
                      rows="4"
                      className="w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-pink-200 focus:outline-none focus:border-pink-400"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold hover:opacity-90 active:scale-95 transition-all"
                  >
                    Send Message ♡
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Image Modal */}
      {selectedImageDetails && (
        <ImageModal 
          image={selectedImageDetails.image} 
          initialPosition={selectedImageDetails.initialPosition}
          onClose={() => setSelectedImageDetails(null)} 
        />
      )}

      {/* Newsletter Section */}
      {showNewsletter && (
        <div className="fixed bottom-0 left-0 w-full bg-white/20 backdrop-blur-md p-4">
          <div className="max-w-2xl mx-auto relative">
            <button 
              onClick={() => setShowNewsletter(false)}
              className="absolute -top-2 right-0 text-pink-800 hover:text-pink-600"
            >
              <X className="w-5 h-5" />
            </button>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-pink-800">
                <h3 className="font-bold">✧ Keep in Touch ✧</h3>
                <p className="text-sm">Stay updated with new artwork ~ Promise to only email once in a while ♡</p>
              </div>
              <div className="flex w-full md:w-auto gap-2">
                <input 
                  name="email"
                  type="email" 
                  required
                  placeholder="your@email.com" 
                  className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-pink-200 focus:outline-none focus:border-pink-400 flex-grow md:flex-grow-0"
                />
                <button 
                  type="submit"
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold hover:opacity-90 active:scale-95 transition-all"
                >
                  Subscribe ♡
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float0 { to { transform: translate(20px, 20px) rotate(360deg); } }
        @keyframes float1 { to { transform: translate(-20px, 30px) rotate(-360deg); } }
        @keyframes float2 { to { transform: translate(30px, -20px) rotate(360deg); } }
        @keyframes float3 { to { transform: translate(-30px, -30px) rotate(-360deg); } }
        @keyframes float4 { to { transform: translate(40px, 40px) rotate(360deg); } }
        @keyframes float5 { to { transform: translate(-40px, 20px) rotate(-360deg); } }
        @keyframes float6 { to { transform: translate(20px, -40px) rotate(360deg); } }
        @keyframes float7 { to { transform: translate(-20px, -20px) rotate(-360deg); } }
      `}</style>
    </div>
  );
}