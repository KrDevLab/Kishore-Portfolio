function Skills() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [visibleItems, setVisibleItems] = React.useState(3);
  const [isAutoSlide, setIsAutoSlide] = React.useState(false);

  const categories = [
    {
      title: "Design Skills",
      icon: "palette",
      skills: ["UI/UX Design", "Wireframing", "Prototyping", "Responsive Design"]
    },
    {
      title: "Frontend Skills",
      icon: "code-2",
      skills: ["HTML", "CSS", "JavaScript", "React Basic", "Tailwind CSS"]
    },
    {
      title: "Tools",
      icon: "wrench",
      skills: ["Figma", "Adobe Illustrator", "VS Code", "Git"]
    }
  ];

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(3);
        setIsAutoSlide(false);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2);
        setIsAutoSlide(true);
      } else {
        setVisibleItems(1);
        setIsAutoSlide(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (!isAutoSlide) {
      setCurrentIndex(0);
      return;
    }
    
    const maxIndex = Math.max(0, categories.length - visibleItems);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(timer);
  }, [isAutoSlide, visibleItems, categories.length]);

  return (
    <section id="skills" className="py-24 relative bg-white/[0.02]" data-name="skills" data-file="components/Skills.js">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 reveal text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">The tools and technologies I use to craft beautiful digital experiences.</p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-2xl group reveal">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
          >
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className="w-full shrink-0 p-3"
                style={{ flex: `0 0 ${100 / visibleItems}%` }}
              >
                <div className="glass-card p-8 relative group/card overflow-hidden h-full flex flex-col hover:-translate-y-1 transition-transform">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover/card:opacity-10 transition-opacity transform group-hover/card:scale-110 duration-500">
                    <div className={`icon-${cat.icon} text-9xl text-white`}></div>
                  </div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent-start)] to-[var(--accent-end)] flex items-center justify-center mb-6 relative z-10 shadow-lg">
                    <div className={`icon-${cat.icon} text-2xl text-white`}></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 relative z-10">{cat.title}</h3>
                  
                  <ul className="space-y-4 relative z-10 mt-auto">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-start)] shrink-0"></div>
                        <span className="text-gray-300 font-medium text-sm md:text-base">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator for Mobile/Tablet */}
          {isAutoSlide && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: categories.length - visibleItems + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-[var(--accent-start)]' : 'bg-gray-600 hover:bg-gray-400'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}