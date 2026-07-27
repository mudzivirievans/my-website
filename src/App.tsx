import { Suspense, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home";
import BeyondScreen from "./components/beyond-screen";
import IntroScreen from "./components/intro-screen";
import WorkShowcasePortal from "./components/work-showcase";
import { Toaster } from "./components/ui/toaster";

function PortfolioPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Evans Mudziviri | Software Engineer";

    const openPersonalStory = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>('a[href="#beyond"]');

      if (!link) return;

      event.preventDefault();
      navigate("/beyond-the-screen");
    };

    document.addEventListener("click", openPersonalStory);

    return () => {
      document.removeEventListener("click", openPersonalStory);
    };
  }, [navigate]);

  return (
    <>
      <IntroScreen />
      <div className="portfolio-content">
        <Home />
        <WorkShowcasePortal />
      </div>
    </>
  );
}

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/beyond-the-screen" element={<BeyondScreen />} />
        </Routes>
        <Toaster />
      </>
    </Suspense>
  );
}

export default App;
