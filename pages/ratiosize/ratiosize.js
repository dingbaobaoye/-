// pages/qibajiu/qibajiu.js
var app = getApp();
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sup: true,
    dup: true,
    music: true,
    isShow: true,
    inviteback: app.globalData.serverimage + "bac0-waving.png",
    roleUrl: app.globalData.serverimage + "windownew.png",
    plate: app.globalData.serverimage + "plate-waving.png",
    waveing: app.globalData.serverimage + "wave-waving.png",
    audioUrl: app.globalData.serverimage + "qibajiu.mp3",
    deleate: app.globalData.serverimage + "deleate.png",
    three: app.globalData.serverimage + "three-button.png",
    light: app.globalData.serverimage + "light.png",
    closemusic: app.globalData.serverXiaoyao + "closemusic@2x.png",
    openmusic: app.globalData.serverXiaoyao + "music@2x.png",
    numtotal: 0,
    width: 0,
    height: 0,
    num: 0,
    SetInter: "", //定时器
    numa: 0,
    numb: 0,
    timeNum: 0,
    last_update: 0,
    last_x: 0,
    last_y: 0,
    last_z: 0,
    determination: true,
    terminal: true,
    pica: '',
    picb: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var pics = [
      app.globalData.serverimage + "one-button.png", app.globalData.serverimage + "two-button.png", app.globalData.serverimage + "three-button.png", app.globalData.serverimage + "four-button.png", app.globalData.serverimage + "five-button.png", app.globalData.serverimage + "six-button.png",
    ]
    var numa = Math.round(Math.random() * (pics.length - 1));
    var numb = Math.round(Math.random() * (pics.length - 1));
    var pica = pics[numa];
    var picb = pics[numb];
    var numtotal = numa + numb + 2;
    that.setData({
      pica: pica,
      picb: picb,
      numtotal: numtotal,
    })
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          width: res.screenWidth,
          height: res.screenHeight
        })
      },
    })
  },
  //关闭音乐

  closemusic: function () {
    var that = this
    console.log(that.data.audioUrl)
    if (that.data.music) {
      that.setData({
        music: false
      })
    } else {
      that.setData({
        music: true
      })
    }

  },
  showRole: function(e) {
    var that = this;
    that.setData({
      terminal: false,
    })
  },
  xiaoshi: function(e) {
    var that = this;
    that.setData({
      terminal: true,
    })
  },
  playAuto: function() {
    var that = this;
    wx.playBackgroundAudio({
      dataUrl: that.data.audioUrl,
      title: 'weixin'
    })
  },
  snakeOne: function() {
    var that = this;
    
    var dup = that.data.dup;
    if (dup == false) {
      return;
    }
    that.setData({
      sup: false,
      dup: false
    })
    if (that.data.music) {
      that.playAuto();
    }
    var animation = wx.createAnimation({
      duration: 3000,
      timingFunction: 'linear',
    })
    var pics = [
      app.globalData.serverimage + "one.png", app.globalData.serverimage + "two.png", app.globalData.serverimage + "three.png", app.globalData.serverimage + "four.png", app.globalData.serverimage + "five.png", app.globalData.serverimage + "six.png",
    ]
    that.data.SetInter = setInterval(function() {
      var numa = Math.round(Math.random() * (pics.length - 1));
      var numb = Math.round(Math.random() * (pics.length - 1));
      var pica = pics[numa];
      var picb = pics[numb];
      var numVal = that.data.num + 1;
      var timeNum = that.data.timeNum + 100;
      if (numVal % 2 == 1) {
        animation.rotate(10).step({
          duration: 100,
        })
      } else {
        animation.rotate(-10).step({
          duration: 100,
        })
      }
      animation.rotate(0).step({
        duration: 100,
      })
      that.setData({
        pica: pica,
        picb: picb,
        num: numVal,
        numa: numa + 1,
        numb: numb + 1,
        timeNum: timeNum,
        animationData: animation.export()
      })
      if (timeNum == 3000) {
        clearInterval(that.data.SetInter);
        var numtotal = numa + numb + 2;
        that.setData({
          numtotal: numtotal,
          determination: true,
          num: 0,
          timeNum: 0,
          sup: true,
          dup: true
        })
        return;
      }
    }, 100);
  },
  snakeTwo: function() {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    that.setData({
      isShow: true
    })
    wx.onAccelerometerChange(function(res) {
      var curTime = new Date().getTime()
      var determination = that.data.determination;
      var last_update = that.data.last_update;
      if ((curTime - last_update) > 100) {
        var diffTime = curTime - last_update;
        var speed = Math.abs(res.x + res.y + res.z - that.data.last_x - that.data.last_y - that.data.last_z) / diffTime * 10000;
        if (speed > 60 && determination && that.data.isShow) {
          that.setData({
            determination: false,
          })
          that.snakeOne();
        }
        that.setData({
          last_update: curTime,
          last_x: res.x,
          last_y: res.y,
          last_z: res.z
        })
      }
    })

    // shake();
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    var that = this;

    that.setData({
      isShow: false
    })
    console.log(that.data.isShow + "hide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    var that = this
    that.setData({
      isShow: false
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})