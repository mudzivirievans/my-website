import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import IntroScreen from "./components/intro-screen";
import BeyondTheScreen from "./components/beyond-the-screen";
import WorkShowcasePortal from "./components/work-showcase";
import { Toaster } from "./components/ui/toaster";

function PortfolioPage() {
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
          <Route path="/beyond-the-screen" element={<BeyondTheScreen />} />
        </Routes>
        <Toaster />
      </>
    </Suspense>
  );
}

export default App;
