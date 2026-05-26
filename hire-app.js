function HirePage() {
  return (
    <div className="relative w-full">
      <Navbar />
      
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Designing Experiences That Feel <br/>
              <span className="text-gradient">Modern, Simple & Meaningful</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8 text-lg text-gray-300 leading-relaxed">
              <p>
                Hi, I'm <strong className="text-white">Kishore Ravi</strong> — a passionate UI/UX Designer and Frontend Developer focused on creating clean, user-friendly, and visually engaging digital experiences.
              </p>
              
              <p>
                I help brands, startups, and individuals transform ideas into modern websites and interfaces that not only look beautiful but also work smoothly across every device.
              </p>
              
              <div className="glass-card p-8 my-8 border-l-4 border-l-[var(--accent-start)] rounded-l-none">
                <h3 className="text-2xl font-bold text-white mb-4">My approach combines:</h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-start)]"></div> Creative UI design</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-start)]"></div> User-centered thinking</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-start)]"></div> Smooth interactions</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-start)]"></div> Responsive frontend development</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-start)]"></div> Attention to detail</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-start)]"></div> Modern design trends</li>
                </ul>
              </div>
              
              <p>
                Even with growing experience, I focus on delivering work with professionalism, creativity, and dedication. Every project is an opportunity to create something unique and impactful.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="icon-layers text-[var(--accent-start)]"></div>
                  What I Can Help You With
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['UI/UX Design', 'Landing Pages', 'Portfolio Websites', 'Mobile App UI', 'Dashboard Design', 'Website Redesign', 'Frontend Development', 'Responsive Web Design'].map((item, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="icon-sparkles text-[var(--accent-start)]"></div>
                  Why Hire Me?
                </h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-3"><div className="icon-check text-[var(--accent-start)] shrink-0 mt-0.5"></div> Clean and modern design style</li>
                  <li className="flex items-start gap-3"><div className="icon-check text-[var(--accent-start)] shrink-0 mt-0.5"></div> Strong focus on user experience</li>
                  <li className="flex items-start gap-3"><div className="icon-check text-[var(--accent-start)] shrink-0 mt-0.5"></div> Fast learner and adaptable</li>
                  <li className="flex items-start gap-3"><div className="icon-check text-[var(--accent-start)] shrink-0 mt-0.5"></div> Clear communication</li>
                  <li className="flex items-start gap-3"><div className="icon-check text-[var(--accent-start)] shrink-0 mt-0.5"></div> Creative problem-solving</li>
                  <li className="flex items-start gap-3"><div className="icon-check text-[var(--accent-start)] shrink-0 mt-0.5"></div> Passionate about quality work</li>
                  <li className="flex items-start gap-3"><div className="icon-check text-[var(--accent-start)] shrink-0 mt-0.5"></div> Dedicated to continuous improvement</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 glass-card p-10 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--accent-start)] opacity-20 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Resume</h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Want to know more about my skills, tools, and experience?
              </p>
              {/* ADD YOUR RESUME PDF LINK HERE */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Download Resume <div className="icon-arrow-right ml-2 text-lg"></div>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HirePage />);