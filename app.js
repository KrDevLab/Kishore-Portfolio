class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log only during development
    if (window.location.hostname === "localhost") {
      console.error(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">

          <div className="glass-card p-12 text-center max-w-md">

            <h1 className="text-2xl font-bold text-white mb-4">
              Something went wrong
            </h1>

            <p className="text-gray-400 mb-6">
              Please refresh the page and try again.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Reload Page
            </button>

          </div>

        </div>
      );
    }

    return this.props.children;
  }
}

function useScrollReveal() {
  React.useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

          }

        });

      },

      {
        root: null,
        rootMargin: "50px",
        threshold: 0.1,
      }

    );

    const elements = document.querySelectorAll(
      ".reveal,.reveal-left,.reveal-right,.reveal-scale"
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, []);
}

function App() {

  useScrollReveal();

  return (

    <div
      className="relative w-full overflow-x-hidden"
      data-name="app"
      data-file="app.js"
    >

      {/* Background Blobs */}

      <div
        className="
        hidden
        lg:block
        blob
        bg-[var(--accent-start)]
        w-80
        h-80
        rounded-full
        top-0
        left-0
        mix-blend-screen
        opacity-15
      "
      ></div>

      <div
        className="
        hidden
        lg:block
        blob
        bg-[var(--accent-end)]
        w-80
        h-80
        rounded-full
        top-[20%]
        right-0
        mix-blend-screen
        opacity-15
      "
        style={{
          animationDelay: "2s",
        }}
      ></div>

      <div
        className="
        hidden
        lg:block
        blob
        bg-[var(--accent-start)]
        w-80
        h-80
        rounded-full
        bottom-[20%]
        left-0
        mix-blend-screen
        opacity-15
      "
        style={{
          animationDelay: "4s",
        }}
      ></div>

      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Services />

        <Experience />

        <WhyWorkWithMe />

        <Contact />

      </main>

      <Footer />

    </div>

  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>

    <ErrorBoundary>

      <App />

    </ErrorBoundary>

  </React.StrictMode>
);