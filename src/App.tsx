/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "./components/Hero";
import ProjectStack from "./components/ProjectStack";
import Experience from "./components/Experience";
import Practice from "./components/Practice";
import Navbar from "./components/Navbar";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

function HomePage() {
  const { scrollYProgress } = useScroll();
  const location = useLocation();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const id = (location.state as any).scrollTo;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      // Clear state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#5A5A40] z-[1100] origin-left"
        style={{ scaleX }}
      />

      <Hero />
      <div id="projects"><ProjectStack /></div>
      <div id="experience"><Experience /></div>
      <div id="practice"><Practice /></div>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <main className="relative selection:bg-[#5A5A40] selection:text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

