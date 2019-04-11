Page({
  data: {
    //存储计时器
    setInter: '',
    num: 1,
    con:"",
    contentList: ["你的初吻是几岁在什么地方被什么人夺去的?",
      "你的初恋是几岁?",
      "你的初恋对象是谁?",
      "大学一共挂过几门课?",
      "大学所有考试中，你考到最低的一门是什么课，考了几分？",
      "你吻过几个人？",
      "在现场所有同学中，你看哪位异性同学最舒服？",
      "如果再给你一次机会，回到高中毕业那天，你最想对某一位异性说什么话？",
      "第一个喜欢的异性叫什么名字？",
      "你曾经意淫过在场的哪一位？如果过去没有的话，你现在会选哪一位作为YY对象?",
      "对梦中情人有什么要求（在一分钟内说出五条）",
      "让你一直念念不忘的一位异性的名字？原因？",
      "谈过几次恋爱？",
      "每天睡觉前都会想起的人是谁？",
      "你最怕的事情或东西是什么（说出三件）",
      "你会不会在意ta的过去，为什么？",
      "打算什么时候结婚？",
      "现在心里最在意的异性叫什么名字？",
      "第一次爱的人对你有什么影响？",
      "你在意你的老婆（老公）不是处女（处男）吗？",
      "你会为了爱情牺牲一切，包括生命吗？",
      "结婚后希望生男孩还是女孩(只能选择一个，说出原因) ",
      "和多少异性有过非恋爱的暧昧关系？",
      "你作弊使用过的最高招？",
      "从小到大最丢脸出丑的事情是什么？",
      "如果明天是世界末日，你现在最想做的是什么？",
      "如果让你从现场找一位gg / mm的话，你会选择谁？给出三个理由",
      "如果让你kiss现场的某一位异性，你会选择谁，为什么？",
      "说出同寝室的人最让你受不了的习惯 ",
      "最欣赏自己哪个部位？对自己那个部位最不满意？"
    ],
    disabled:false//默认false 点击开始之后不要重复点击了 
  },
  onLoad: function () {
    var that = this;

  },
  startSetInter: function () {
    console.log("我来设置定时器来了")
    var that = this;
    var newList = that.data.contentList;
    //将计时器赋值给setInter
    that.data.setInter = setInterval(
      function () {
        for (var i = 0; i < newList.length; i++) {
          var randomIndex = Math.floor(Math.random() * newList.length);
          that.setData({
            con: newList[randomIndex],
            disabled:true
          })
        }
      }
      , 500);
      that.setData({
        setInter: that.data.setInter
      })
  },
  endSetInter: function () {
    console.log("我来清除定时器来了")
    var that = this;
    //清除计时器  即清除setInter
    clearInterval(that.data.setInter)
    that.setData({
      disabled: false
    })
  },
  onHide: function () {

  },
  // onUnload: function () {
  //   var that = this;
  //   //清除计时器  即清除setInter
  //   clearInterval(that.data.setInter)
  // },

})