import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "个人介绍", id: "intro" },
  { name: "作品展示", id: "projects" },
  { name: "校园经历", id: "experience" },
  { name: "校外实践", id: "practice" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-[1000] flex justify-center p-6 transition-all duration-300 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className={`flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
        scrolled 
          ? "bg-white/70 border-black/5 shadow-lg" 
          : "bg-transparent border-transparent"
      }`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="px-4 py-1.5 text-sm font-medium text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-black/5 rounded-full transition-all duration-200"
          >
            {item.name}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
