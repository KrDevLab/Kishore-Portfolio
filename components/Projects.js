function Projects() {
  const [activeTab, setActiveTab] = React.useState('All');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [visibleItems, setVisibleItems] = React.useState(4);
  
  const tabs = ['All', 'UI Design', 'Frontend', 'Freelance'];

  const projects = [
    {
      title: "Finance Dashboard UI",
      category: "UI Design",
      desc: "A clean, modern dashboard design for tracking personal finances and analytics.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tools: ["Figma", "UI/UX"]
    },
    {
      title: "E-Commerce Landing Page",
      category: "Frontend",
      desc: "Responsive landing page concept built with HTML, CSS, and basic JS.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tools: ["HTML", "CSS", "Responsive"]
    },
    {
      title: "Upcoming Freelance Project",
      category: "Freelance",
      desc: "Currently designing a portfolio website for a local photographer.",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tools: ["Figma", "Web Design"],
      isWIP: true
    },
    {
      title: "Travel App Concept",
      category: "UI Design",
      desc: "Mobile app wireframes and high-fidelity prototypes for a travel booking app.",
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tools: ["Figma", "Wireframing", "Prototyping"]
    },
    {
      title: "Analytics Dashboard",
      category: "Frontend",
      desc: "Frontend implementation of a data analytics tracking tool.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tools: ["React", "Tailwind"]
    }
  ];

  const filteredProjects = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab);

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

  React.useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const maxIndex = Math.max(0, filteredProjects.length - visibleItems);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden" data-name="projects" data-file="components/Projects.js">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work.</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-start)] to-[var(--accent-end)] rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap gap-2 p-1 glass-card rounded-xl border-white/10 w-fit">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group reveal-scale">
          <div className="overflow-hidden rounded-2xl mx-auto">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {filteredProjects.map((project, idx) => (
                <div 
                  key={idx} 
                  className="w-full shrink-0 p-3"
                  style={{ flex: `0 0 ${100 / visibleItems}%` }}
                >
                  <div className="glass-card h-full group/card overflow-hidden rounded-2xl border-white/5 hover:border-[var(--accent-start)]/30 transition-colors duration-500 flex flex-col">
                    <div className="relative aspect-video overflow-hidden bg-gray-900 shrink-0">
                      <img 
                        src={project.img} 
                        alt={project.title}
                        className={`w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 ${project.isWIP ? 'opacity-40 grayscale' : 'opacity-80 group-hover/card:opacity-100'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-90"></div>
                      
                      {project.isWIP && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                          <div className="icon-loader animate-spin text-3xl mb-2 text-[var(--accent-start)]"></div>
                          <span className="font-semibold tracking-wider uppercase text-[10px]">WIP</span>
                        </div>
                      )}
                      
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 text-[10px] font-semibold bg-black/50 backdrop-blur-md rounded-full text-white border border-white/10">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover/card:text-[var(--accent-start)] transition-colors line-clamp-1">{project.title}</h3>
                      <p className="text-gray-400 mb-4 text-xs line-clamp-2">{project.desc}</p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex flex-wrap gap-1">
                          {project.tools.slice(0, 2).map(tool => (
                            <span key={tool} className="text-[10px] text-gray-500 font-medium">#{tool}</span>
                          ))}
                        </div>
                        
                        {!project.isWIP && (
                          <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300 group-hover/card:bg-[var(--accent-start)] group-hover/card:text-white transition-all hover:scale-110 shrink-0">
                            <div className="icon-arrow-up-right text-sm"></div>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {filteredProjects.length > visibleItems && (
            <React.Fragment>
              <button 
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full glass-card bg-black/50 flex items-center justify-center text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--accent-start)] hover:scale-110 md:-ml-4 md:group-hover:ml-0 shadow-xl z-10"
              >
                <div className="icon-chevron-left text-xl"></div>
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full glass-card bg-black/50 flex items-center justify-center text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--accent-start)] hover:scale-110 md:-mr-4 md:group-hover:mr-0 shadow-xl z-10"
              >
                <div className="icon-chevron-right text-xl"></div>
              </button>
            </React.Fragment>
          )}
        </div>
      </div>
    </section>
  );
}