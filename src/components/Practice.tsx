import { motion } from "motion/react";

interface PracticeItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
}

const practices: PracticeItem[] = [
  {
    id: "01",
    title: "摆摊“创业”实践",
    subtitle: "小成本验证商业模式",
    description: "2023-2024连续两年春节期间低成本摆摊，独立完成选品调研、摊位选址、动态定价，次年复盘优化选品结构与销售策略，引入互动式叫卖吸引客流。首年7日营业额1500元，净利润900元；次年7日营业额突破3000元，净利润2000元",
    images: ["/practices/bt.png"]
  },
  {
    id: "02",
    title: "小红书自媒体",
    subtitle: "穷游攻略内容运营",
    description: "0预算冷启动账号，确定以“穷游”“速通”为内容关键词，并针对封面图、标题文案进行A/B测试优化实现自然流量增长，4篇笔记累计曝光3w+，点赞收藏2600+",
    images: ["/practices/xhs4.jpg"]
  },
  {
    id: "03",
    title: "独立摄影约拍",
    subtitle: "从0到1副业变现",
    description: "利用小红书、抖音双平台公域引流，从0起步将摄影爱好发展为副业，累计变现5000+元；独立负责客户需求沟通、拍摄方案策划、现场执行、后期修图全流程，形成闭环服务能力，客户满意度100%",
    images: ["/practices/sh1.png"]
  },
  {
    id: "04",
    title: "探索世界",
    subtitle: "独立规划自由行",
    description: "利用兼职与奖学金独立规划并完成10+城市自由行。全程自主负责行程、交通、住宿及预算控制，锻炼了问题解决与快速决策能力。",
    images: ["/practices/travel.png"]
  }
];

export default function Practice() {
  return (
    <section id="practice" className="bg-[#F5F2ED] py-32 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6">
        {/* Header - Centered to match Experience.tsx */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-serif mb-32 text-center italic font-light text-[#1A1A1A]"
        >
          校外实践 / Practice
        </motion.h2>

        {/* Grid Layout - 2x2 Larger Horizontal Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {practices.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col sm:flex-row h-auto sm:h-[450px]"
            >
              {/* Image Section - Larger Width */}
              <div className="relative w-full sm:w-[48%] flex-shrink-0 overflow-hidden border-r border-black/5">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content Section */}
              <div className="p-10 flex-1 flex flex-col justify-center min-w-0">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-[#1A1A1A] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-base font-serif italic text-[#5A5A40] opacity-60">
                    {item.subtitle}
                  </p>
                </div>
                <p className="text-[#1A1A1A]/70 text-base leading-relaxed line-clamp-8">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Footer */}
        <div className="mt-24 text-center">
          <p className="text-[10px] font-sans italic text-[#5A5A40]/30 tracking-[0.2em] uppercase">
            Focus on results • Driven by practice
          </p>
        </div>
      </div>
    </section>
  );
}
