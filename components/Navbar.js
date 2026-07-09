function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = React.useMemo(
    () => [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Services", href: "#services" },
      { name: "Experience", href: "#experience" },
    ],
    []
  );

  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 50;

          setIsScrolled((prev) =>
            prev !== scrolled ? scrolled : prev
          );

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-card border-x-0 border-t-0 rounded-none bg-opacity-80"
          : "py-3 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">

        <div className="flex items-center justify-between">

          <a
            href="/"
            aria-label="Go to homepage"
            className="flex items-center ml-8 sm:ml-5 lg:ml-6"
          >
            <img
              src="/image/logo.png"
              alt="Kishore Ravi Logo"
              width="80"
              height="80"
              loading="lazy"
              decoding="async"
              draggable="false"
              className="
                w-16 h-16
                sm:w-18 sm:h-18
                md:w-16 md:h-16
                lg:w-20 lg:h-20
                object-contain
                flex-shrink-0
              "
            />

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

            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300"
            >
              Let's Talk
            </a>

          </div>

          <button
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            className="md:hidden text-white flex-shrink-0"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <div
              className={`icon-${
                isMobileMenuOpen ? "x" : "menu"
              } text-2xl`}
            />
          </button>

        </div>

      </div>

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