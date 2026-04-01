export interface ProjectScreen {
  title: string;
  img: string;
  desc: string;
}

export interface UserResearchMessage {
  avatar: string;
  content: string;
  isRight: boolean;
}

export interface Project {
  id: number;
  title: string;
  slogan: string;
  desc: string;
  img: string;
  painPoints: string[];
  targetAudience: string[];
  screens: ProjectScreen[];
  flowchartDesc: string;
  userResearch: UserResearchMessage[];
  tools?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DADA",
    slogan: "一搭即合，快乐出发",
    desc: "以活动为连接的兴趣搭子平台，让每一次出发都有同行的人",
    img: "/project/project1-0.png",
    painPoints: [
      "社交圈子固定，难以结交志同道合的新朋友",
      "想参加活动却找不到合适的伙伴（搭子）",
      "线上社交碎片化，缺乏有深度的线下互动"
    ],
    targetAudience: [
      "独居青年/空巢青年",
      "兴趣驱动型社交群体",
      "周末活动爱好者"
    ],
    screens: [
      { img: "/project/project1-1.png", title: "首页推荐", desc: "发现身边的热门活动与兴趣搭子。" },
      { img: "/project/project1-2.png", title: "活动详情", desc: "查看活动内容、时间地点及已加入成员。" },
      { img: "/project/project1-3.png", title: "发起组队", desc: "简单几步发布你的活动，寻找志趣相投的伙伴。" },
      { img: "/project/project1-4.png", title: "即时聊天", desc: "加入活动群聊，提前沟通细节，破冰交流。" },
      { img: "/project/project1-5.png", title: "我的搭子", desc: "管理你的社交圈，查看历史活动与评价。" },
      { img: "/project/project1-6.png", title: "个人主页", desc: "展示个人兴趣标签，建立真实的社交名片。" }
    ],
    flowchartDesc: "用户注册 -> 完善兴趣标签 -> 浏览/搜索活动 -> 申请加入/发起活动 -> 审核通过 -> 进入群聊 -> 线下参与 -> 互相评价。",
    userResearch: [
      { avatar: "https://picsum.photos/seed/u1/100/100", content: "周末想去爬山，但朋友们都要加班或者宅家，一个人去又太无聊。", isRight: false },
      { avatar: "https://picsum.photos/seed/u2/100/100", content: "在社交软件上聊了很久，最后都没能见上一面，感觉很浪费时间。", isRight: false },
      { avatar: "https://picsum.photos/seed/u3/100/100", content: "希望能找到真正有共同爱好的人，而不是单纯的刷脸社交。", isRight: false },
      { avatar: "https://picsum.photos/seed/u4/100/100", content: "参加过一些线下活动，但感觉破冰很难，希望能有更好的互动机制。", isRight: false }
    ],
    tools: "制作工具：Figma"
  },
  {
    id: 2,
    title: "有啥吃啥",
    slogan: "有食材，就能做",
    desc: "输入冰箱剩菜，输出今晚菜单 —— 有啥吃啥，有食材就能做",
    img: "/project/project2-1.png",
    painPoints: [
      "剩菜不知道能做什么",
      "想吃的菜缺食材",
      "决策困难"
    ],
    targetAudience: [
      "上班族：工作疲惫，不想在'吃什么'上花费精力",
      "厨房小白：烹饪经验有限，不确定食材如何搭配",
      "剩菜困难户：冰箱食材零散，难以整整合完整菜品"
    ],
    screens: [
      { img: "/project/project2-2.png", title: "首页匹配", desc: "输入食材，智能匹配可做菜谱。" },
      { img: "/project/project2-3.png", title: "菜谱详情", desc: "详细展示烹饪步骤与所需食材。" },
      { img: "/project/project2-5.png", title: "我的收藏", desc: "保存心仪菜谱，随时查看。" }
    ],
    flowchartDesc: "输入食材 -> 智能匹配 -> 推荐菜单 -> 查看详情 -> 收藏菜谱 -> 开始烹饪",
    userResearch: [
      { avatar: "https://picsum.photos/seed/cook1/100/100", content: "冰箱里总有些零散的菜，不知道怎么凑成一顿饭。", isRight: false },
      { avatar: "https://picsum.photos/seed/cook2/100/100", content: "想做饭但不想动脑筋想菜单，最好有人直接告诉我怎么做。", isRight: false },
      { avatar: "https://picsum.photos/seed/cook3/100/100", content: "有些食材买回来只用了一点，剩下的不知道怎么处理就坏了。", isRight: false }
    ],
    tools: "VibeCoding工作流：Figma Make（产品原型）→Claude Code（前端开发）→GitHub（版本管理）→Vercel（部署）"
  },
  {
    id: 3,
    title: "DayDayUp",
    slogan: "高效计划，结伴坚持",
    desc: "年轻人的全场景效率工具 + 社交化打卡激励 APP，打破工具碎片化，让坚持不再孤单。",
    img: "/project/project3-0.png",
    painPoints: [
      "工具碎片化，管理成本高：需在多个应用间切换，体验割裂",
      "缺乏动力与同伴陪伴，难以长期坚持：一个人坚持容易懈怠"
    ],
    targetAudience: [
      "考公考研、四六级、复习备战期末考的学生群体",
      "想寻找学习搭子或有共同目标的用户"
    ],
    screens: [
      { img: "/project/project3-1.png", title: "打卡首页", desc: "四象限任务管理，明确每日优先级。" },
      { img: "/project/project3-2.png", title: "番茄专注", desc: "极简专注界面，支持锁屏模式提高效率。" },
      { img: "/project/project3-3.png", title: "计划生成", desc: "AI 辅助生成专属学习计划，科学安排时间。" },
      { img: "/project/project3-4.png", title: "官方挑战赛", desc: "激励里程碑、进度与排行榜。" }
    ],
    flowchartDesc: "用户进入 -> 点击学习小组 -> 选择小组类型 -> 查看详情 -> 加入小组 -> 每日打卡 -> 上传证明 -> 获得奖励 -> 排行榜更新 -> 达成里程碑 -> 赢取大奖。",
    userResearch: [
      { avatar: "https://picsum.photos/seed/day1/100/100", content: "小红书上找搭子的帖子好多，说明大家真的很需要陪伴。", isRight: false },
      { avatar: "https://picsum.photos/seed/day2/100/100", content: "手机里装了四五个效率 APP，切来切去真的很烦，数据还不通。", isRight: false },
      { avatar: "https://picsum.photos/seed/day3/100/100", content: "一个人考研太痛苦了，如果有群人一起打卡竞争，我肯定能坚持下去。", isRight: false }
    ],
    tools: "工作流：问卷星、Axure"
  },
  {
    id: 4,
    title: "Uneed",
    slogan: "校园互助，一触即达",
    desc: "面向大学生的校园垂直互助平台，通过轻量化的任务发布与接单机制，连接校园内的互助需求。",
    img: "/project/project4-0.png",
    painPoints: [
      "快递太多懒得跑、课间取件排队浪费时间",
      "校园卡、钥匙、耳机等物品容易丢失，找回率低",
      "想买卖二手教材、电子产品但缺乏可靠渠道"
    ],
    targetAudience: [
      "大学生（18-25岁）",
      "懒得出宿舍、课间没时间取快递的学生",
      "丢失物品或捡到东西寻找失主的同学",
      "有二手教材或电子设备买卖需求的学生"
    ],
    screens: [
      { img: "/project/project4-1.png", title: "登录页", desc: "手机号+验证码一键登录，渐进式引导补充学校信息。" },
      { img: "/project/project4-2.png", title: "首页信息流", desc: "三大Tab切换，小红书式卡片布局，高效分发校园互助信息。" },
      { img: "/project/project4-3.png", title: "发布页", desc: "类型选择 → 表单填写 → 发布，分步引导减少负担。" },
      { img: "/project/project4-4.png", title: "帖子详情", desc: "突出赏金与关键信息，提供便捷的接单与私聊入口。" },
      { img: "/project/project4-5.png", title: "消息列表", desc: "聚合所有交易沟通，实时掌握任务进度。" },
      { img: "/project/project4-6.png", title: "个人中心", desc: "信用评分可视化，增强信任感，订单管理一目了然。" }
    ],
    flowchartDesc: "发布者：登录 -> 发布需求 -> 填写信息 -> 支付赏金 -> 等待接单 -> 私聊确认 -> 线下交接 -> 确认完成 -> 评价。\n接单者：登录 -> 浏览信息流 -> 发现任务 -> 点击接单 -> 私聊沟通 -> 线下完成 -> 获得赏金 -> 评价。",
    userResearch: [
      { avatar: "https://picsum.photos/seed/uneed1/100/100", content: "快递站太远了，每次去都要排好久的队，要是有人顺路帮我带回来就好了。", isRight: false },
      { avatar: "https://picsum.photos/seed/uneed2/100/100", content: "在食堂捡到钥匙不知道给谁，发朋友圈也没人看，希望能有个专门的地方挂一下。", isRight: false },
      { avatar: "https://picsum.photos/seed/uneed3/100/100", content: "毕业了好多书带不走，卖给收废品的太可惜，想便宜转给学弟学妹。", isRight: false }
    ],
    tools: "VibeCoding工作流：V0.dev→Claude Code→GitHub→Netlify"
  }
];
