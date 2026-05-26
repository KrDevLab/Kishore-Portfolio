function About() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const cards = [
    { title: "UI Thinking", icon: "layout-template", color: "text-rose-400", bg: "bg-rose-500/10" },
    { title: "Wireframing", icon: "pen-tool", color: "text-red-400", bg: "bg-red-500/10" },
    { title: "Frontend Basics", icon: "file-code", color: "text-pink-400", bg: "bg-pink-500/10" },
    { title: "Figma Design", icon: "figma", color: "text-orange-400", bg: "bg-orange-500/10" },
    { title: "Responsive Layouts", icon: "smartphone", color: "text-rose-300", bg: "bg-rose-400/10" },
    { title: "Creative Problem Solving", icon: "lightbulb", color: "text-red-300", bg: "bg-red-400/10" }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [cards.length]);

  return (
    <section id="about" className="py-24 relative" data-name="about" data-file="components/About.js">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">More Than Just Pixels.</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-start)] to-[var(--accent-end)] rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-6 items-stretch">
          {/* Main Journey Card */}
          <div className="md:col-span-7 glass-card p-8 reveal flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-start)] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              I have a strong passion for clean, intuitive user experiences. After completing a 3-month UI/UX Internship where I learned the fundamentals of real-world product design, I started learning frontend development to bring my designs to life. I focus on practical, user-friendly design and I am currently available for freelance projects.
            </p>
            <div className="inline-flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">3 Month UI/UX Internship</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">Self-taught Frontend</span>
            </div>
          </div>

          {/* 3D Auto Slider */}
          <div className="md:col-span-5 relative h-64 md:h-auto perspective-1000 flex items-center justify-center overflow-hidden">
            <div className="w-full max-w-xs relative h-full flex items-center justify-center transform-style-3d">
              {cards.map((card, idx) => {
                let offset = idx - activeIndex;
                if (offset < -Math.floor(cards.length / 2)) offset += cards.length;
                if (offset > Math.floor(cards.length / 2)) offset -= cards.length;
                
                const absOffset = Math.abs(offset);
                const isActive = offset === 0;
                
                return (
                  <div 
                    key={idx} 
                    className={`absolute w-full p-6 glass-card flex items-center gap-4 transition-all duration-700 ease-in-out cursor-pointer`}
                    style={{
                      transform: `translateX(${offset * 30}px) translateZ(${-absOffset * 100}px) scale(${isActive ? 1 : 0.8})`,
                      opacity: isActive ? 1 : 1 - absOffset * 0.3,
                      zIndex: cards.length - absOffset,
                      pointerEvents: isActive ? 'auto' : 'none'
                    }}
                  >
                    <div className={`w-14 h-14 rounded-xl ${card.bg} flex items-center justify-center shrink-0`}>
                      <div className={`icon-${card.icon} text-2xl ${card.color}`}></div>
                    </div>
                    <h4 className="font-semibold text-gray-200 text-lg">{card.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
      `}</style>
    </section>
  );
}