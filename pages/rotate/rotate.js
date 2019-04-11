// pages/rotate/rotate.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:true,
    isShow:false,
    quit:true,
    animation:"",
    isRotate: 15,
    defultc:0.5,
    animationData: {},
    text: ["真心话", "大逃脱", "大冒险", "喝一杯", "背锅侠", "大逃脱", "大冒险", "喝一杯","大逃脱"],//每个扇形中的文字填充
    rotateBj: app.globalData.serverXiaoyao + "bacforturntable@2x.png",
    imgUrl: app.globalData.serverXiaoyao + "zp2.png",
    cImg: app.globalData.serverXiaoyao + "zp1.png",
    zImg: app.globalData.serverXiaoyao + "startbutton@2x.png",
    closeImg: app.globalData.serverXiaoyao + "deleate@2x.png",
    bannerImg: app.globalData.serverXiaoyao + "bannertext.png", 
    linghtImg: app.globalData.serverXiaoyao + "zp21.png",
    linghtImg2: app.globalData.serverXiaoyao + "zp2.png",
    imganimate:"",
    timego:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

  },
  onHide:function(){
    clearInterval(this.data.imganimate);
    clearTimeout(this.data.timego);
    console.log(this.data.imganimate)
    console.log(this.data.timego)
  },
  onShow:function(){
    
    var that = this;
    console.log(that.data.flag)
    that.setData({
      flag: true,
    });
    console.log(that.data.flag)
  },
  ruleWay:function(){
    var that = this
    that.setData({
      isShow:true
    })
  },
  closeTips:function(){
    var that = this
    that.setData({
      isShow: false
    })
  },
  rotate: function () {
    let that = this;
    // 指定获奖结果
    if (that.data.flag) {
      that.setData({
        flag:false,        
      })
      that.data.imganimate = setInterval(function(){
        if (that.data.imgUrl == that.data.linghtImg2){
         that.setData({
           imgUrl: that.data.linghtImg
         })
       }else{
          that.setData({
            imgUrl: that.data.linghtImg2
          })
       }
      },500)
    }else{
      return false
    }
    let n = that.data.isRotate; //传入指定的旋转角度，内部指定获奖结果。在指定角度上加上旋转基数模拟转盘随机旋转。

    //随机获奖结果
    let rand = Math.random() * 1000;//取一个随机的旋转角度，使获奖结果随机化。
    n = n + rand + 1080; //1100为旋转基数，最低要旋转1100度，即4圈。rand-(rand%80) 这个是让指针永远停在扇形中心的算法。n + 是为了重复点击的时候有足够的旋转角度。
   //n = 1091
    console.log((n % 360) / 40)
    let c = ((n % 360) / 40);
    console.log(c)
    that.setData({
      isRotate: n,
    })
    var animation = wx.createAnimation({
      duration: 4000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.rotate(n).step();

    this.setData({
      animationData: animation.export()
    });
    setTimeout(function () {
      if (0 <= c && c < 1) {
          that.showContent("真心话");
          that.setData({
            flag: false,
          });
          that.stopimganimate();
          that.timegoto("真心话");
      }else if (1 <= c && c < 2) {
        that.showContent("什么也不用干");
        that.stopimganimate();
      } else if (2 <= c && c < 3) {
        that.showContent("大冒险")
        that.setData({
          flag: false,
        });
        that.stopimganimate();
        that.timegoto("大冒险");
      } else if (3 <= c && c < 4) {    
        that.showContent("喝一杯");
        that.stopimganimate();
      } else if (4 <= c && c < 5) {
        that.showContent("下一个大转盘玩家的结果由你承担");
        that.stopimganimate();
      } else if (5 <= c && c < 6) {
        that.showContent("什么都不用干");
        that.stopimganimate();
      } else if (6 <= c && c < 7) {
        that.showContent("大冒险");
        that.setData({
          flag: false,
        });
        that.stopimganimate();
        that.timegoto("大冒险");
      } else if (7 <= c && c < 8) {
        that.showContent("喝一杯");
        that.stopimganimate();
      }
      else if (8 <= c && c < 9) {
        that.showContent("什么也不用干");
        that.stopimganimate();
      }
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 4000)
  },
  showContent:function(con){
    let that = this
    if (that.data.quit){
      wx.showToast({
        title: con,
        icon: 'none',
        duration: 2000,
      })
      that.setData({
        flag: true
      })
    }
    
  },
  stopimganimate:function(){
    var that = this;
    clearInterval(that.data.imganimate);
  },
  timegoto:function(content){
    var that = this;
    if (that.data.quit) {
      that.data.timego = setTimeout(function () {
        if (content == "真心话") {
          wx.navigateTo({
            url: '/pages/heart/heart',
          })
        } else if (content == "大冒险") {
          wx.navigateTo({
            url: '/pages/adventure/adventure',
          })
        }
      }, 1500)
    }
    
  },
  onHide:function(){
    var that = this;
    clearInterval(that.data.imganimate);
  },
  /**
  * 生命周期函数--监听页面卸载
  */
  onUnload: function () {
    var that = this;
    that.setData({
      quit:false
    })
    console.log(that.data.quit)
    clearInterval(this.data.imganimate);
    clearTimeout(this.data.timego);
    console.log(this.data.imganimate)
    console.log(this.data.timego)
  }
})