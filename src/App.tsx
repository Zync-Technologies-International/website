import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import Industries from "./components/Industries";
import Products from "./components/Products";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  return (
    // reducedMotion="user" makes every Framer Motion animation honour the OS setting
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-on-accent"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <ProblemSolution />
        <Industries />
        <Products />
        <HowItWorks />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </MotionConfig>
  );
}
