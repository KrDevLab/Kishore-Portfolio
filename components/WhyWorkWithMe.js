function WhyWorkWithMe() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [visibleItems, setVisibleItems] = React.useState(4);

  const reasons = React.useMemo(
    () => [
      {
        title: "Fast Learner",
        desc: "I quickly adapt to new tools, technologies, and design trends to deliver the best results.",
      },
      {
        title: "Clean UI Design",
        desc: "I prioritize simplicity, whitespace, and strong typography to create elegant interfaces.",
      },
      {
        title: "Creative Thinking",
        desc: "Approaching problems with a fresh perspective to find unique and effective design solutions.",
      },
      {
        title: "Responsive Communication",
        desc: "Clear, honest, and timely updates throughout the entire project process.",
      },
    ],
    []
  );

  React.useEffect(() => {
    let resizeTimeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= 1024) setVisibleItems(4);
        else if (window.innerWidth >= 768) setVisibleItems(2);
        else setVisibleItems(1);
      }, 100);
    };

    handleResize();

    window.addEventListener("resize", handleResize, {
      passive: true,
    });

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = React.useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.max(0, reasons.length - visibleItems)
        : prev - 1
    );
  }, [reasons.length, visibleItems]);

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prev) =>
      prev >= reasons.length - visibleItems
        ? 0
        : prev + 1
    );
  }, [reasons.length, visibleItems]);

  const translateX = React.useMemo(() => {
    return (currentIndex * 100) / (reasons.length || 1);
  }, [currentIndex, reasons]);

  return (
    <section
      id="why-work-with-me"
      aria-labelledby="why-work-heading"
      className="py-24 relative bg-white/[0.02]"
      data-name="why-work-with-me"
      data-file="components/WhyWorkWithMe.js"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left">
            <h2
              id="why-work-heading"
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Why Work With Me.
            </h2>

            <p className="text-gray-400 max-w-2xl">
              Core values that drive my work ethic and design process.
            </p>
          </div>

          {visibleItems < reasons.length && (
            <div className="flex gap-2 shrink-0 lg:hidden">
              <button
                aria-label="Previous reason"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[var(--accent-start)] transition-colors duration-300"
              >
                <div className="icon-chevron-left text-white"></div>
              </button>

              <button
                aria-label="Next reason"
                onClick={handleNext}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[var(--accent-start)] transition-colors duration-300"
              >
                <div className="icon-chevron-right text-white"></div>
              </button>
            </div>
          )}
        </div>

        {visibleItems >= 4 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, idx) => (
              <article
                key={reason.title}
                className="glass-card p-8 reveal text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-[var(--accent-start)] to-[var(--accent-end)] flex items-center justify-center mb-4 text-white font-bold shadow-md">
                  {idx + 1}
                </div>

                <h3 className="text-lg font-bold mb-3">
                  {reason.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {reason.desc}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl relative group">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${translateX}%)`,
                width: `${(reasons.length * 100) / visibleItems}%`,
              }}
            >
              {reasons.map((reason, idx) => (
                <div
                  key={reason.title}
                  className="p-3 shrink-0"
                  style={{
                    width: `${100 / reasons.length}%`,
                  }}
                >
                  <article className="glass-card h-full p-8 text-center hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-[var(--accent-start)] to-[var(--accent-end)] flex items-center justify-center mb-4 text-white font-bold shadow-md">
                      {idx + 1}
                    </div>

                    <h3 className="text-lg font-bold mb-3">
                      {reason.title}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      {reason.desc}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}