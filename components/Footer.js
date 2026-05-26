function Footer() {
  const currentYear = 2026;
  
  return (
    <footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8 relative overflow-hidden" data-name="footer" data-file="components/Footer.js">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-start)] opacity-5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <a href="index.html" className="text-2xl font-bold font-['Poppins'] text-white flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-gradient-to-br from-[var(--accent-start)] to-[var(--accent-end)] flex items-center justify-center text-sm shadow-lg">KR</span>
              Kishore Ravi
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Designing clean digital experiences with creativity and purpose. Bringing ideas to life through thoughtful UI and solid code.
            </p>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="index.html#about" className="text-gray-400 hover:text-[var(--accent-start)] transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-600"></span> About Me</a></li>
              <li><a href="index.html#skills" className="text-gray-400 hover:text-[var(--accent-start)] transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-600"></span> Skills</a></li>
              <li><a href="index.html#projects" className="text-gray-400 hover:text-[var(--accent-start)] transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-600"></span> Selected Work</a></li>
              <li><a href="terms.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--accent-start)] transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-600"></span> Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <div className="icon-mail text-[var(--accent-start)] mt-0.5"></div>
                {/* ADD YOUR EMAIL ADDRESS HERE */}
                <a href="mailto:kishoresde006@gmail.com" className="hover:text-white transition-colors">kishoresde006@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <div className="icon-phone text-[var(--accent-start)] mt-0.5"></div>
                {/* ADD YOUR PHONE NUMBER HERE */}
                <a href="tel:+91 7397753765" className="hover:text-white transition-colors">+91 7397753765</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <div className="icon-map-pin text-[var(--accent-start)] mt-0.5"></div>
                <span>Available Worldwide<br/>(Remote)</span>
              </li>
            </ul>
          </div>

          {/* Social Media Col */}
          <div>
            <h4 className="text-white font-semibold mb-6">Social Media</h4>
            <div className="flex flex-wrap gap-3">
              {/* ADD YOUR LINKEDIN LINK HERE */}
              <a href="https://www.linkedin.com/in/kishore-ravi-/" target="_blank" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:bg-[var(--accent-start)] hover:text-white hover:-translate-y-1 transition-all shadow-lg">
                <div className="icon-linkedin text-lg"></div>
              </a>
              {/* ADD YOUR GITHUB LINK HERE */}
              <a href="https://github.com/KrDevLab" target="_blank" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:bg-[var(--accent-start)] hover:text-white hover:-translate-y-1 transition-all shadow-lg">
                <div className="icon-github text-lg"></div>
              </a>
              {/* ADD YOUR INSTAGRAM LINK HERE */}
              <a href="https://www.instagram.com/design2debug/" target="_blank" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:bg-[var(--accent-start)] hover:text-white hover:-translate-y-1 transition-all shadow-lg">
                <div className="icon-instagram text-lg"></div>
              </a>
            </div>
            <div className="mt-6">
              <a href="hire.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[var(--accent-start)] hover:text-white transition-colors font-medium group">
                Let's work together 
                <div className="icon-arrow-right group-hover:translate-x-1 transition-transform"></div>
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} Kishore Ravi. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="icon-heart text-[var(--accent-start)] animate-pulse"></span> for design
          </p>
        </div>
      </div>
    </footer>
  );
}