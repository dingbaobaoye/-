var app = getApp();
var util = require('../../utils/util.js');
Page({
  data: {
    picUrl: app.globalData.serverimage + "bacpic.png",
    playUp: app.globalData.serverimage + "onlinegamesbutton.png",
    playDown: app.globalData.serverimage + "outlinegamesbutton.png",
    width:"",
    height:"",
  },
  onLoad: function (options) {
    var that=this;
    wx.getSystemInfo({
      success: function(res) {
        width:res.windowWidth;
        height:res.windowHeight;
      },
    })
  },
  goUp:function(e){
    var that=this;
    wx.navigateTo({
      url: '../playup/playup',
    })
  },
  goDown:function(e){
    var that=this;
    wx.navigateTo({
      url: '../outline/outline',
    })
  },
})
