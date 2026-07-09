function Hero() {
  return (
    <section
      id="hero"
      className="min-h-fit md:min-h-screen flex items-center pt-24 pb-12 relative"
      data-name="hero"
      data-file="components/Hero.js"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8 reveal-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mt-10 rounded-full glass-card border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">
                Available for Freelance Work
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl text-gray-400 font-medium">
                Hello, I'm Kishore Ravi
              </h2>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                UI/UX Designer & <br />
                <span className="text-gradient">Frontend Dev</span>
              </h1>

              <p className="text-lg text-gray-400 max-w-md leading-relaxed border-l-2 border-[var(--accent-start)] pl-4">
                Designing clean digital experiences with creativity and purpose.
                Bringing ideas to life through thoughtful UI and solid code.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
<span className="icon-arrow-right ml-2 text-lg" aria-hidden="true"></span>
                <div className="icon-arrow-right ml-2 text-lg"></div>
              </a>

              {/* <a
                href="hire.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Hire Me
              </a> */}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://www.linkedin.com/in/kishore-ravi-/"
                target="_blank"
                rel="noopener noreferrer"
                 aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all"
              >
                <div className="icon-linkedin text-xl"></div>
              </a>

              {/* <a
                href="https://github.com/KrDevLab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all"
              >
                <div className="icon-github text-xl"></div>
              </a> */}

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                 aria-label="Instagram Profile"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all"
              >
                <div className="icon-instagram text-xl"></div>
              </a>
            </div>

            {/* Mobile Profile Image */}
            <div className="md:hidden flex justify-center mt-8">
              <div className="relative">

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent-start)] to-[var(--accent-end)] blur-2xl opacity-40 animate-pulse"></div>

                {/* Gradient Border */}
                <div className="relative p-1 rounded-full bg-gradient-to-r from-[var(--accent-start)] to-[var(--accent-end)]">

                  <img
  src="/image/Pro Pic.webp"
  alt="Kishore Ravi"
  width="224"
  height="224"
  loading="eager"
  fetchPriority="high"
  decoding="async"
  draggable="false"
  className="w-56 h-56 rounded-full object-cover bg-black border-2 border-white/10"
/>

                </div>

              </div>
            </div>
          </div>

          {/* Desktop Hero Image */}
          <div className="relative reveal-right delay-200 hidden md:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">

              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-start)] to-[var(--accent-end)] rounded-[2rem] rotate-3 opacity-20 blur-md"></div>

              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-start)] to-[var(--accent-end)] rounded-[2rem] rotate-3 opacity-50"></div>
<img
  src="/image/Pro Pic.webp"
  alt="Kishore Ravi"
  width="500"
  height="500"
  loading="eager"
  fetchPriority="high"
  decoding="async"
  draggable="false"
  className="absolute inset-0 w-full h-full object-cover rounded-[2rem] -rotate-3 hover:rotate-0 transition-transform duration-500 glass-card"
/>

              {/* Floating UI Badge */}
              <div className="absolute -left-8 top-1/4 glass-card p-3 rounded-xl flex items-center gap-3 animate-[float_8s_ease-in-out_infinite]">

                <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center">
                  <div className="icon-figma text-rose-400 text-xl"></div>
                </div>

                <div className="text-sm font-semibold">
                  UI Design
                </div>

              </div>

              {/* Floating Frontend Badge */}
              <div className="absolute -right-8 bottom-1/4 glass-card p-3 rounded-xl flex items-center gap-3 animate-[float_10s_ease-in-out_infinite_reverse]">

                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <div className="icon-code text-red-400 text-xl"></div>
                </div>

                <div className="text-sm font-semibold">
                  Frontend
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}