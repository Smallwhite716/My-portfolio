import { motion } from "motion/react";

const experiences = [
  {
    time: "2022.10 - 2024.10",
    title: "校社团团工委-文娱兴趣中心部长",
    desc: "负责全校20+文娱社团活动审批的协调与执行工作；协助社团嘉年华、百团大战、草坪音乐节等校级大型活动的场地协调、物资调配及现场管理；协调多部门人员配合，保障活动顺利落地。",
    tags: ["跨部门协作", "项目管理", "活动执行"],
    images: ["/experience/wenyu.jpg"],
  },
  {
    time: "2022.10 - 2025.10",
    title: "校英语协会-文艺部理事",
    desc: "负责口语角表演环节的策划与主持，多次代表文艺部进行英文歌曲表演；参与社团嘉年华《后妈茶话会》大型舞台演出。",
    tags: ["活动主持", "文艺表演"],
    images: ["/experience/yx.png"],
  },
  {
    time: "2022.10 - 2024.10",
    title: "校实践协会-宣传网络部部长",
    desc: "负责协会活动的摄影、视频剪辑工作，产出活动照片、宣传视频等素材；设计活动及招新海报，用于社团宣传与招新推广。",
    tags: ["摄影摄像", "视频制作", "社团宣传"],
    images: ["/experience/shijian.png"],
  },
  {
    time: "2023.10 - 2024.06",
    title: "校融媒体中心-麟鸿工作室助理",
    desc: "负责校园官方公众号推文的编写和排版，单篇最高阅读量2.1w；通过后台数据分析用户阅读偏好，总结高阅读内容特点，提出选题优化建议。",
    tags: ["公众号编辑", "图文排版", "内容编辑"],
    images: ["/experience/gzh1.png", "/experience/gzh2.png", "/experience/gzh3.png"],
  },
  {
    time: "2024.05",
    title: "全国大学生电子商务“创新、创意及创业”挑战赛",
    desc: "参与项目“云苗彩衣”跨境电商平台的构建，负责市场调研模块，完成项目背景调研及苗绣产品的市场现状分析，联合团队发布期刊论文《浅析“非遗”融合跨境电商新媒体发展路径——以融水苗绣为例》",
    tags: ["市场调研", "论文发表"],
    images: ["/experience/sanchuang.png", "/experience/sanchuang2.png"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#F5F2ED] px-4">
      <div className="max-w-6xl mx-auto py-32 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-serif mb-32 text-center italic font-light text-[#1A1A1A]"
        >
          校园经历 / Experience
        </motion.h2>
        
        <div className="relative">
          {/* 中心主干线 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#5A5A40]/20 -translate-x-1/2 hidden lg:block" />
          
          <div className="space-y-16 lg:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* 中心连接点 */}
                  <div className="absolute left-1/2 top-12 w-4 h-4 rounded-full bg-[#F5F2ED] border-4 border-[#5A5A40] -translate-x-1/2 z-10 hidden lg:block" />
                  
                  <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* 文字内容区 */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                      className={`w-full lg:w-1/2 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}
                    >
                      <span className="text-sm font-mono text-[#5A5A40] mb-3 block opacity-60">{exp.time}</span>
                      <h3 className="text-3xl font-serif mb-4 text-[#1A1A1A]">{exp.title}</h3>
                      <p className={`text-[#1A1A1A]/70 mb-6 leading-relaxed max-w-xl ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                        {exp.desc}
                      </p>
                      
                      <div className={`flex flex-wrap gap-2 mb-6 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        {exp.tags?.map((tag) => (
                          <span key={tag} className="px-4 py-1.5 bg-white border border-[#5A5A40]/10 rounded-full text-xs font-medium text-[#5A5A40] shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* 图片展示区 */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                      className="w-full lg:w-1/2"
                    >
                      <div className="relative group">
                        <div className="absolute -inset-2 bg-[#5A5A40]/5 rounded-3xl blur-xl group-hover:bg-[#5A5A40]/10 transition-all duration-500" />
                        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video flex">
                          {exp.images?.map((img, i) => (
                            <img 
                              key={i}
                              src={img} 
                              alt={exp.title}
                              className="h-full object-cover transition-transform duration-700 group-hover:scale-110 flex-1"
                              referrerPolicy="no-referrer"
                            />
                          ))}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
