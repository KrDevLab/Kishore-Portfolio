function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 glass-card border-x-0 border-t-0 rounded-none bg-opacity-80'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex justify-between items-center">

        {/* LOGO + BRAND */}
        <a
          href="/"
          className="flex items-center gap-[2px] sm:gap-1"
        >
          {/* LOGO */}
          <img
            src="/image/logo.png"
            alt="Design2Debug Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          />

          {/* BRAND NAME */}
          <span className="text-[20px] sm:text-2xl font-bold font-['Poppins'] text-white leading-none -ml-1">
            Design2Debug
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center space-x-8">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}

              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--accent-start)] to-[var(--accent-end)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* CONTACT BUTTON */}
          <a
            href="#contact"
            className="px-6 py-2 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors flex-shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`icon-${isMobileMenuOpen ? 'x' : 'menu'} text-2xl`}></div>
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-card border-x-0 border-t-0 rounded-none p-6 flex flex-col space-y-4">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* MOBILE CONTACT BUTTON */}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-6 py-3 text-center rounded-lg bg-white/10 text-white font-medium mt-4 hover:bg-white/20 transition-all"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
}