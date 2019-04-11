// pages/qibajiu/qibajiu.js
var app = getApp();
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sup:true,
    dup:true,
    music:true,
    isShow:true,
    inviteback: app.globalData.serverimage + "bac-seveneightnine.png",
    roleUrl: app.globalData.serverimage + "windows.png",
    plate: app.globalData.serverimage + "plate-orange.png",
    waveing: app.globalData.serverimage + "waveing.png",
    audioUrl: app.globalData.serverimage +"qibajiu.mp3",
    deleate: app.globalData.serverimage + "deleate.png",
    closemusic: app.globalData.serverXiaoyao + "closemusic@2x.png",
    openmusic: app.globalData.serverXiaoyao + "music@2x.png",
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
    wenan: '结果提示区域',
    buttonHidden:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var pics = [
      app.globalData.serverimage + "one-red.png", app.globalData.serverimage + "two-red.png", app.globalData.serverimage + "three-red.png", app.globalData.serverimage + "four-red.png", app.globalData.serverimage + "five-red.png", app.globalData.serverimage + "six-red.png",
    ]
    var pica = pics[Math.round(Math.random() * (pics.length - 1))];
    var picb = pics[Math.round(Math.random() * (pics.length - 1))];
    that.setData({
      pica: pica,
      picb: picb,
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

  closemusic:function(){
    var that = this
    console.log(that.data.audioUrl) 
    if(that.data.music){
      that.setData({
        music:false
      })
    }else{
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
  playAuto:function(){
    var that=this;
    wx.playBackgroundAudio({
      dataUrl: that.data.audioUrl,
      title: 'weixin'
    })  
  },
  snakeOne: function(e) {
    var that = this;
    var dup=that.data.dup;
    if(dup==false){
      return;
    }
    that.setData({
      sup:false,
      dup:false,
    })
    
    if(that.data.music){
      that.playAuto();
    }
    var animation = wx.createAnimation({
      duration: 3000,
      timingFunction: 'linear',
    })
    var pics = [
      app.globalData.serverimage + "one-red.png", app.globalData.serverimage + "two-red.png", app.globalData.serverimage + "three-red.png", app.globalData.serverimage + "four-red.png", app.globalData.serverimage + "five-red.png", app.globalData.serverimage + "six-red.png",
    ]
    that.data.SetInter = setInterval(function() {
      var numa = Math.round(Math.random() * (pics.length - 1));
      var numb = Math.round(Math.random() * (pics.length - 1));
      var pica = pics[numa];
      var picb = pics[numb];
      var numVal = that.data.num + 1;
      var timeNum = that.data.timeNum + 100;
      if(numVal%2==1){
        animation.rotate(10).step({
          duration: 100,
        })
      }else{
        animation.rotate(-10).step({
          duration: 100,
        })
      }
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
        var positionNum = numa + numb + 2;
        if (positionNum < 7 && positionNum > 2) {
          that.setData({
            wenan: '你很幸运 下一位',
          })
        } else if (positionNum == 7) {
          that.setData({
            wenan: '往杯里加酒吧 然后下一位',
          })
        } else if (positionNum == 8) {
          that.setData({
            wenan: '喝一半 然后继续摇',
          })
        } else if (positionNum == 9) {
          that.setData({
            wenan: '恭喜你，干杯，喝完随意倒',
          })
        } else if (positionNum == 2 && numa > 0) {
          that.setData({
            wenan: '指定在座任意一人喝完',
          })
        } else if (numa == numb) {
          that.setData({
            wenan: '摇骰子顺序倒转',
          })
        }else{
          that.setData({
            wenan: '你很幸运 下一位',
          })
        }
        that.setData({
          determination: true,
          num: 0,
          timeNum: 0,
          buttonHidden:true,
          sup:true,
          dup:true
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
    console.log(that.data.isShow + "show");
    wx.onAccelerometerChange(function(res) {
      var curTime = new Date().getTime()
      var determination = that.data.determination;
      var last_update = that.data.last_update;
      var sup = that.data.sup;
      var dup=that.data.dup;
      if ((curTime - last_update) > 100) {
        var diffTime = curTime - last_update;
        var speed = Math.abs(res.x + res.y + res.z - that.data.last_x - that.data.last_y - that.data.last_z) / diffTime * 10000;
        if (speed > 60 && determination && sup&&dup && that.data.isShow) {
          that.snakeOne();
          that.setData({
            determination: false,
            dup:false
          })
          
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
      isShow:false
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