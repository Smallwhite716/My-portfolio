import { motion, AnimatePresence } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { projects, ProjectScreen, UserResearchMessage } from "../data/projects";
import { ArrowLeft, CheckCircle2, Target, Smartphone, Workflow, X, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import DadaDetail from "./DadaDetail";
import CookDetail from "./CookDetail";
import DayDetail from "./DayDetail";
import UneedDetail from "./UneedDetail";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));
  const [selectedScreen, setSelectedScreen] = useState<ProjectScreen | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  useEffect(() => {
    if (selectedScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedScreen]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F2ED]">
        <div className="text-center">
          <h1 className="text-4xl font-serif italic mb-4">作品未找到</h1>
          <button onClick={() => navigate("/")} className="text-[#5A5A40] underline">返回首页</button>
        </div>
      </div>
    );
  }

  // Custom layout for DADA (Project ID 1)
  if (project.id === 1) {
    return <DadaDetail />;
  }

  // Custom layout for Cook (Project ID 2)
  if (project.id === 2) {
    return <CookDetail />;
  }

  // Custom layout for DayDayUp (Project ID 3)
  if (project.id === 3) {
    return <DayDetail />;
  }

  // Custom layout for Uneed (Project ID 4)
  if (project.id === 4) {
    return <UneedDetail />;
  }

  return (
    <div className="bg-[#F5F2ED] min-h-screen selection:bg-[#5A5A40] selection:text-white pb-24">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate("/", { state: { scrollTo: "projects" } })}
        className="fixed top-8 left-8 z-[1100] flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-black/5 hover:bg-white transition-all group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-bold uppercase tracking-widest">Back to Projects</span>
      </motion.button>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#1A1A1A] text-white">
        <div className="absolute inset-0 opacity-40">
          <img 
            src={project.img} 
            alt={project.title} 
            className="w-full h-full object-cover blur-sm scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#F5F2ED]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.5em] text-[#5A5A40] mb-6 block">Case Study</span>
            <h1 className="text-5xl md:text-7xl font-serif italic mb-6 leading-tight">{project.title}</h1>
            <p className="text-xl md:text-2xl font-serif italic opacity-60">{project.slogan}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        
        {/* Pain Points & Audience - Compact Version */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-black/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#5A5A40]/10 rounded-xl flex items-center justify-center text-[#5A5A40]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-black uppercase tracking-widest">解决痛点</h2>
            </div>
            <ul className="space-y-4">
              {project.painPoints.map((point, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-[#5A5A40] font-serif italic text-lg mt-0.5">0{i+1}.</span>
                  <p className="text-base text-[#1A1A1A]/70 font-serif italic leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Target Audience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#1A1A1A] p-8 rounded-[2.5rem] shadow-xl text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-black uppercase tracking-widest">目标人群</h2>
            </div>
            <ul className="space-y-4">
              {project.targetAudience.map((audience, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5A5A40] mt-2.5" />
                  <p className="text-base opacity-70 font-serif italic leading-relaxed">{audience}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* User Research Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <MessageSquare className="w-6 h-6 text-[#5A5A40]" />
              <h2 className="text-3xl font-black uppercase tracking-[0.3em]">用户调研</h2>
            </div>
            <p className="text-[#1A1A1A]/40 font-serif italic">Voice of the Users</p>
          </div>

          <div className="relative bg-white/30 rounded-[3rem] border border-black/5 overflow-hidden p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {project.userResearch.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.5, opacity: 0, y: 20 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20,
                    delay: (i % 4) * 0.1 
                  }}
                  className={`flex items-start gap-3 ${
                    i % 3 === 0 ? 'md:translate-y-8' : 
                    i % 3 === 1 ? 'md:-translate-y-4' : 
                    'md:translate-y-12'
                  }`}
                >
                  {/* Avatar */}
                  <img 
                    src={msg.avatar} 
                    alt="Avatar" 
                    className="w-10 h-10 rounded-lg object-cover shadow-sm flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Bubble - Always White */}
                  <div className="relative px-4 py-3 bg-white text-black rounded-2xl rounded-tl-none text-sm font-serif italic leading-relaxed shadow-sm border border-black/5">
                    {/* Triangle */}
                    <div className="absolute top-0 left-[-8px] w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-white" />
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#5A5A40]/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5A5A40]/5 rounded-full blur-3xl -z-10" />
          </div>
        </section>

        {/* Interface Showcase */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Smartphone className="w-6 h-6 text-[#5A5A40]" />
              <h2 className="text-3xl font-black uppercase tracking-[0.3em]">界面展示</h2>
            </div>
            <p className="text-[#1A1A1A]/40 font-serif italic">Click to view details</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {project.screens.map((screen, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedScreen(screen)}
                className="group cursor-pointer"
              >
                {/* Phone Frame Small */}
                <div className="relative aspect-[9/19] bg-[#1A1A1A] rounded-[2rem] p-1.5 shadow-lg border-[4px] border-[#2A2A2A] overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-white">
                    <img 
                      src={screen.img} 
                      alt={screen.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">View Detail</span>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                  {screen.title}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Flowchart - Text Based */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Workflow className="w-6 h-6 text-[#5A5A40]" />
              <h2 className="text-3xl font-black uppercase tracking-[0.3em]">业务流程说明</h2>
            </div>
            <p className="text-[#1A1A1A]/40 font-serif italic">System Architecture & User Flow</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-20 rounded-[3rem] shadow-xl border border-black/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-[#5A5A40]" />
            <div className="max-w-3xl">
              <h3 className="text-2xl font-serif italic mb-8 text-[#1A1A1A]">逻辑路径解析</h3>
              <p className="text-xl text-[#1A1A1A]/60 font-serif italic leading-relaxed whitespace-pre-wrap">
                {project.flowchartDesc}
              </p>
              
              {/* Decorative Placeholder for Diagram */}
              <div className="mt-12 p-8 border-2 border-dashed border-black/10 rounded-2xl flex flex-col items-center justify-center text-black/20 italic">
                <Workflow className="w-12 h-12 mb-4 opacity-20" />
                <p>[ 此处可后续替换为您的业务流程图组件或手绘图 ]</p>
              </div>
            </div>
          </motion.div>
        </section>

      </div>

      {/* Screen Detail Modal */}
      <AnimatePresence>
        {selectedScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60"
              onClick={() => setSelectedScreen(null)}
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl h-[80vh] max-h-[700px] bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedScreen(null)}
                className="absolute top-6 right-6 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left: Phone Display (Image 2 Style) */}
              <div className="w-full md:w-1/2 h-[400px] md:h-full bg-black/30 flex items-center justify-center p-12">
                <div className="relative h-full aspect-[9/19] bg-[#0A0A0A] rounded-[3rem] p-3 shadow-2xl border-[8px] border-white/10">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white">
                    <img 
                      src={selectedScreen.img} 
                      alt={selectedScreen.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Info (Transparent Glass) */}
              <div className="flex-1 p-12 md:p-20 flex flex-col justify-center text-white bg-white/5">
                <span className="text-xs font-black uppercase tracking-[0.5em] text-white/60 mb-6 block">Interface Detail</span>
                <h3 className="text-4xl md:text-5xl font-serif italic mb-8 leading-tight">{selectedScreen.title}</h3>
                <div className="w-12 h-1 bg-white/40 mb-8" />
                <p className="text-xl md:text-2xl text-white/80 font-serif italic leading-relaxed">
                  {selectedScreen.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
