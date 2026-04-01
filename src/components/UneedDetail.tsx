import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ChevronRight, Zap, Users, Trophy, Layout, 
  Smartphone, MessageSquare, Search, Filter, FileText, 
  UserPlus, Calendar, Upload, Gift, BarChart, Flag,
  Package, MapPin, Clock, ShieldCheck, CreditCard,
  ShoppingBag, HelpCircle, User, Settings, Info,
  CheckCircle2, AlertCircle, MessageCircle, Heart, Star, X
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const UneedDetail = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#F0F7FF] font-sans text-[#1A202C]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => navigate("/", { state: { scrollTo: "projects" } })}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white group-hover:rotate-[-10deg] transition-transform">
              <ArrowLeft className="w-6 h-6" />
            </div>
            <span className="font-black text-blue-600 tracking-tight">返回作品集</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-black">U</div>
            <span className="font-black text-xl tracking-tighter">Uneed</span>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* 1. Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-white">
          {/* Tilted App Screens Background */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] grid grid-cols-4 gap-8 rotate-[-12deg]">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="bg-blue-50 rounded-[3rem] border-8 border-white shadow-2xl aspect-[9/19] flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-6 py-2 bg-blue-50 text-blue-600 rounded-full font-black text-sm mb-8 tracking-widest uppercase"
            >
              Campus Mutual Aid Platform
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-9xl font-black text-blue-600 mb-6 tracking-tighter"
            >
              Uneed
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl font-bold text-gray-400 mb-12 tracking-tight"
            >
              校园互助，一触即达
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-xl shadow-blue-200">
                面向大学生的垂直互助平台
              </div>
              <div className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-2xl font-black">
                轻量化任务发布与接单
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. 项目背景 & 设计思路 */}
        <section className="max-w-7xl mx-auto py-32 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 items-center mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h2 className="text-4xl font-black text-black tracking-tighter">项目背景</h2>
              </div>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                大学校园生活中，学生常常面临快递代取、失物招领、二手交易等高频但碎片化的互助需求。传统的微信群、QQ群信息分散、效率低下且缺乏信任保障。
              </p>
            </div>

            <div className="bg-blue-600 p-10 rounded-[3rem] text-white relative overflow-hidden shadow-xl shadow-blue-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <h3 className="text-2xl font-black mb-4 tracking-tight">设计思路</h3>
              <p className="text-blue-100 font-medium leading-relaxed">
                打造一个聚焦校园场景的垂直互助平台，通过「发布→接单→私聊→评价」的闭环，解决校园信息碎片化、信任缺失的问题。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "快递代取", desc: "快递太多懒得跑、课间取件排队浪费时间" },
              { title: "失物招领", desc: "校园卡、钥匙、耳机易丢，找回率低" },
              { title: "二手交易", desc: "买卖教材、电子产品缺乏可靠垂直渠道" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-blue-50 shadow-sm hover:border-blue-200 transition-colors group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-black mb-3">{item.title}</h4>
                <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. 竞品分析 */}
        <section className="bg-white py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-black mb-4 tracking-tighter">竞品分析</h2>
              <p className="text-blue-600/30 font-bold uppercase tracking-widest text-sm">Competitive Analysis</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-blue-600">
                    <th className="py-6 px-4 text-left font-black text-blue-600 uppercase tracking-widest text-sm">竞品</th>
                    <th className="py-6 px-4 text-left font-black text-blue-600 uppercase tracking-widest text-sm">优点</th>
                    <th className="py-6 px-4 text-left font-black text-blue-600 uppercase tracking-widest text-sm">不足</th>
                    <th className="py-6 px-4 text-left font-black text-blue-600 uppercase tracking-widest text-sm">Uneed 差异化</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-50">
                  {[
                    { 
                      name: "微信群/QQ群", 
                      plus: "流量大、门槛低", 
                      minus: "信息分散、难以追溯、缺乏信用体系",
                      diff: "轻量化：操作简单，仅有发布和接单"
                    },
                    { 
                      name: "闲鱼/转转", 
                      plus: "成熟信用机制、功能全", 
                      minus: "非校园垂直、客单价低、流程重",
                      diff: "校园垂直：仅限校内用户，天然信任"
                    },
                    { 
                      name: "学校后勤平台", 
                      plus: "官方可信、安全性高", 
                      minus: "功能单一、无社交属性、体验差",
                      diff: "场景聚焦：快递代取、失物招领、二手三大核心场景"
                    }
                  ].map((item, i) => (
                    <tr key={i} className="group hover:bg-blue-50/50 transition-colors">
                      <td className="py-8 px-4 font-black text-xl">{item.name}</td>
                      <td className="py-8 px-4 text-gray-500 font-medium">{item.plus}</td>
                      <td className="py-8 px-4 text-gray-400 font-medium">{item.minus}</td>
                      <td className="py-8 px-4 text-blue-600 font-black">{item.diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4. 需求调研 & 用户洞察 */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
              <h2 className="text-4xl font-black text-black tracking-tighter">需求调研 & 用户洞察</h2>
              <div className="bg-blue-600 px-8 py-4 rounded-2xl text-white font-black">
                目标用户：在校大学生
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {[
                { scene: "快递代取", userA: "懒得出宿舍、课间没时间", userB: "顺路赚零花钱", icon: <Package /> },
                { scene: "失物招领", userA: "丢失物品焦急万分", userB: "捡到东西找不到失主", icon: <Search /> },
                { scene: "二手交易", userA: "毕业想卖教材/电子设备", userB: "想买便宜二手", icon: <ShoppingBag /> }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[3rem] border border-blue-50 shadow-sm">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-black mb-6">{item.scene}</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-2xl">
                      <span className="text-xs font-black text-blue-600 uppercase tracking-widest block mb-1">发布者 (User A)</span>
                      <p className="text-gray-600 font-medium">{item.userA}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl">
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">接单者 (User B)</span>
                      <p className="text-gray-600 font-medium">{item.userB}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-12 md:p-20 rounded-[4rem] border border-blue-100 shadow-xl shadow-blue-100/50">
              <h3 className="text-3xl font-black mb-12 text-center tracking-tight">核心洞察</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="text-5xl font-black text-blue-600 mb-4">01</div>
                  <h5 className="text-xl font-black mb-2">碎片化时间</h5>
                  <p className="text-gray-400 font-medium">学生时间碎片化，决策周期极短，需要极简操作。</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-blue-600 mb-4">02</div>
                  <h5 className="text-xl font-black mb-2">熟人社交圈</h5>
                  <p className="text-gray-400 font-medium">校园是“半熟人”环境，信任是交易达成的核心。</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-blue-600 mb-4">03</div>
                  <h5 className="text-xl font-black mb-2">心理舒适区</h5>
                  <p className="text-gray-400 font-medium">以小额交易为主，5-20元是用户最舒适的心理区间。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 核心痛点与解决方案 */}
        <section className="bg-blue-600 py-32 px-6 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black mb-20 text-center tracking-tighter">核心痛点与解决方案</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { pain: "信息分散，找不到需求", solution: "首页信息流，按类聚合，高效分发" },
                { pain: "不敢接单，担心拿钱跑路", solution: "信用等级 + 评价系统，构建信任背书" },
                { pain: "双方时间难协调", solution: "私聊实时沟通 + 时间要求字段明确化" },
                { pain: "物品归属难界定", solution: "线下交接，平台不介入资金，降低风险" }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 p-8 bg-white/10 rounded-[2.5rem] backdrop-blur-md border border-white/10">
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center shrink-0 font-black">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-blue-200 text-sm font-black uppercase tracking-widest mb-2">痛点：{item.pain}</h4>
                    <p className="text-xl font-bold leading-tight">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. 产品功能架构 - 思维导图形式 */}
        <section className="py-32 px-6 bg-[#F0F7FF]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-black mb-4 tracking-tighter">产品功能架构</h2>
              <p className="text-blue-600/30 font-bold uppercase tracking-widest text-sm">Product Architecture</p>
            </div>

            <div className="relative flex justify-center">
              <div className="flex flex-col items-center gap-12 w-full max-w-5xl">
                {/* Central Node */}
                <div className="bg-blue-600 text-white px-12 py-6 rounded-3xl font-black text-3xl shadow-xl z-10">
                  Uneed
                </div>

                {/* Branches */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full relative">
                  {/* Lines (Desktop) */}
                  <div className="hidden lg:block absolute top-[-48px] left-1/2 w-px h-12 bg-blue-200" />
                  <div className="hidden lg:block absolute top-0 left-[12.5%] right-[12.5%] h-px bg-blue-200" />
                  
                  {[
                    { 
                      title: "首页信息流", 
                      items: ["快递代取 Tab", "失物招领 Tab", "二手交易 Tab"] 
                    },
                    { 
                      title: "发布模块", 
                      items: ["快递代取：地点+时间+赏金", "失物招领：丢失/捡到", "二手交易：出售/求购"] 
                    },
                    { 
                      title: "交易流程", 
                      items: ["接单机制", "私聊系统", "确认完成 + 评价"] 
                    },
                    { 
                      title: "个人中心", 
                      items: ["我发布的/我接的单", "我的评价", "设置与帮助"] 
                    }
                  ].map((branch, i) => (
                    <div key={i} className="flex flex-col items-center group">
                      <div className="hidden lg:block w-px h-12 bg-blue-200" />
                      <div className="bg-white p-6 rounded-[2rem] border border-blue-100 shadow-sm w-full text-center group-hover:border-blue-600 transition-colors">
                        <h4 className="font-black text-blue-600 mb-4 text-lg">{branch.title}</h4>
                        <ul className="space-y-2">
                          {branch.items.map((item, j) => (
                            <li key={j} className="text-gray-400 text-sm font-medium">{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. 核心页面展示 */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-black mb-4 tracking-tighter">核心页面展示</h2>
              <p className="text-blue-600/30 font-bold uppercase tracking-widest text-sm">Visual Showcase</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { title: "首页信息流", desc: "三大Tab切换，快速定位需求", highlight: "核心流量分发页", img: "/project/project4-1.png" },
                { title: "顶部搜索框", desc: "可根据关键词搜索帖子", highlight: "核心流量分发页", img: "/project/project4-2.png" },
                { title: "帖子详情页", desc: "清晰的行动召唤按钮，突出赏金/价格信息。", highlight: "决策转化页", img: "/project/project4-4.png" },
                { title: "发布页", desc: "类型选择 → 表单填写 → 发布，分步引导减少负担。", highlight: "需求发起入口", img: "/project/project4-3.png" },
                
                { title: "聊天页", desc: "实时消息方便沟通", highlight: "交易协商主战场", img: "/project/project4-5.png" },
                { title: "个人中心", desc: "信用标签增强信任感，帖子管理一目了然。", highlight: "用户数据中心", img: "/project/project4-6.png" }
              ].map((page, i) => (
                <div key={i} className="group flex flex-col items-center">
                  <div className="relative aspect-[9/19.5] w-full max-w-[300px] bg-[#1A1A1A] rounded-[3rem] shadow-2xl border-[8px] border-[#2D2D2D] overflow-hidden mb-8 group-hover:scale-[1.02] transition-transform duration-500">
                    <img src={page.img} alt={page.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-black mb-2">{page.title}</h4>
                    <div className="text-blue-600 text-xs font-black uppercase tracking-widest mb-4">{page.highlight}</div>
                    <p className="text-gray-500 font-medium leading-relaxed max-w-[260px]">{page.desc}</p>
                  </div>
                </div>
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
                className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform active:scale-95"
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
                      src="/All/project4.png" 
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
          </div>
        </section>

        {/* 8. 用户核心路径 - 文字加箭头形式 */}
        <section className="max-w-7xl mx-auto mb-48 px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-black tracking-tight">用户核心路径 / 业务逻辑</h2>
          </div>

          <div className="space-y-8">
            {[
              { 
                title: "路径一：发布代取需求", 
                path: "登录 → 完善资料 → 点击「+」发布 → 选择「快递代取」 → 填写信息 → 支付赏金 → 等待接单 → 私聊确认 → 线下取件 → 确认完成 → 评价" 
              },
              { 
                title: "路径二：接单赚钱", 
                path: "登录 → 浏览首页信息流 → 选择「快递代取」Tab → 发现合适任务 → 点击「接单」 → 进入聊天 → 线下完成 → 对方确认完成 → 获得赏金 + 评价" 
              },
              { 
                title: "路径三：失物招领", 
                path: "我丢失了：发布 → 等待联系 → 私聊确认 → 线下找回 → 评价\n我捡到了：发布 → 等待联系 → 私聊确认 → 线下归还 → 获得酬谢" 
              },
              { 
                title: "路径四：二手交易", 
                path: "出售：发布商品 → 买家咨询 → 私聊议价 → 线下交易 → 评价\n求购：发布需求 → 卖家联系 → 私聊确认 → 线下交易 → 评价" 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-blue-50 shadow-sm">
                <h4 className="text-xl font-black text-blue-600 mb-6">{item.title}</h4>
                <p className="text-lg text-gray-500 font-bold leading-relaxed whitespace-pre-wrap">
                  {item.path}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Navigation */}
      <section className="max-w-7xl mx-auto border-t border-blue-100 pt-20 px-6">
        <div className="flex justify-start mb-20">
          <button 
            onClick={() => navigate("/project/3")} 
            className="group flex flex-col items-start"
          >
            <span className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">上一个项目</span>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:-translate-x-2 transition-transform border border-black/5">
                <ArrowLeft className="text-blue-600" />
              </div>
              <span className="text-2xl font-black text-[#1A202C]">DayDayUp APP</span>
            </div>
          </button>
        </div>

        <div className="text-center pb-20">
          <p className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest">感谢阅读</p>
          <div className="flex justify-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-600/20">🌟</div>
            <div className="w-12 h-12 rounded-2xl bg-blue-400 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-400/20">💬</div>
            <div className="w-12 h-12 rounded-2xl bg-blue-200 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-200/20">🤝</div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper for Plus icon since it's used
const Plus = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export default UneedDetail;
