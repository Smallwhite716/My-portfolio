import { motion, useInView, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

type AnimationPhase = "hidden" | "appearing" | "straight" | "spread" | "tilted";

export default function ProjectStack() {
  const [phase, setPhase] = useState<AnimationPhase>("hidden");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const navigate = useNavigate();

  useEffect(() => {
    if (isInView) {
      setPhase("appearing");
      const timer1 = setTimeout(() => setPhase("straight"), 400);
      const timer2 = setTimeout(() => setPhase("spread"), 800);
      const timer3 = setTimeout(() => setPhase("tilted"), 1200);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isInView]);

  return (
    <section id="projects" ref={containerRef} className="relative min-h-screen bg-[#F5F2ED] py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 h-full grid grid-cols-1 lg:grid-cols-[40%_60%] items-center gap-12">
        
        {/* 左侧文字区 */}
        <div className="relative z-20 flex flex-col justify-center min-h-[400px] pl-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-serif italic font-light text-[#1A1A1A] mb-12 whitespace-nowrap">
              作品展示
            </h2>
            
            <div className="h-64 relative">
              <AnimatePresence mode="wait">
                {hoveredIndex !== null ? (
                  <motion.div
                    key={projects[hoveredIndex].id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-mono text-[#5A5A40] bg-[#5A5A40]/10 px-3 py-1 rounded-full">
                        PROJECT 0{projects[hoveredIndex].id}
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold text-[#1A1A1A] mb-2">
                      {projects[hoveredIndex].title}
                    </h3>
                    <p className="text-lg font-medium text-[#5A5A40] mb-4 italic">
                      {projects[hoveredIndex].slogan}
                    </p>
                    <p className="text-xl text-[#5A5A40] leading-relaxed max-w-md">
                      {projects[hoveredIndex].desc}
                    </p>
                    {projects[hoveredIndex].tools && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 pt-6 border-t border-[#5A5A40]/10"
                      >
                        <p className="text-sm font-mono text-[#5A5A40]/80 leading-relaxed max-w-md">
                          {projects[hoveredIndex].tools}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                  >
                    <p className="text-xl text-[#5A5A40]/40 italic mt-4">
                      鼠标悬停卡片查看作品详情
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* 右侧 3D 卡片区 */}
        <div className="relative h-[750px] flex items-center justify-center perspective-[2500px] pr-20">
          {projects.map((project, index) => {
            const offset = index - 1.5;
            
            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => navigate(`/project/${project.id}`)}
                initial={{ opacity: 0, scale: 0.5, rotateZ: -15, x: 0, y: 0, rotateY: 0 }}
                animate={{
                  opacity: phase === "hidden" ? 0 : 1,
                  // 适中的缩放衰减
                  scale: phase === "tilted" ? (1 - index * 0.03) : (phase === "hidden" ? 0.5 : 1),
                  rotateZ: phase === "appearing" ? -15 : 0,
                  
                  // 调整位置：保持横向间距，并向右偏移
                  x: (phase === "spread" || phase === "tilted") 
                    ? (phase === "tilted" ? (index * 180 - 270) : offset * 280) 
                    : 0,
                  
                  // 整体向下移动一些，为向上浮动留出空间
                  y: phase === "tilted" ? 60 : 0,
                  
                  // 增加到 -30 度旋转
                  rotateY: phase === "tilted" ? -30 : 0,
                  // 适中的深度间隔
                  z: phase === "tilted" ? (index * -100) : 0,
                }}
                transition={{
                  delay: phase === "appearing" ? index * 0.08 : 0,
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                }}
                whileHover={phase === "tilted" ? {
                  y: 0, 
                  z: 250, // 减小弹出深度
                  x: (index * 180 - 270) - 100, // 稍微减小偏移
                  scale: 1.05, // 减小缩放比例
                  rotateY: 0, // 变平，方便看清内容
                  transition: { type: "spring", stiffness: 300, damping: 25 }
                } : {}}
                className="absolute w-[280px] h-[400px] md:w-[380px] md:h-[540px] rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)] border border-white/10 bg-[#1A1A1A] cursor-pointer group transform-gpu"
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: hoveredIndex === index ? 100 : projects.length - index,
                  isolation: "isolate", // 强制开启隔离层，修复圆角在 3D 变换下的渲染 bug
                }}
              >
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-[2.5rem]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold text-lg">点击查看详情</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}





