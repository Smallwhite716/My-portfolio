import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronRight, Utensils, Search, Filter, Heart, Clock, Star, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';

const CookDetail = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#FEF9F0] font-sans text-[#4A4A4A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#FFD8A8]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => navigate("/", { state: { scrollTo: "projects" } })}
            className="flex items-center gap-2 group text-[#FF6B00] font-bold"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            返回作品集
          </button>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF6B00]" />
            <span className="font-black text-xl tracking-tighter text-[#2D3436]">有啥吃啥 APP</span>
          </div>
          <div className="w-24" /> {/* Spacer */}
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        {/* 1. Hero Section */}
        <section className="max-w-7xl mx-auto mb-48 relative">
          {/* Background Atmospheric Glow */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#FF6B00]/10 to-transparent blur-[120px] -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFF4E6] text-[#FF6B00] rounded-full text-sm font-bold mb-12">
                <Utensils className="w-4 h-4" />
                <span>美食/工具类 APP 设计</span>
              </div>
              
              <h1 className="text-8xl md:text-[120px] font-black text-[#2D3436] leading-[0.9] mb-6 tracking-tighter">
                有啥吃啥
              </h1>
              <p className="text-3xl md:text-4xl font-medium text-[#FF6B00] mb-14 tracking-tight opacity-90">
                有食材，就能做
              </p>
              
              <p className="text-2xl text-[#5A5A40] leading-relaxed mb-10 max-w-xl font-medium">
                输入冰箱剩菜，输出今晚菜单 —— <br />
                <span className="text-lg opacity-40 font-normal">解决“今天吃什么”的世纪难题，让每一份食材都不被辜负。🥦🍅🍳</span>
              </p>
            </motion.div>

            <div className="relative flex justify-center lg:justify-end perspective-[3000px]">
              {/* Decorative Glass Card Behind Phone */}
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 15 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-white/30 backdrop-blur-3xl rounded-[4rem] border border-white/50 -z-10 shadow-2xl"
              />

              {/* Secondary Phone (Behind) */}
              <motion.div
                initial={{ opacity: 0, x: 100, rotateY: 0 }}
                animate={{ opacity: 0.2, x: -100, y: 20, rotateY: -35, rotateX: 15, rotateZ: -15 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="absolute top-10 w-[280px] h-[580px] bg-[#2D2D2D] rounded-[3rem] p-2 border-[6px] border-[#3D3D3D] blur-[2px] -z-10"
              >
                <div className="w-full h-full rounded-[2.5rem] bg-[#FFD8A8]/10" />
              </motion.div>

              {/* Main 3D Tilted Phone */}
              <motion.div
                initial={{ opacity: 0, rotateY: 0, y: 50 }}
                animate={{ opacity: 1, rotateY: -28, rotateX: 12, rotateZ: -8 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20"
              >
                <div 
                  className="relative w-[320px] h-[650px] bg-[#1A1A1A] rounded-[3.5rem] p-3 shadow-[-40px_60px_120px_rgba(0,0,0,0.35)] border-[8px] border-[#2D2D2D]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  
                  <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-[#FF6B00] flex flex-col items-center justify-center relative">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0, z: 0 }}
                      animate={{ scale: 1, opacity: 1, z: 80 }}
                      transition={{ delay: 0.8, duration: 1 }}
                      className="text-center z-10"
                      style={{ transform: "translateZ(80px)" }}
                    >
                      <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-5xl mb-6 mx-auto shadow-2xl">
                        🍳
                      </div>
                      <h2 className="text-4xl font-black text-white tracking-tighter mb-2">有啥吃啥</h2>
                      <p className="text-white/80 font-bold">有食材，就能做</p>
                    </motion.div>
                    
                    {/* Decorative Background Elements */}
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-black/5 rounded-full blur-3xl" />
                  </div>

                  {/* High-end Glass Reflection */}
                  <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Floating Sparkles & Ingredients (Inspired by "Bling!" reference) */}
              <motion.div
                animate={{ y: [0, -25, 0], rotate: [15, 25, 15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-16 top-1/4 w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-4xl border border-[#FFD8A8]/50 z-30"
              >
                🥦
              </motion.div>
              
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3], rotate: [0, 45, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute right-10 top-0 text-[#FF6B00] z-30"
              >
                <Star className="w-10 h-10 fill-current" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -left-24 top-1/3 text-[#FFD8A8] z-30"
              >
                <Star className="w-14 h-14 fill-current" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 25, 0], rotate: [-15, -5, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-16 bottom-1/4 w-20 h-20 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-3xl border border-[#FFD8A8]/50 z-30"
              >
                🍅
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. 项目背景 & 核心价值 (Merged Frame) */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-xl border border-[#FFD8A8]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10 text-9xl">💡</div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                  <h2 className="text-3xl font-black text-[#2D3436] mb-8 flex items-center gap-4">
                    <span className="w-12 h-1.5 bg-[#FF6B00] rounded-full" />
                    项目背景
                  </h2>
                  <p className="text-xl text-[#5A5A40] leading-relaxed font-medium">
                    日常生活中，许多人面临<span className="text-[#FF6B00] font-bold">“今天吃什么”</span>的世纪难题。尤其当冰箱里只剩一些零散的剩菜剩料时，人们往往不知道如何利用这些食材做出完整的菜肴。
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-black text-[#2D3436] mb-8 flex items-center gap-4">
                    <span className="w-12 h-1.5 bg-[#FF6B00] rounded-full" />
                    核心价值
                  </h2>
                  <p className="text-xl text-[#5A5A40] leading-relaxed font-medium">
                    从“你想吃什么”转变为<span className="text-[#FF6B00] font-bold">“你能做什么”</span>，以用户现有食材为出发点，智能匹配剩余食材可做的菜谱，减少决策成本与食材浪费。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 目标用户 (Separate Card) */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="bg-[#FF6B00] rounded-[4rem] p-12 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
                <span className="w-12 h-1.5 bg-white rounded-full" />
                目标用户
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "上班族", desc: "工作疲惫，不想在“吃什么”上费精力", icon: "💼" },
                  { title: "厨房小白", desc: "经验有限，不确定食材如何搭配", icon: "🐣" },
                  { title: "剩菜困难户", desc: "冰箱食材零散，难以整合成菜", icon: "🍱" }
                ].map((user, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -10 }}
                    className="bg-white/10 backdrop-blur-md p-8 rounded-[3rem] border border-white/20"
                  >
                    <div className="text-4xl mb-6">{user.icon}</div>
                    <h4 className="font-black text-2xl mb-2">{user.title}</h4>
                    <p className="opacity-90 font-bold leading-relaxed">{user.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>
        </section>

        {/* 4. 需求调研 / 用户洞察 */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#2D3436] mb-4">需求调研 / 用户洞察</h2>
            <p className="text-[#FF6B00] font-bold">User Research & Insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { name: "上班族@小王", quote: "冰箱里总有些零零散散的东西，单吃不够、扔掉可惜，想做个菜又不知道配什么..." },
              { name: "厨房小白@阿珍", quote: "我厨艺一般，常用的菜就那几道，冰箱里东西多了反而不知道怎么组合。" },
              { name: "独居青年@阿杰", quote: "每次做饭前都要想很久，最后还是点外卖，感觉很浪费。" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[3rem] shadow-lg border border-[#FFD8A8]/10 relative"
              >
                <div className="text-4xl mb-6">💬</div>
                <p className="text-[#5A5A40] font-bold leading-relaxed mb-6 italic">"{item.quote}"</p>
                <div className="text-sm font-black text-[#FF6B00]">— {item.name}</div>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#FFF9E6] rounded-[4rem] p-12 md:p-16 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-32 h-32 bg-[#FFD8A8] rounded-full flex items-center justify-center text-5xl flex-shrink-0">💡</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-[#FF6B00] font-black text-xl mb-4">核心洞察 01</h4>
                <p className="text-[#5A5A40] font-bold text-lg">用户不缺菜谱，缺的是<span className="bg-[#FF6B00] text-white px-2">“这些食材能组合出什么”</span>的思路。</p>
              </div>
              <div>
                <h4 className="text-[#FF6B00] font-black text-xl mb-4">核心洞察 02</h4>
                <p className="text-[#5A5A40] font-bold text-lg">用户不需要“学做饭”，只需要<span className="bg-[#FF6B00] text-white px-2">“快速决定今晚吃什么”</span>。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 竞品分析 (Competitive Analysis) */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#2D3436] mb-4">竞品分析</h2>
            <p className="text-[#FF6B00] font-bold uppercase tracking-widest text-sm">Competitive Analysis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { name: "下厨房", tag: "菜谱搜索", logic: "你想做什么，搜一下", issue: "需知道菜名，剩菜场景不适用", color: "bg-[#FFF4E6]" },
              { name: "豆果美食", tag: "社区+菜谱", logic: "你想学什么，跟着做", issue: "功能太重，剩菜匹配弱", color: "bg-[#F0F9FF]" },
              { name: "懒饭", tag: "短视频菜谱", logic: "视觉驱动选择", issue: "仍是被动搜索，无法根据冰箱匹配", color: "bg-[#F5F3FF]" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`${item.color} p-10 rounded-[3rem] border border-black/5 shadow-sm`}
              >
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-2xl font-black text-[#2D3436]">{item.name}</h4>
                  <span className="px-3 py-1 bg-white/50 rounded-full text-xs font-bold text-[#5A5A40]">{item.tag}</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-black text-[#FF6B00] uppercase mb-2">核心逻辑</p>
                    <p className="text-[#5A5A40] font-bold">{item.logic}</p>
                  </div>
                  <div className="pt-6 border-t border-black/5">
                    <p className="text-xs font-black text-red-500 uppercase mb-2">不足之处</p>
                    <p className="text-[#5A5A40] font-medium opacity-80">{item.issue}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#2D3436] rounded-[4rem] p-12 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-12 flex items-center gap-4">
                <span className="w-12 h-1.5 bg-[#FF6B00] rounded-full" />
                我们的差异化
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-[#FF6B00] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-[#FF6B00]/20">🎯</div>
                  <div>
                    <h4 className="text-xl font-black mb-3 text-[#FFD8A8]">从"想吃什么"到"能做什么"</h4>
                    <p className="text-white/70 font-medium leading-relaxed">用户不需要有预设目标，APP 帮你发现现有食材能创造出的惊喜，彻底消除选择困难。</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-[#FF6B00] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-[#FF6B00]/20">⚡</div>
                  <div>
                    <h4 className="text-xl font-black mb-3 text-[#FFD8A8]">轻量、专注</h4>
                    <p className="text-white/70 font-medium leading-relaxed">不堆砌社交与电商功能，聚焦“输入剩菜 → 输出菜单”的核心闭环，提供极致的工具体验。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-[100px]" />
          </div>
        </section>

        {/* 6. 痛点与解决方案 */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#2D3436] mb-4">核心痛点与解决方案</h2>
            <p className="text-[#FF6B00] font-bold">Pain Points & Solutions</p>
          </div>
          <div className="bg-white rounded-[4rem] shadow-2xl border border-[#FFD8A8]/20 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-[#2D3436] text-white font-black text-xl">
              <div className="p-8 border-r border-white/10">用户痛点</div>
              <div className="p-8">产品解决方案</div>
            </div>
            {[
              { pain: "剩菜不知道能做什么", solution: "输入食材，智能匹配可做菜谱" },
              { pain: "不知道食材怎么搭配", solution: "匹配算法只看主要食材，排除调味料干扰" },
              { pain: "选择困难、想太久", solution: "两层筛选（餐次+菜系）快速缩小范围" },
              { pain: "不确定自己缺什么料", solution: "显示“匹配X/Y食材”和“缺少X种食材”，一目了然" }
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 border-b border-[#FFD8A8]/10 hover:bg-[#FFF9E6]/30 transition-colors">
                <div className="p-8 border-r border-[#FFD8A8]/10 flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                  <span className="font-bold text-[#5A5A40]">{item.pain}</span>
                </div>
                <div className="p-8 flex items-center gap-4">
                  <CheckCircle2 className="text-[#FF6B00] w-6 h-6 flex-shrink-0" />
                  <span className="font-black text-[#2D3436]">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. 用户主路径 */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#2D3436] mb-4">用户主路径</h2>
            <p className="text-[#FF6B00] font-bold">User Main Path</p>
          </div>
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#FFD8A8] -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {[
                { step: "01", title: "输入食材", icon: "⌨️", desc: "输入冰箱有的食材（如番茄、鸡蛋）" },
                { step: "02", title: "智能匹配", icon: "🤖", desc: "匹配主要食材，排除调料干扰" },
                { step: "03", title: "展示结果", icon: "📱", desc: "菜品瀑布流，模糊查询匹配" },
                { step: "04", title: "两层筛选", icon: "🔍", desc: "餐次+菜系精筛，快速决策" },
                { step: "05", title: "查看详情", icon: "📖", desc: "查看步骤做法，收藏备用" },
                { step: "06", title: "开工做饭", icon: "👩‍🍳", desc: "按照指引，享受烹饪乐趣" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[3rem] shadow-lg border border-[#FFD8A8]/20 text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-[#FF6B00] text-white rounded-full flex items-center justify-center font-black mb-6 shadow-lg">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="font-black text-[#2D3436] mb-3">{item.title}</h4>
                  <p className="text-xs text-[#5A5A40] font-bold leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. 核心页面展示 */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#2D3436] mb-4">核心页面展示</h2>
            <p className="text-[#FF6B00] font-bold">Interface Showcase</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "首页匹配", img: "/project/project2-2.png" },
              { title: "菜谱详情", img: "/project/project2-3.png" },
              { title: "我的收藏", img: "/project/project2-5.png" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center"
              >
                {/* Unified Phone Template */}
                <div className="relative w-full max-w-[300px] aspect-[9/19.5] bg-[#1A1A1A] rounded-[3rem] shadow-2xl border-[8px] border-[#2D2D2D] overflow-hidden mb-8">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-black text-xl text-[#2D3436]">{item.title}</h4>
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
              className="px-10 py-4 bg-[#FF6B00] text-white rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform active:scale-95"
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
                    src="/All/project2.png" 
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
        <section className="max-w-7xl mx-auto border-t border-[#FFD8A8]/30 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <button 
              onClick={() => navigate("/project/1")} 
              className="group flex flex-col items-start"
            >
              <span className="text-sm font-bold text-[#5A5A40]/60 mb-2 uppercase tracking-widest">上一个项目</span>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:-translate-x-2 transition-transform border border-black/5">
                  <ArrowLeft className="text-[#B8D8BA]" />
                </div>
                <span className="text-2xl font-black text-[#2D3436]">DADA 搭子 APP</span>
              </div>
            </button>

            <button 
              onClick={() => navigate("/project/3")} 
              className="group flex flex-col items-end text-right"
            >
              <span className="text-sm font-bold text-[#5A5A40]/60 mb-2 uppercase tracking-widest">下一个项目</span>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-black text-[#2D3436]">DayDayUp APP</span>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:translate-x-2 transition-transform border border-black/5">
                  <ChevronRight className="text-[#B8D8BA]" />
                </div>
              </div>
            </button>
          </div>
          
          <div className="text-center pb-20">
            <p className="text-sm font-bold text-[#5A5A40]/40 mb-6 uppercase tracking-widest">感谢阅读</p>
            <div className="flex justify-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-[#FF6B00] flex items-center justify-center text-white text-xl shadow-lg shadow-[#FF6B00]/20">🍊</div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFD8A8] flex items-center justify-center text-white text-xl shadow-lg shadow-[#FFD8A8]/20">🥕</div>
              <div className="w-12 h-12 rounded-2xl bg-[#2D3436] flex items-center justify-center text-white text-xl shadow-lg shadow-[#2D3436]/20">🍳</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CookDetail;
