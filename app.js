class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
          <div className="text-center glass-card p-12">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-400 mb-6">We're sorry, but something unexpected happened.</p>
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
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function App() {
  try {
    useScrollReveal();

    return (
      <div className="relative w-full" data-name="app" data-file="app.js">
        {/* Background Blobs */}
        <div className="blob bg-[var(--accent-start)] w-96 h-96 rounded-full top-0 left-[-10%] mix-blend-screen opacity-20"></div>
        <div className="blob bg-[var(--accent-end)] w-96 h-96 rounded-full top-[20%] right-[-10%] mix-blend-screen opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="blob bg-[var(--accent-start)] w-96 h-96 rounded-full bottom-[20%] left-[-10%] mix-blend-screen opacity-20" style={{ animationDelay: '4s' }}></div>

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
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);