import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronRight, Target, Users, Trophy, Zap, Clock, Star, CheckCircle2, Layout, Smartphone, MessageSquare, Search, Filter, FileText, UserPlus, Calendar, Upload, Gift, BarChart, Flag, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';

const DayDetail = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#2D3436]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => navigate("/", { state: { scrollTo: "projects" } })}
            className="flex items-center gap-2 group text-black font-bold"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            返回作品集
          </button>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-black" />
            <span className="font-black text-xl tracking-tighter">DayDayUp APP</span>
          </div>
          <div className="w-24" /> {/* Spacer */}
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        {/* 1. Hero Section - Tilted Grid Background */}
        <section className="relative h-[90vh] min-h-[700px] overflow-hidden bg-[#F8F9FA] flex items-center justify-center -mt-32 mb-32">
          {/* Tilted Background Grid */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div 
              className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 w-[150%] h-[150%] -rotate-[15deg] skew-x-[-10deg] opacity-40"
              style={{ transformOrigin: 'center center' }}
            >
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                  className="aspect-[9/19.5] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5 overflow-hidden"
                >
                  <img 
                    src={`/project/project3-${(i % 4) + 1}.png`}
                    className="w-full h-full object-cover grayscale opacity-50"
                    alt=""
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full text-xs font-black mb-12 uppercase tracking-[0.3em] shadow-xl">
                <Zap className="w-3 h-3" />
                <span>年轻人的全场景效率工具</span>
              </div>
              
              <h1 className="text-8xl md:text-[180px] font-black text-black leading-none mb-6 tracking-tighter">
                DayDayUp
              </h1>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                <p className="text-2xl md:text-4xl font-black text-black tracking-tight">
                  高效计划，结伴坚持
                </p>
                <div className="hidden md:block w-px h-12 bg-black/10" />
                <p className="text-lg md:text-xl font-bold text-black/40 tracking-widest uppercase">
                  Socialized Efficiency App
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#F8F9FA] to-transparent z-10" />
        </section>

        {/* 2. 项目背景 (Project Background) */}
        <section className="max-w-7xl mx-auto mb-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-black text-black mb-8 leading-tight">
                项目背景与<br />核心问题
              </h2>
              <div className="w-20 h-2 bg-black rounded-full" />
            </div>
            <div className="lg:col-span-8 space-y-12">
              <p className="text-2xl text-[#5A5A40] leading-relaxed font-medium">
                在小红书、QQ频道等社交平台上，大量用户自发寻找“学习搭子”。与此同时，多数用户同时使用多款效率工具，但工具间彼此独立，数据无法互通，操作成本高。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-10 rounded-[3rem] border border-black/5 shadow-sm">
                  <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center text-xl font-black mb-8">01</div>
                  <h4 className="text-xl font-black mb-4">工具碎片化</h4>
                  <p className="text-[#5A5A40] font-medium leading-relaxed opacity-70">
                    用户完成从任务规划到打卡的全流程，需在多个应用间切换，体验割裂。
                  </p>
                </div>
                <div className="bg-white p-10 rounded-[3rem] border border-black/5 shadow-sm">
                  <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center text-xl font-black mb-8">02</div>
                  <h4 className="text-xl font-black mb-4">缺乏动力</h4>
                  <p className="text-[#5A5A40] font-medium leading-relaxed opacity-70">
                    打卡工具以“自我记录”为主，缺乏即时反馈与正向激励，一个人坚持容易懈怠。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 竞品分析 (Competitive Analysis) */}
        <section className="max-w-7xl mx-auto mb-48">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-black mb-4 tracking-tighter">竞品分析</h2>
            <p className="text-black/30 font-bold uppercase tracking-widest text-sm">Competitive Analysis</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-6 px-4 text-left font-black text-black/40 uppercase text-xs tracking-widest">维度</th>
                  <th className="py-6 px-4 text-left font-black text-xl">番茄Todo</th>
                  <th className="py-6 px-4 text-left font-black text-xl">Forest</th>
                  <th className="py-6 px-4 text-left font-black text-xl">小日常</th>
                  <th className="py-6 px-4 text-left font-black text-xl text-black bg-black/5 rounded-t-3xl">DayDayUp</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dim: "核心功能", v1: "专注+待办", v2: "专注", v3: "打卡", v4: "任务+专注+打卡+小组", highlight: true },
                  { dim: "社交机制", v1: "自习室", v2: "多人模式", v3: "无", v4: "小组组队+排行榜+互相提醒", highlight: true },
                  { dim: "激励方式", v1: "专注统计", v2: "种树+真实种树", v3: "卡片收集", v4: "积分商城+勋章+官方大奖", highlight: true },
                  { dim: "优势", v1: "功能闭环完整", v2: "游戏化强", v3: "界面美观", v4: "全流程闭环+社交激励", highlight: true },
                  { dim: "劣势", v1: "任务管理弱", v2: "功能单一", v3: "功能单一", v4: "功能集成度高", highlight: false }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-black/5 group">
                    <td className="py-8 px-4 font-black text-black/40 text-xs uppercase tracking-widest">{row.dim}</td>
                    <td className="py-8 px-4 text-[#5A5A40] font-medium">{row.v1}</td>
                    <td className="py-8 px-4 text-[#5A5A40] font-medium">{row.v2}</td>
                    <td className="py-8 px-4 text-[#5A5A40] font-medium">{row.v3}</td>
                    <td className={`py-8 px-4 font-black text-black bg-black/5 ${i === 4 ? 'rounded-b-3xl' : ''}`}>
                      {row.v4}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. 核心痛点与解决方案 (Pain Points & Solutions) */}
        <section className="max-w-7xl mx-auto mb-48">
          <div className="bg-black rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-20 flex items-center gap-6">
                <span className="w-16 h-2 bg-white rounded-full" />
                核心痛点与解决方案
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {[
                  { pain: "计划混乱，不知先做什么", sol: "四象限任务，明确优先级", icon: "📋" },
                  { pain: "学习时分心，效率低", sol: "番茄专注 + 锁屏模式", icon: "⏱️" },
                  { pain: "一个人坚持不下去", sol: "打卡小组 + 排行榜 + 互相提醒", icon: "🤝" },
                  { pain: "坚持了没反馈，没动力", sol: "积分商城 + 勋章墙 + 官方挑战赛", icon: "🎁" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center text-3xl flex-shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white/40 font-black text-sm uppercase tracking-widest mb-2">痛点：{item.pain}</h4>
                      <p className="text-2xl font-black text-white leading-tight">{item.sol}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          </div>
        </section>

        {/* 5. 核心用户路径 (User Path) */}
        <section className="max-w-7xl mx-auto mb-48 px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center text-black">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-black tracking-tight">核心路径：结伴打卡流程</h2>
          </div>

          <div className="bg-white p-12 md:p-16 rounded-[3rem] border border-black/5 shadow-sm overflow-hidden">
            <div className="space-y-16">
              {/* Row 1 */}
              <div className="flex items-center justify-between gap-2">
                {[
                  { label: "进入APP", icon: <Layout className="w-5 h-5 md:w-6 md:h-6" /> },
                  { label: "学习小组", icon: <Users className="w-5 h-5 md:w-6 md:h-6" /> },
                  { label: "发现页", icon: <Search className="w-5 h-5 md:w-6 md:h-6" /> },
                  { label: "选择类型", icon: <Filter className="w-5 h-5 md:w-6 md:h-6" /> },
                  { label: "小组详情", icon: <FileText className="w-5 h-5 md:w-6 md:h-6" /> },
                  { label: "加入小组", icon: <UserPlus className="w-5 h-5 md:w-6 md:h-6" /> }
                ].map((step, i, arr) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center gap-3 group flex-1 min-w-0">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-14 h-14 md:w-20 md:h-20 bg-[#F8F9FA] rounded-[1.2rem] md:rounded-[1.5rem] flex items-center justify-center text-black border border-black/5 shadow-sm group-hover:bg-black group-hover:text-white transition-colors duration-300"
                      >
                        {step.icon}
                      </motion.div>
                      <span className="text-[10px] md:text-sm font-black text-black/60 group-hover:text-black transition-colors text-center truncate w-full px-1">{step.label}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="text-black/10 shrink-0">
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-between gap-2">
                {[
                  { label: "今日打卡", icon: <Calendar className="w-5 h-5 md:w-6 md:h-6" /> },
                  { label: "证明上传", icon: <Upload className="w-5 h-5 md:w-6 md:h-6" /> },
                  { label: "获得奖励", icon: <Gift className="w-5 h-5 md:w-6 md:h-6" /> },
                  { label: "排行榜", icon: <BarChart className="w-5 h-5 md:w-6 md:h-6" /> },
                  { label: "里程碑", icon: <Flag className="w-5 h-5 md:w-6 md:h-6" /> },
                  { label: "赢取大奖", icon: <Trophy className="w-5 h-5 md:w-6 md:h-6" /> }
                ].map((step, i, arr) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center gap-3 group flex-1 min-w-0">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-14 h-14 md:w-20 md:h-20 bg-[#F8F9FA] rounded-[1.2rem] md:rounded-[1.5rem] flex items-center justify-center text-black border border-black/5 shadow-sm group-hover:bg-black group-hover:text-white transition-colors duration-300"
                      >
                        {step.icon}
                      </motion.div>
                      <span className="text-[10px] md:text-sm font-black text-black/60 group-hover:text-black transition-colors text-center truncate w-full px-1">{step.label}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="text-black/10 shrink-0">
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            
            <div className="mt-16 pt-12 border-t border-black/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-black/5">
                  <h5 className="font-black text-xs uppercase tracking-widest text-black/40 mb-3">小组类型选择</h5>
                  <ul className="space-y-2 text-sm font-bold text-black/70">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-black" /> 官方小组 (实物大奖)</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-black" /> 热门小组 (积分激励)</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-black" /> 我的小组 (私密圈子)</li>
                  </ul>
                </div>
                <div className="md:col-span-2 flex items-center">
                  <p className="text-[#5A5A40] font-medium leading-relaxed italic">
                    “通过社交化打卡与即时反馈机制，将枯燥的坚持转化为充满成就感的升级之旅，构建持续的正向循环。”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. 界面展示 (Interface Showcase) */}
        <section className="max-w-7xl mx-auto mb-48">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-black mb-4 tracking-tighter">核心页面展示</h2>
            <p className="text-black/30 font-bold uppercase tracking-widest text-sm">Interface Showcase</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "打卡小组", img: "/project/project3-1.png", desc: "可以根据需求搜索打卡小组" },
              { title: "发起小组", img: "/project/project3-2.png", desc: "模板化发布页" },
              { title: "打卡上传", img: "/project/project3-3.png", desc: "上传打卡证明" },
              { title: "官方挑战", img: "/project/project3-4.png", desc: "激励里程碑" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-full max-w-[300px] aspect-[9/19.5] bg-[#1A1A1A] rounded-[3rem] shadow-2xl border-[8px] border-[#2D2D2D] overflow-hidden mb-10 group">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h4 className="font-black text-xl text-black mb-2">{item.title}</h4>
                <p className="text-sm font-bold text-black/30 uppercase tracking-widest">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-20"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-black text-white rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform active:scale-95"
            >
              查看所有界面
            </button>
          </motion.div>

          {/* Image Modal */}
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="fixed inset-0 z-[2000] bg-black/60 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-pointer"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative max-w-7xl w-full max-h-full flex items-center justify-center"
                >
                  <img 
                    src="/All/project3.jpg" 
                    alt="All Interfaces" 
                    className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <button 
                    className="absolute -top-12 right-0 text-white hover:rotate-90 transition-transform"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <X className="w-8 h-8" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Footer Navigation */}
        <section className="max-w-7xl mx-auto border-t border-black/5 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <button 
              onClick={() => navigate("/project/2")} 
              className="group flex flex-col items-start"
            >
              <span className="text-sm font-black text-black/20 mb-4 uppercase tracking-widest">上一个项目</span>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-[2rem] bg-white shadow-xl flex items-center justify-center group-hover:-translate-x-3 transition-transform duration-500 border border-black/5">
                  <ArrowLeft className="text-black" />
                </div>
                <span className="text-3xl font-black text-black">有啥吃啥 APP</span>
              </div>
            </button>

            <button 
              onClick={() => navigate("/project/4")} 
              className="group flex flex-col items-end text-right"
            >
              <span className="text-sm font-black text-black/20 mb-4 uppercase tracking-widest">下一个项目</span>
              <div className="flex items-center gap-6">
                <span className="text-3xl font-black text-black">Uneed APP</span>
                <div className="w-16 h-16 rounded-[2rem] bg-white shadow-xl flex items-center justify-center group-hover:translate-x-3 transition-transform duration-500 border border-black/5">
                  <ChevronRight className="text-black" />
                </div>
              </div>
            </button>
          </div>
          
          <div className="text-center pb-20">
            <p className="text-sm font-black text-black/20 mb-6 uppercase tracking-widest">效率即是自由</p>
            <div className="flex justify-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white text-xl shadow-lg shadow-black/10">⚡</div>
              <div className="w-12 h-12 rounded-2xl bg-[#F8F9FA] border border-black/5 flex items-center justify-center text-black text-xl shadow-lg shadow-black/5">🎯</div>
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white text-xl shadow-lg shadow-black/10">🔥</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DayDetail;
