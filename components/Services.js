function Services() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [visibleItems, setVisibleItems] = React.useState(3);

  const services = [
    { title: "UI/UX Design", icon: "layout", desc: "Crafting intuitive, user-centered interfaces for web and mobile applications." },
    { title: "Landing Page Design", icon: "monitor", desc: "Designing high-converting landing pages that capture attention and drive action." },
    { title: "Responsive Web Design", icon: "smartphone", desc: "Ensuring your website looks and works perfectly on all devices and screen sizes." },
    { title: "Mobile App UI", icon: "tablet-smartphone", desc: "Creating sleek and modern user interfaces for iOS and Android applications." },
    { title: "Portfolio Websites", icon: "briefcase", desc: "Building personal brand websites that highlight your skills and experience." },
    { title: "Frontend Development", icon: "code", desc: "Translating designs into clean, semantic, and responsive HTML/CSS/JS code." }
  ];

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleItems(3);
      else if (window.innerWidth >= 768) setVisibleItems(2);
      else setVisibleItems(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => setCurrentIndex(prev => (prev === 0 ? Math.max(0, services.length - visibleItems) : prev - 1));
  const handleNext = () => setCurrentIndex(prev => (prev >= services.length - visibleItems ? 0 : prev + 1));

  const translateX = (currentIndex * 100) / (services.length > 0 ? services.length : 1);

  return (
    <section id="services" className="py-24 relative bg-white/[0.02]" data-name="services" data-file="components/Services.js">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How I Can Help.</h2>
            <p className="text-gray-400 max-w-2xl">Services I offer to help bring your ideas to life.</p>
          </div>
          
          {/* Navigation for tablet/mobile */}
          {visibleItems < services.length && (
            <div className="flex gap-2 shrink-0 lg:hidden">
              <button onClick={handlePrev} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[var(--accent-start)] transition-all">
                <div className="icon-chevron-left text-white"></div>
              </button>
              <button onClick={handleNext} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[var(--accent-start)] transition-all">
                <div className="icon-chevron-right text-white"></div>
              </button>
            </div>
          )}
        </div>

        {visibleItems >= 3 ? (
          /* Desktop Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="glass-card p-8 reveal group hover:border-[var(--accent-start)]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-[var(--accent-start)] group-hover:scale-110 group-hover:bg-[var(--accent-start)] group-hover:text-white transition-all">
                  <div className={`icon-${service.icon} text-xl`}></div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          /* Mobile/Tablet Slider */
          <div className="overflow-hidden rounded-xl relative group">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${translateX}%)`, width: `${(services.length * 100) / visibleItems}%` }}>
              {services.map((service, idx) => (
                <div key={idx} className="p-3 shrink-0" style={{ width: `${100 / services.length}%` }}>
                  <div className="glass-card h-full p-8 group/card hover:border-[var(--accent-start)]/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-[var(--accent-start)] transition-all">
                      <div className={`icon-${service.icon} text-xl`}></div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}