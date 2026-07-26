import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import IntroScreen from "./components/intro-screen";
import { Toaster } from "./components/ui/toaster";

function PortfolioPage() {
  return (
    <>
      <IntroScreen />
      <div className="portfolio-content">
        <Home />
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
        </Routes>
        <Toaster />
      </>
    </Suspense>
  );
}

export default App;
