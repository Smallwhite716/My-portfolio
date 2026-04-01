import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const floatingY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const welcomeText = "WELCOME";
  const portfolioText = "我的作品集";

  return (
    <div ref={containerRef} className="relative bg-[#F5F2ED]">
      {/* --- LAYERED HERO SECTION --- */}
      <div className="relative h-[120vh] overflow-hidden">
        {/* Layer 1: Deep Background Text */}
        <motion.div 
          style={{ y: bgY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span className="text-[35vw] font-serif italic text-[#1A1A1A]/[0.02] leading-none">
            2026
          </span>
        </motion.div>

        {/* Layer 2: Floating Decorative Elements */}
        <motion.div 
          style={{ y: floatingY }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-[#5A5A40]/5 blur-3xl" />
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-[#1A1A1A]/5 blur-3xl" />
          
          {/* Floating Glass Card */}
          <div className="absolute top-[30%] right-[15%] w-48 h-64 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl rotate-12 shadow-2xl hidden md:block" />
          <div className="absolute bottom-[10%] left-[15%] w-32 h-32 bg-[#5A5A40]/10 backdrop-blur-md border border-[#5A5A40]/20 rounded-full -rotate-12 hidden md:block" />
        </motion.div>

        {/* Layer 3: Main Content */}
        <section className="relative h-screen flex items-center justify-center z-20">
          <motion.div
            style={{ y: textY }}
            className="relative w-full px-6 flex flex-col items-center"
          >
            <div className="relative">
              {/* Top Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 mb-8 justify-center"
              >
                <div className="h-px w-8 bg-[#5A5A40]" />
                <span className="text-[#5A5A40] text-[10px] font-black uppercase tracking-[0.5em]">Selected Works</span>
                <div className="h-px w-8 bg-[#5A5A40]" />
              </motion.div>

              {/* Main Title with Typewriter Effect */}
              <div className="flex justify-center overflow-hidden mb-4">
                {welcomeText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 80, rotate: 10 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.04,
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="text-[16vw] md:text-[12vw] font-serif italic text-[#1A1A1A] leading-[0.85] select-none"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-px bg-[#1A1A1A]/10 w-full my-8 origin-center"
              />

              {/* Subtitle with Typewriter Effect */}
              <div className="flex justify-center overflow-hidden">
                {portfolioText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.8 + index * 0.05,
                    }}
                    className="text-[10vw] md:text-[8vw] font-serif italic font-light text-[#1A1A1A]/40 leading-[1]"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <div className="w-px h-16 bg-gradient-to-b from-[#1A1A1A]/0 via-[#1A1A1A]/30 to-[#1A1A1A]/0 animate-pulse" />
            <span className="text-[8px] uppercase tracking-[0.5em] text-[#1A1A1A]/20 font-bold">Explore</span>
          </motion.div>
        </section>
      </div>

      {/* --- PERSONAL INTRO: STANDEE EFFECT --- */}
      <section id="intro" className="relative z-10 min-h-screen bg-[#F5F2ED] text-[#1A1A1A] py-32 px-6 overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: The "Standee" Pop-up */}
          <div className="relative h-[500px] md:h-[600px] flex items-end justify-center">
            {/* Shadow Base */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-0 w-[60%] h-8 bg-black/10 blur-2xl rounded-[100%]"
            />
            
            {/* Person Cutout */}
            <motion.div
              initial={{ y: 200, scale: 0.9, opacity: 0 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              viewport={{ once: false, margin: "0px" }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 15,
                delay: 0 
              }}
              className="relative z-10 h-full w-full flex items-end justify-center"
            >
              <img 
                src="/me.png" 
                alt="Profile Standee" 
                className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                style={{ maskImage: "linear-gradient(to top, black 90%, transparent 100%)" }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Right: Structured Content */}
          <div className="pb-12 lg:pb-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-16 bg-[#5A5A40]" />
                <span className="text-[#5A5A40] text-xs font-black uppercase tracking-[0.4em]">Personal Profile</span>
              </div>

              <h2 className="text-7xl md:text-9xl font-serif italic mb-2 leading-none">
                林思潞
              </h2>
              
              <div className="text-3xl md:text-4xl font-serif italic text-[#1A1A1A]/20 mb-8">
                I Say
              </div>
              
              <p className="text-2xl font-serif italic text-[#1A1A1A]/60 mb-10 max-w-xl leading-relaxed">
                "我想要，我能做到！"
              </p>

              {/* Education */}
              <div className="mb-10">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#5A5A40] border-b border-[#5A5A40]/20 pb-2 mb-6">
                  教育背景 <span className="text-[10px] opacity-50 ml-2">EDUCATION</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-6">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[#5A5A40] opacity-50 w-12 shrink-0">学校</span>
                    <div className="text-2xl md:text-3xl font-serif italic text-[#1A1A1A]/80">桂林电子科技大学</div>
                  </div>
                  <div className="flex items-baseline gap-6">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[#5A5A40] opacity-50 w-12 shrink-0">专业</span>
                    <div className="text-2xl md:text-3xl font-serif italic text-[#1A1A1A]/80">数字媒体技术</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Major Courses */}
                <div className="space-y-4">
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#5A5A40] border-b border-[#5A5A40]/20 pb-2">
                    主修课程 <span className="text-[10px] opacity-50 ml-2">CORE COURSES</span>
                  </h3>
                  <ul className="space-y-2 font-serif italic text-lg text-[#1A1A1A]/80">
                    <li>交互设计</li>
                    <li>软件工程</li>
                     <li>游戏开发</li>
                    <li>Java程序设计</li>
                    <li>多媒体网站开发</li>
                    <li>Android应用开发</li>
                   
                  </ul>
                </div>

                {/* Awards */}
                <div className="space-y-4">
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#5A5A40] border-b border-[#5A5A40]/20 pb-2">
                    获奖经历 <span className="text-[10px] opacity-50 ml-2">HONORS & AWARDS</span>
                  </h3>
                  <ul className="space-y-2 font-serif italic text-lg text-[#1A1A1A]/80">
                    <li>国家励志奖学金</li>
                    <li>校级奖学金</li>
                    <li>全国大学生电子商务“创新、创意及创业”挑战赛校级一等奖</li>
                    <li>大学生创新创业项目获校级铜奖</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
