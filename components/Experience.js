function Experience() {
  const timeline = React.useMemo(
    () => [
      {
        role: "Freelance UI/UX Designer",
        company: "Self-Employed",
        date: "Present",
        desc: "Currently available for freelance opportunities. Focusing on modern web design, portfolio creation, and frontend development learning.",
        type: "active",
      },
      {
        role: "Learning Frontend Development",
        company: "Self-Taught",
        date: "Recent",
        desc: "Expanding my skill set by learning HTML, CSS, JavaScript, and modern frameworks to bring my designs to life.",
        type: "learning",
      },
      {
        role: "UI/UX Design Intern",
        company: "Design Agency",
        date: "3 Months",
        desc: "Gained hands-on experience in wireframing, prototyping, and understanding user-centered design principles in a professional environment.",
        type: "past",
      },
    ],
    []
  );

  const badgeClasses = {
    active:
      "bg-rose-500/10 text-rose-400 border border-rose-500/20",
    learning:
      "bg-red-500/10 text-red-400 border border-red-500/20",
    past: "bg-white/5 text-gray-400",
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 relative"
      data-name="experience"
      data-file="components/Experience.js"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 reveal text-center">
          <h2
            id="experience-heading"
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Experience.
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-start)] to-[var(--accent-end)] rounded-full mx-auto"></div>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {timeline.map((item, idx) => (
            <div
              key={item.role}
              className="mb-12 ml-8 md:ml-0 md:grid md:grid-cols-2 items-center reveal relative group"
            >
              {/* Timeline Dot */}
              <div
                className="
                  absolute
                  -left-10
                  md:left-1/2
                  md:-ml-2.5
                  top-0
                  md:top-1/2
                  md:-mt-2.5
                  w-5
                  h-5
                  rounded-full
                  bg-[#0F172A]
                  border-2
                  border-[var(--accent-start)]
                  z-10
                  group-hover:bg-[var(--accent-start)]
                  group-hover:shadow-[0_0_8px_rgba(56,189,248,.35)]
                  transition-colors
                  duration-300
                "
              ></div>

              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-[-3rem] w-px bg-white/10 -ml-px"></div>

              {/* Timeline Card */}
              <article
                className={`glass-card p-6 ${
                  idx % 2 === 0
                    ? "md:mr-12 md:text-right"
                    : "md:col-start-2 md:ml-12"
                } hover:border-white/20 transition-colors duration-300`}
              >
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                    badgeClasses[item.type]
                  }`}
                >
                  {item.date}
                </span>

                <h3 className="text-xl font-bold mb-1 text-white">
                  {item.role}
                </h3>

                <h4 className="text-[var(--accent-start)] text-sm font-medium mb-4">
                  {item.company}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}