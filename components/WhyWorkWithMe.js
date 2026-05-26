function WhyWorkWithMe() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [visibleItems, setVisibleItems] = React.useState(4);

  const reasons = [
    { title: "Fast Learner", desc: "I quickly adapt to new tools, technologies, and design trends to deliver the best results." },
    { title: "Clean UI Design", desc: "I prioritize simplicity, whitespace, and strong typography to create elegant interfaces." },
    { title: "Creative Thinking", desc: "Approaching problems with a fresh perspective to find unique and effective design solutions." },
    { title: "Responsive Communication", desc: "Clear, honest, and timely updates throughout the entire project process." }
  ];

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleItems(4);
      else if (window.innerWidth >= 768) setVisibleItems(2);
      else setVisibleItems(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => setCurrentIndex(prev => (prev === 0 ? Math.max(0, reasons.length - visibleItems) : prev - 1));
  const handleNext = () => setCurrentIndex(prev => (prev >= reasons.length - visibleItems ? 0 : prev + 1));

  const translateX = (currentIndex * 100) / (reasons.length > 0 ? reasons.length : 1);

  return (
    <section className="py-24 relative bg-white/[0.02]" data-name="why-work-with-me" data-file="components/WhyWorkWithMe.js">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Work With Me.</h2>
            <p className="text-gray-400 max-w-2xl">Core values that drive my work ethic and design process.</p>
          </div>
          
          {/* Navigation for tablet/mobile */}
          {visibleItems < reasons.length && (
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

        {visibleItems >= 4 ? (
          /* Desktop Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="glass-card p-8 reveal text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-[var(--accent-start)] to-[var(--accent-end)] flex items-center justify-center mb-4 text-white font-bold shadow-lg">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-400 text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          /* Mobile/Tablet Slider */
          <div className="overflow-hidden rounded-xl relative group">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${translateX}%)`, width: `${(reasons.length * 100) / visibleItems}%` }}>
              {reasons.map((reason, idx) => (
                <div key={idx} className="p-3 shrink-0" style={{ width: `${100 / reasons.length}%` }}>
                  <div className="glass-card h-full p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-[var(--accent-start)] to-[var(--accent-end)] flex items-center justify-center mb-4 text-white font-bold shadow-lg">
                      {idx + 1}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
                    <p className="text-gray-400 text-sm">{reason.desc}</p>
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