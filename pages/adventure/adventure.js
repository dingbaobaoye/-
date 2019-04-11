// pages/heart/heart.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start: true,
    tipsText: "点击下方按钮开始",
    t: "",
    rotateBj: app.globalData.serverXiaoyao + "bacforturntable@2x.png",
    titleImg: app.globalData.serverXiaoyao + "text-risk@2x.png",
    startImg: app.globalData.serverXiaoyao + "start@2x.png",
    continueImg: app.globalData.serverXiaoyao + "continue@2x.png",
    contentList: ["背一位异性绕场一周",
      "唱青藏高原最后一句",
      "做一个大家都满意的鬼脸",
      "抱一位异性直到下一轮真心话大冒险结束",
      "像一位异性表白3分钟",
      "与一位异性十指相扣，对视10秒",
      "邀请一位异性为你唱情歌，或邀请一位异性与你情歌对唱",
      "做自己最性感、最妩媚的表情或动作",
      "吃下每个人为你夹得菜（如果是辣椒……）",
      "跳草裙舞、脱衣舞（反正是冬天）",
      "蹲在凳子上作便秘状",
      "亲***（这个人可以事先指定），或者亲一位异性，部位不限",
      "神情的吻墙10秒",
      "模仿古代特殊职业女子拉客",
      "模仿脑白金广告，边唱边跳",
      "让他到街上大喊“卖拖鞋啦～2块一双，买一送3",
      "抓着铁门喊“放我出去！",
      "对陌生人美眉挤眉弄眼",
    ]
  },
  start: function () {
    var that = this;
    var newList = that.data.contentList;

    if (that.data.start) {
      that.setData({
        start: false,
      })
      that.data.t = setInterval(function () {
        var randomIndex = Math.floor(Math.random() * newList.length);
        that.setData({
          tipsText: newList[randomIndex],
        })
      }, 120)
    } else {
      that.setData({
        start: true,
      })
      clearInterval(that.data.t)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  oHide: function () {
    var that = this;
    clearInterval(that.data.t)
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    var that = this;
    clearInterval(that.data.t)
  },
})