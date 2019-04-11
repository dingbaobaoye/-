// pages/qibajiu/qibajiu.js
var app = getApp();
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dShow: false,
    flag: false,
    music:true,
    isShow: true,
    inviteback: app.globalData.serverimage + "bac-dice.png",
    shadow: app.globalData.serverimage + "shadow.png",
    roleUrl: app.globalData.serverimage + "windownew.png",
    toy: app.globalData.serverimage + "toy.png",
    waveing: app.globalData.serverimage + "openbutton.png",
    audioUrl: app.globalData.serverimage + "yaosaizi.mp3",
    wavedice: app.globalData.serverimage + "wavedice.png",
    deleate: app.globalData.serverimage + "deleate.png",
    closeing: app.globalData.serverimage + "close-button.png",
    cover: app.globalData.serverimage + "cover.png",
    plate: app.globalData.serverimage + "plate.png",
    invitebacka: app.globalData.serverimage + "backbig.png",
    closemusic: app.globalData.serverXiaoyao + "closemusic@2x.png",
    openmusic: app.globalData.serverXiaoyao + "music@2x.png",
    ltImg: app.globalData.serverXiaoyao + "lt.png",
    rbImg: app.globalData.serverXiaoyao +"rb2x.png",
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
    pica: app.globalData.serverimage + "onea.png",
    picb: app.globalData.serverimage + "sixa.png",
    openOrclose: true,
    orshow: false,
    lists: [{ title: "1、摇骰", content: '每局游戏开始时，每位游戏参与者必须摇晃自己的手机上的骰盅，以打乱骰子的点（与麻将和扑克牌洗牌的目的相同）' }, { title: "2、叫骰", content: '由游戏起始者率先喊出“X个Y”（即自己觉得全场一共拥有X个Y点数的骰子）。注意这里不是单纯叫骰者骰盅内真实的情况，这里是尽情发挥演技的时间。' }, { title: "", content: '然后根据事先约定好的方向依次“叫骰”，但是“叫骰”者喊出的数值需高于自己座位上方的人所喊出的数值总和，或者要大于上家的“X”数值。' }, { title: "3、叫斋", content: '通常骰子的“1”点是通用的，可以变成任何点数，但是开局喊了X个“1”，则“1”点便不再通用。' }, { title: "4、开杀", content: '当你根据自己骰盅内的实际情况，而不相信上一位与你相邻的叫骰者，开骰盅清点所有参加者骰子与叫骰者所喊的Y的数量。' }, { title: "5、跳杀", content: '类似“开杀”，但是该“开杀者”与叫骰者不相邻。这样的失败者是需要加倍喝酒。' }, { title: "6、反杀", content: '叫骰者被开杀后，开骰盅前有权对开杀者“加注”，通常固定，“开多少（码数）大多少(码数)”。 开杀者被“反杀”后，有全权再“反杀”多一次叫骰者。' },]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var pics = [
      app.globalData.serverimage + "onea.png", app.globalData.serverimage + "twoa.png", app.globalData.serverimage + "threea.png", app.globalData.serverimage + "foura.png", app.globalData.serverimage + "fivea.png", app.globalData.serverimage + "sixa.png",
    ]
    var numa = Math.round(Math.random() * (pics.length - 1));
    var numb = Math.round(Math.random() * (pics.length - 1));
    var numc = Math.round(Math.random() * (pics.length - 1));
    var numd = Math.round(Math.random() * (pics.length - 1));
    var nume = Math.round(Math.random() * (pics.length - 1));
    var pica = pics[numa];
    var picb = pics[numb];
    var picc = pics[numc];
    var picd = pics[numd];
    var pice = pics[nume];
    that.setData({
      pica: pica,
      picb: picb,
      picc: picc,
      picd: picd,
      pice: pice,
    })
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          width: res.screenWidth,
          height: res.screenHeight
        })
      },
    })
  },
  showRole: function (e) {
    var that = this;
    that.setData({
      terminal: false,
    })
  },
  xiaoshi: function (e) {
    var that = this;
    that.setData({
      terminal: true,
    })
  },
  playAuto: function () {
    var that = this;
    wx.playBackgroundAudio({
      dataUrl: that.data.audioUrl,
      title: 'weixin'
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
  snakeOne: function () {
    var that = this;
    if (that.data.music) {
      that.playAuto();
    }
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'linear',
    })
    var pics = [
      app.globalData.serverimage + "onea.png", app.globalData.serverimage + "twoa.png", app.globalData.serverimage + "threea.png", app.globalData.serverimage + "foura.png", app.globalData.serverimage + "fivea.png", app.globalData.serverimage + "sixa.png",
    ]
    
    that.data.SetInter = setInterval(function () {
      that.setData({
        flag: true
      });
      var numa = Math.round(Math.random() * (pics.length - 1));
      var numb = Math.round(Math.random() * (pics.length - 1));
      var numc = Math.round(Math.random() * (pics.length - 1));
      var numd = Math.round(Math.random() * (pics.length - 1));
      var nume = Math.round(Math.random() * (pics.length - 1));
      var pica = pics[numa];
      var picb = pics[numb];
      var picc = pics[numc];
      var picd = pics[numd];
      var pice = pics[nume];
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
      if (parseInt(numVal / 5) % 2 == 1) {
        that.setData({
          dShow: true,
        })
      } else {
        that.setData({
          dShow: false,
        })
      }

      animation.rotate(0).step({
        duration: 100,
      })
      that.setData({
        pica: pica,
        picb: picb,
        picc: picc,
        picd: picd,
        pice: pice,
        num: numVal,
        numa: numa + 1,
        numb: numb + 1,
        timeNum: timeNum,
        animationData: animation.export()
      })
      if (timeNum == 2000) {
        clearInterval(that.data.SetInter);
        var numtotal = numa + numb + 2;
        that.setData({
          flag: false,
          numtotal: numtotal,
          determination: true,
          num: 0,
          timeNum: 0,
        })
        return;
      }

    }, 100);
  },
  openCover: function (e) {
    var that = this;
    var openOrclose = !that.data.openOrclose;
    if (openOrclose) {
      var animation = wx.createAnimation({
        duration: 0,
        timingFunction: 'linear',
      })
      animation.rotate(0).step({
        duration: 100,
      })
      that.setData({
        openOrclose: openOrclose,
        animationData: animation.export()
      })
    } else {
      that.setData({
        openOrclose: openOrclose,
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    that.setData({
      isShow: true
    })
    wx.onAccelerometerChange(function (res) {
      var curTime = new Date().getTime()
      var determination = that.data.determination;
      var openOrclose = that.data.openOrclose;
      var last_update = that.data.last_update;
      if ((curTime - last_update) > 100) {
        var diffTime = curTime - last_update;
        var speed = Math.abs(res.x + res.y + res.z - that.data.last_x - that.data.last_y - that.data.last_z) / diffTime * 10000;
        if (speed > 60 && determination && openOrclose && that.data.isShow) {
          that.setData({
            determination: false,
          })
          console.log("开关处于什么状态==" + openOrclose)
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
  onHide: function () {
    var that = this;
    clearInterval(that.data.SetInter);
    that.setData({
      determination: true,
      num: 0,
      timeNum: 0,
      orshow: false,
      isShow:false,
      dShow:false
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    var that = this;
    clearInterval(that.data.SetInter);
    that.setData({
      determination: true,
      num: 0,
      timeNum: 0,
      orshow: false,
      isShow: false,
      dShow:false
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})