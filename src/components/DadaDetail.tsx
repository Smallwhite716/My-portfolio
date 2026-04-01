import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Target, Smartphone, Workflow, MessageSquare, Search, Lightbulb, Users, Layout, Activity, Heart, Star, Smile, ArrowRight, RefreshCw, Cpu, Zap, Globe, UserCircle, IdCard, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function DadaDetail() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-[#FCFDF7] min-h-screen selection:bg-[#B8D8BA] selection:text-[#2D3436] pb-24 font-sans">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate("/", { state: { scrollTo: "projects" } })}
        className="fixed top-8 left-8 z-[1100] flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#D4E9D7] hover:bg-[#D4E9D7] transition-all group"
      >
        <ArrowLeft className="w-4 h-4 text-[#5A5A40] group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-bold text-[#5A5A40] tracking-wider">返回作品集</span>
      </motion.button>

      {/* Hero Section - Matching the Splash Screen Style */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#E3F2FD]">
        {/* Background Illustrative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-white rounded-full blur-[80px] opacity-60" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#D4E9D7] rounded-full blur-[100px] opacity-40" />
          
          {/* Floating Clouds/Shapes */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[15%] w-32 h-16 bg-white rounded-full opacity-80 shadow-inner" 
          />
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[40%] left-[10%] w-24 h-12 bg-white rounded-full opacity-60 shadow-inner" 
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter text-[#1A1A1A] mb-2 drop-shadow-sm">
              DADA
            </h1>
            <div className="h-1.5 w-24 bg-[#B8D8BA] mx-auto mb-8 rounded-full" />
            <p className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 tracking-wide">
              一搭即合，快乐出发
            </p>
            <div className="flex justify-center gap-4 mt-12">
              <div className="w-16 h-16 bg-white rounded-3xl shadow-lg flex items-center justify-center rotate-[-10deg]">
                <Smile className="w-8 h-8 text-[#FFD700]" />
              </div>
              <div className="w-16 h-16 bg-white rounded-3xl shadow-lg flex items-center justify-center rotate-[5deg]">
                <Heart className="w-8 h-8 text-[#FF8A80]" />
              </div>
              <div className="w-16 h-16 bg-white rounded-3xl shadow-lg flex items-center justify-center rotate-[-5deg]">
                <Star className="w-8 h-8 text-[#B8D8BA]" />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Wave/Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#FCFDF7]" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* 1. 项目背景或设计思路 */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-20 rounded-[4rem] shadow-[0_20px_60px_rgba(184,216,186,0.15)] border border-[#D4E9D7]/30"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-[#FFF4D1] rounded-2xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-[#D4A017]" />
              </div>
              <h2 className="text-3xl font-black text-[#2D3436]">项目背景 / 设计思路</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[#B8D8BA] rounded-full" />
                  <h3 className="text-xl font-bold text-[#2D3436] mb-4">为什么要做 DADA？</h3>
                  <p className="text-[#2D3436]/70 leading-relaxed text-lg">
                    在快节奏的都市生活中，“孤独感”成为当代年轻人的共同痛点。虽然线上社交软件层出不穷，但往往停留在网上的信息交换，线下活动却难找搭子同行。
                  </p>
                </div>
                <p className="text-[#2D3436]/70 leading-relaxed text-lg">
                  DADA 的初衷是让每一次出行都有志同道合的人。我们以“活动”为核心连接点，通过共同的兴趣爱好作为社交的媒介，让社交回归真实、回归生活。
                </p>
              </div>
              <div className="bg-[#FCFDF7] p-8 rounded-[3rem] border border-[#D4E9D7]/50 space-y-6">
                <h3 className="text-xl font-bold text-[#2D3436]">设计理念</h3>
                {[
                  { id: "01", text: "轻量化社交：不以“相亲”为目的，以“玩乐”为初衷，降低社交压力。", color: "#D1E8FF" },
                  { id: "02", text: "真实性保障：通过实名认证与活动后评价体系，建立信任闭环。", color: "#D4E9D7" },
                  { id: "03", text: "高效匹配：基于 LBS 地理位置与兴趣标签，快速找到身边的“搭子”。", color: "#FFF4D1" }
                ].map((item) => (
                  <div key={item.id} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 font-bold text-[#5A5A40]" style={{ backgroundColor: item.color }}>
                      {item.id}
                    </div>
                    <p className="text-[#2D3436]/80 text-sm leading-relaxed group-hover:text-[#2D3436] transition-colors">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. 竞品分析 - Playful Grid */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#2D3436] mb-4">竞品分析</h2>
            <div className="w-16 h-1 bg-[#FFF4D1] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Soul", type: "灵魂社交", pros: "匹配度高，匿名性强", cons: "社交目的往往都是以恋爱为目的", color: "#E3F2FD" },
              { name: "小红书", type: "内容社交", pros: "活动信息丰富，视觉吸引力强", cons: "内容丰富不垂直", color: "#FFEBEE" },
              { name: "WeChat", type: "熟人社交", pros: "信任基础牢固，沟通方便", cons: "圈子固定，难以结识陌生新搭子", color: "#E8F5E9" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="p-8 rounded-[3rem] border border-black/5 shadow-sm hover:shadow-md transition-all"
                style={{ backgroundColor: item.color }}
              >
                <h3 className="text-2xl font-black text-[#2D3436] mb-1">{item.name}</h3>
                <p className="text-xs font-bold text-[#5A5A40]/60 mb-6 tracking-widest uppercase">{item.type}</p>
                <div className="space-y-6">
                  <div className="bg-white/50 p-4 rounded-2xl">
                    <span className="text-[10px] font-black text-green-700 uppercase tracking-tighter">Advantages</span>
                    <p className="mt-1 text-sm text-[#2D3436]/80 font-medium">{item.pros}</p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-2xl">
                    <span className="text-[10px] font-black text-red-700 uppercase tracking-tighter">Disadvantages</span>
                    <p className="mt-1 text-sm text-[#2D3436]/80 font-medium">{item.cons}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. 需求调研 - Chat Bubble Style */}
        <section className="mb-32">
          <div className="bg-[#D4E9D7] p-12 md:p-20 rounded-[4rem] relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <MessageSquare className="w-6 h-6 text-[#B8D8BA]" />
                  </div>
                  <h2 className="text-3xl font-black text-[#2D3436]">需求调研</h2>
                </div>
                <div className="space-y-4">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="bg-white p-6 rounded-[2rem] rounded-bl-none shadow-sm border border-white/20"
                  >
                    <p className="text-[#2D3436]/80 italic font-medium">“我很想去徒步，但是一个人出发有点无聊，想找同行的搭子”</p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#FFF4D1] rounded-full" />
                      <span className="text-xs font-bold text-[#5A5A40]">20岁 · 大学生</span>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="bg-white p-6 rounded-[2rem] rounded-bl-none shadow-sm border border-white/20 ml-8"
                  >
                    <p className="text-[#2D3436]/80 italic font-medium">“虽然能在线上谈天说地，但是线下想出门探店却没人一起”</p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#D1E8FF] rounded-full" />
                      <span className="text-xs font-bold text-[#5A5A40]">23岁 · 电商运营</span>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="bg-white/40 backdrop-blur-md p-10 rounded-[3rem] border border-white/30">
                <h3 className="text-2xl font-black text-[#2D3436] mb-6">调研结论</h3>
                <ul className="space-y-6">
                  {[
                    "85% 的受访者表示有线下社交需求，但缺乏安全可靠的渠道。",
                    "“共同兴趣”是开启一段社交关系最有效的催化剂。",
                    "用户最担心的问题是：对方身份不实、活动货不对板。"
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <div className="w-2 h-2 bg-[#B8D8BA] rounded-full" />
                      </div>
                      <p className="text-[#2D3436] font-medium leading-relaxed">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] left-[-5%] w-48 h-48 bg-[#FFF4D1]/30 rounded-full blur-2xl" />
          </div>
        </section>

        {/* 4. 目标用户画像 - Card Style */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#2D3436] mb-4">目标用户画像</h2>
            <p className="text-[#5A5A40]/40 font-bold uppercase tracking-widest text-xs">Target User Personas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { 
                name: "在校大学生", 
                role: "画像 1", 
                bio: "课余时间充裕，社交圈子相对固定，渴望认识新朋友。", 
                need: "找学习搭子互相监督、找运动搭子一起打球跑步、找兴趣搭子拓展校园外的社交圈。", 
                color: "#D4E9D7" 
              },
              { 
                name: "职场上班族", 
                role: "画像 2", 
                bio: "工作忙碌，周末和假期是主要社交时间，同事圈局限。", 
                need: "找健身/运动搭子坚持锻炼、找周末活动搭子看展探店徒步、找假期旅行搭子拼房拼车。", 
                color: "#FFF4D1" 
              },
              { 
                name: "自由职业者", 
                role: "画像 3", 
                bio: "时间灵活但社交机会少，缺乏同事互动，容易感到孤独。", 
                need: "找工作搭子一起办公聊天、找兴趣搭子随时约活动、找长期陪伴的搭子。", 
                color: "#D1E8FF" 
              },
              { 
                name: "数字游民", 
                role: "画像 4", 
                bio: "移动办公，常换城市，需要快速融入新环境。", 
                need: "每到一个新城市找本地搭子探索体验、找同频的数字游民交流分享、找短期旅行搭子。", 
                color: "#E1BEE7" 
              },
              { 
                name: "新手父母", 
                role: "画像 5", 
                bio: "生活重心在孩子，社交圈大幅缩小。", 
                need: "找亲子搭子一起带娃玩、找同龄家长交流育儿经验、找家庭搭子参加亲子活动。", 
                color: "#FFEBEE" 
              }
            ].map((user, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-md border border-black/5 group flex flex-col"
              >
                <div className="h-16 relative overflow-hidden shrink-0" style={{ backgroundColor: user.color }}>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-6">
                    <span className="text-[9px] font-black text-[#5A5A40]/60 uppercase tracking-widest">{user.role}</span>
                  </div>
                </div>
                <div className="px-5 pb-8 pt-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-black text-[#2D3436] mb-4">{user.name}</h3>
                  <div className="space-y-4 flex-grow">
                    <div className="bg-[#FCFDF7] p-3 rounded-xl border border-black/5">
                      <span className="text-[8px] font-black text-[#5A5A40]/40 uppercase mb-1 block tracking-tighter">生活状态</span>
                      <p className="text-[11px] text-[#2D3436]/80 font-medium leading-relaxed line-clamp-3">{user.bio}</p>
                    </div>
                    <div className="bg-[#FCFDF7] p-3 rounded-xl border border-black/5">
                      <span className="text-[8px] font-black text-[#5A5A40]/40 uppercase mb-1 block tracking-tighter">核心需求</span>
                      <p className="text-[11px] text-[#2D3436]/80 font-medium leading-relaxed line-clamp-4">{user.need}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. 核心痛点与解决方案 */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#2D3436]">核心痛点与解决方案</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              { pain: "社交破冰难，不知道聊什么", solution: "以活动为载体，通过共同任务或兴趣自然产生互动，消除尴尬。", icon: Smile, color: "#FFF4D1" },
              { pain: "信任感缺失，担心安全问题", solution: "引入实名认证及活动双向评价体系，建立信用背书。", icon: Target, color: "#D4E9D7" },
              { pain: "活动组织难，搭子不满意", solution: "提供标准化的活动发布模板，以及个性标签匹配机制。", icon: Workflow, color: "#D1E8FF" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-stretch gap-4"
              >
                <div className="flex-[0.4] bg-white p-8 rounded-[3rem] border border-black/5 shadow-sm flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner" style={{ backgroundColor: item.color }}>
                      <item.icon className="w-6 h-6 text-[#5A5A40]" />
                    </div>
                    <span className="text-xs font-black text-[#5A5A40]/40 uppercase tracking-widest">痛点 {i + 1}</span>
                  </div>
                  <h3 className="text-xl font-black text-[#2D3436]">{item.pain}</h3>
                </div>
                <div className="flex-[0.6] bg-[#D4E9D7] p-8 rounded-[3rem] flex flex-col justify-center relative overflow-hidden group">
                  <div className="relative z-10">
                    <span className="text-[10px] font-black text-[#5A5A40]/40 uppercase mb-2 block">解决方案</span>
                    <p className="text-lg font-bold text-[#2D3436] leading-relaxed">{item.solution}</p>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. 产品功能架构 - Radial Mind Map Style */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#2D3436] mb-4">产品功能架构</h2>
            <p className="text-[#5A5A40]/40 font-bold uppercase tracking-widest text-xs">Product Feature Architecture</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-12 rounded-[4rem] shadow-2xl border border-[#D4E9D7]/30 overflow-hidden"
          >
            <div className="relative w-full max-w-6xl mx-auto py-12 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-12 lg:gap-0">
              
              {/* SVG Lines - Responsive with viewBox */}
              <div className="absolute inset-0 pointer-events-none hidden lg:block">
                <svg viewBox="0 0 1000 600" className="w-full h-full">
                  {/* Left lines */}
                  <motion.path 
                    d="M 500 300 C 400 300, 400 180, 300 180" 
                    fill="none" stroke="#D4E9D7" strokeWidth="3" strokeLinecap="round" 
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.path 
                    d="M 500 300 C 400 300, 400 420, 300 420" 
                    fill="none" stroke="#D1E8FF" strokeWidth="3" strokeLinecap="round" 
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.7 }}
                  />
                  
                  {/* Right lines */}
                  <motion.path 
                    d="M 500 300 C 600 300, 600 120, 700 120" 
                    fill="none" stroke="#FFF4D1" strokeWidth="3" strokeLinecap="round" 
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.9 }}
                  />
                  <motion.path 
                    d="M 500 300 C 600 300, 600 300, 700 300" 
                    fill="none" stroke="#E1BEE7" strokeWidth="3" strokeLinecap="round" 
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 1.1 }}
                  />
                  <motion.path 
                    d="M 500 300 C 600 300, 600 480, 700 480" 
                    fill="none" stroke="#FFEBEE" strokeWidth="3" strokeLinecap="round" 
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 1.3 }}
                  />
                </svg>
              </div>

              {/* Left Side Branches */}
              <div className="flex flex-col gap-12 md:gap-24 lg:items-end lg:pr-16 relative z-10 order-2 lg:order-1">
                {[
                  {
                    title: "首页 (活动驱动)",
                    color: "#D4E9D7",
                    sub: ["五大分类入口", "附近热门搭子帖", "帖子卡片详情", "搜索功能", "详情 → 聊天"]
                  },
                  {
                    title: "发布 (内容生产)",
                    color: "#D1E8FF",
                    sub: ["标题/正文/图片", "活动类型选择", "时间/地点设置", "期望搭子标签", "发布匹配推送"]
                  }
                ].map((branch, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex flex-col lg:items-end max-w-full lg:max-w-[240px]"
                  >
                    <div className="py-3 px-6 rounded-2xl font-black text-[#2D3436] mb-4 shadow-md border border-black/5 inline-block" style={{ backgroundColor: branch.color }}>
                      {branch.title}
                    </div>
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {branch.sub.map((item, j) => (
                        <div key={j} className="text-[10px] font-bold text-[#5A5A40]/70 bg-[#FCFDF7] px-3 py-1.5 rounded-lg border border-black/5">
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Center Root */}
              <div className="flex justify-center relative z-20 order-1 lg:order-2">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 0 0px rgba(184, 216, 186, 0.4)",
                      "0 0 0 20px rgba(184, 216, 186, 0)",
                      "0 0 0 0px rgba(184, 216, 186, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-32 h-32 md:w-40 md:h-40 bg-[#B8D8BA] text-white rounded-full flex items-center justify-center font-black text-2xl md:text-3xl shadow-2xl border-4 md:border-8 border-white"
                >
                  DADA
                </motion.div>
              </div>

              {/* Right Side Branches */}
              <div className="flex flex-col gap-12 md:gap-16 lg:items-start lg:pl-16 relative z-10 order-3">
                {[
                  {
                    title: "搭子星球 (人格驱动)",
                    color: "#FFF4D1",
                    sub: ["人物卡片流", "标签/性别筛选", "ID搜索功能", "三大特色入口", "卡片 → 个人主页"]
                  },
                  {
                    title: "消息 (互动中心)",
                    color: "#E1BEE7",
                    sub: ["即时通讯列表", "活动卡片置顶", "互动通知中心", "系统消息提醒"]
                  },
                  {
                    title: "我的 (个人空间)",
                    color: "#FFEBEE",
                    sub: ["个人社交卡片", "MBTI/兴趣标签", "实名认证/设置", "隐私/屏蔽管理"]
                  }
                ].map((branch, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i + 2) * 0.2 }}
                    className="flex flex-col lg:items-start max-w-full lg:max-w-[240px]"
                  >
                    <div className="py-3 px-6 rounded-2xl font-black text-[#2D3436] mb-4 shadow-md border border-black/5 inline-block" style={{ backgroundColor: branch.color }}>
                      {branch.title}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {branch.sub.map((item, j) => (
                        <div key={j} className="text-[10px] font-bold text-[#5A5A40]/70 bg-[#FCFDF7] px-3 py-1.5 rounded-lg border border-black/5">
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        </section>

        {/* 7. 核心页面展示 - Using the provided screenshots style */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#2D3436] mb-4">核心页面展示</h2>
            <p className="text-[#5A5A40]/40 font-bold uppercase tracking-widest text-xs">Interface Showcase</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "首页", desc: "多维度分类与附近活动推荐，快速发现兴趣点", img: "/project/project1-1.png" },
              { title: "搭子星球", desc: "卡片式社交体验，直观展示搭子兴趣与状态", img: "/project/project1-2.png" },
              { title: "消息页", desc: "感兴趣可先私聊沟通，提前破冰", img: "/project/project1-3.png" }
            ].map((screen, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="relative aspect-[9/19.5] w-full max-w-[300px] bg-[#1A1A1A] rounded-[3rem] shadow-2xl border-[8px] border-[#2D2D2D] overflow-hidden mb-8">
                  <img src={screen.img} alt={screen.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-2xl font-black text-[#2D3436] mb-2">{screen.title}</h4>
                <p className="text-sm text-[#5A5A40]/60 text-center max-w-[240px] font-medium leading-relaxed">{screen.desc}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Second row of screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
            {[
              { title: "个人主页", desc: "展示自己的兴趣社交名片以及帖子", img: "/project/project1-4.png" },
              { title: "发布帖子", desc: "标准化模板，降低组织门槛", img: "/project/project1-5.png" },
              { title: "帖子详情", desc: "明确活动的目的、时间以及地点", img: "/project/project1-6.png" }
            ].map((screen, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 3) * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="relative aspect-[9/19.5] w-full max-w-[300px] bg-[#1A1A1A] rounded-[3rem] shadow-2xl border-[8px] border-[#2D2D2D] overflow-hidden mb-8">
                  <img src={screen.img} alt={screen.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-2xl font-black text-[#2D3436] mb-2">{screen.title}</h4>
                <p className="text-sm text-[#5A5A40]/60 text-center max-w-[240px] font-medium leading-relaxed">{screen.desc}</p>
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
              className="px-10 py-4 bg-[#1A1A1A] text-white rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform active:scale-95"
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
                    src="/All/project1.png" 
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

        {/* 8. 用户核心路径/业务逻辑 - Step Style */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#2D3436] mb-4">用户核心路径 / 业务逻辑</h2>
            <p className="text-[#5A5A40]/40 font-bold uppercase tracking-widest text-xs">User Core Path & Business Logic</p>
          </div>
          
          <div className="space-y-12">
            {/* Path 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-black/5"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#D4E9D7] rounded-xl flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#5A5A40]" />
                </div>
                <h3 className="text-xl font-black text-[#2D3436]">路径一：找搭子（活动驱动）</h3>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {[
                  { label: "首页浏览", icon: Layout },
                  { label: "筛选活动类型", icon: Search },
                  { label: "点击感兴趣帖子", icon: Target },
                  { label: "查看详情", icon: Smartphone },
                  { label: "点击“搭一下”", icon: Zap },
                  { label: "进入聊天页", icon: MessageSquare },
                  { label: "沟通确认", icon: MessageCircle },
                  { label: "组队成功", icon: Users }
                ].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-[#FCFDF7] rounded-2xl flex items-center justify-center border border-black/5 shadow-sm">
                        <step.icon className="w-5 h-5 text-[#5A5A40]" />
                      </div>
                      <span className="text-[11px] font-bold text-[#2D3436]">{step.label}</span>
                    </div>
                    {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-[#B8D8BA]" />}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Path 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-black/5"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#FFF4D1] rounded-xl flex items-center justify-center">
                  <Smile className="w-5 h-5 text-[#5A5A40]" />
                </div>
                <h3 className="text-xl font-black text-[#2D3436]">路径二：找人（人格驱动）</h3>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {[
                  { label: "进入星球", icon: Globe },
                  { label: "浏览人物卡片", icon: UserCircle },
                  { label: "筛选标签/性别", icon: Search },
                  { label: "点击感兴趣用户", icon: Target },
                  { label: "查看个人主页", icon: IdCard },
                  { label: "进入聊天页", icon: MessageSquare },
                  { label: "沟通", icon: MessageCircle },
                  { label: "组队", icon: Users }
                ].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-[#FCFDF7] rounded-2xl flex items-center justify-center border border-black/5 shadow-sm">
                        <step.icon className="w-5 h-5 text-[#5A5A40]" />
                      </div>
                      <span className="text-[11px] font-bold text-[#2D3436]">{step.label}</span>
                    </div>
                    {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-[#B8D8BA]" />}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Business Loop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#D4E9D7] p-12 rounded-[4rem] shadow-xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-10">
                  <RefreshCw className="w-6 h-6 text-[#5A5A40]" />
                  <h3 className="text-2xl font-black text-[#2D3436]">业务闭环</h3>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-6">
                  {[
                    { label: "用户画像 (标签)", icon: Target },
                    { label: "内容消费/生产", icon: Layout },
                    { label: "匹配推荐 (算法)", icon: Cpu },
                    { label: "沟通组队 (聊天)", icon: MessageSquare },
                    { label: "社交沉淀 (打卡)", icon: Heart },
                    { label: "优化推荐", icon: RefreshCw }
                  ].map((item, i, arr) => (
                    <div key={i} className="flex items-center gap-6">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 bg-white rounded-[2rem] flex items-center justify-center shadow-lg border-4 border-[#B8D8BA]">
                          <item.icon className="w-7 h-7 text-[#5A5A40]" />
                        </div>
                        <span className="text-sm font-black text-[#2D3436]">{item.label}</span>
                      </div>
                      {i < arr.length - 1 && <ArrowRight className="w-6 h-6 text-white/60" />}
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </motion.div>
          </div>
        </section>

      </div>

      {/* Footer Navigation */}
      <section className="max-w-7xl mx-auto border-t border-[#D4E9D7]/30 pt-20 px-6">
        <div className="flex justify-end">
          <button 
            onClick={() => navigate("/project/2")} 
            className="group flex flex-col items-end"
          >
            <span className="text-sm font-bold text-[#5A5A40]/60 mb-2 uppercase tracking-widest">下一个项目</span>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-black text-[#2D3436]">有啥吃啥 APP</span>
              <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:translate-x-2 transition-transform border border-black/5">
                <ArrowRight className="text-[#FF6B00]" />
              </div>
            </div>
          </button>
        </div>

        <div className="text-center mt-20 pb-20">
          <p className="text-sm font-bold text-[#5A5A40]/40 mb-6 uppercase tracking-widest">感谢阅读</p>
          <div className="flex justify-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-[#B8D8BA] flex items-center justify-center text-white text-xl shadow-lg shadow-[#B8D8BA]/20">🌟</div>
            <div className="w-12 h-12 rounded-2xl bg-[#D1E8FF] flex items-center justify-center text-white text-xl shadow-lg shadow-[#D1E8FF]/20">💬</div>
            <div className="w-12 h-12 rounded-2xl bg-[#FFF4D1] flex items-center justify-center text-white text-xl shadow-lg shadow-[#FFF4D1]/20">🤝</div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckCircle2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
