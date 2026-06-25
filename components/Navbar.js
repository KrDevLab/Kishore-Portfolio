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
          : 'py-3 bg-transparent'
      }`}
    >

      {/* NAVBAR CONTAINER */}
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">

        <div className="flex items-center justify-between">

          {/* LOGO + BRAND */}
          <a
            href="/"
            className="flex items-center  ml-8 sm:ml-5 lg:ml-6"//gap-1 sm:gap-3
          >

            {/* LOGO */}
            <img
              src="/image/logo.png"
              alt="Design2Debug Logo"
              className="
                w-16 h-16
                sm:w-18 sm:h-18
                md:w-16 md:h-16
                lg:w-20 lg:h-20
              
                flex-shrink-0
              "
            />

            {/* BRAND NAME */}
            <span
              className="
                text-[18px]
                sm:text-[22px]
                md:text-[24px]
                lg:text-[26px]
                font-bold
                font-['Poppins']
                text-white
                leading-none
                whitespace-nowrap
              "
            >
              Kishore Ravi
            </span>

          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8">

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
            className="md:hidden text-white flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >

            <div
              className={`icon-${isMobileMenuOpen ? 'x' : 'menu'} text-2xl`}
            />

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (

        <div className="md:hidden mt-4 px-4">

          <div className="glass-card p-6 flex flex-col gap-5">

            {navLinks.map((link) => (

              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-gray-300 hover:text-white transition-colors"
              >

                {link.name}

              </a>

            ))}

            {/* MOBILE CONTACT BUTTON */}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 text-center rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
            >
              Let's Talk
            </a>

          </div>

        </div>

      )}

    </nav>
  );
}