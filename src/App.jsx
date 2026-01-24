import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import { Navbar, Hero } from "./components";
import React from "react";
import StarsCanvas from "./components/canvas/Stars";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-primary text-white">
          <div className="text-center">
            <h2 className="text-2xl mb-4">Something went wrong</h2>
            <button
              className="bg-[#915EFF] px-4 py-2 rounded"
              onClick={() => window.location.reload()}
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Lazy load components
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Graduation = lazy(() => import("./components/Graduation"));
const MUrCS = lazy(() => import("./components/MUrCS"));
const Certificates = lazy(() => import("./components/Certificates"));
const HireMe = lazy(() => import("./components/Hireme"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));
const ChatBot = lazy(() => import("./components/ChatBot"));

// Improved loading screen
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-primary flex items-center justify-center transition-opacity duration-300">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-t-[#915EFF] border-opacity-50 rounded-full animate-spin"></div>
      <p className="mt-4 text-secondary">Loading...</p>
    </div>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Increased loading time to ensure proper resource loading
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <StarsCanvas />
          <div className='relative'>
            <Navbar />
            <ErrorBoundary>
              <Hero />
            </ErrorBoundary>
          </div>
          
          <ErrorBoundary>
            <Suspense fallback={<LoadingScreen />}>
              <div className='relative z-0'>
                <About />
                <Experience />
                <Tech />
                <Works />
                <Graduation />
                <MUrCS />
                <Certificates />
                <HireMe />
                <Feedbacks />
                <div className="relative z-0">
                  <Contact />
                </div>
              </div>
              <ChatBot />
            </Suspense>
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
