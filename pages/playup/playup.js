// pages/playup/playup.js
var app = getApp();
var util = require('../../utils/util.js');
Page({
  data: {
    lists: [app.globalData.serverimage + "cardsone.png", app.globalData.serverimage + "cardstwo.png", app.globalData.serverimage + "cardsthree.png", app.globalData.serverimage + "cardsfour.png"],
    picUrl: app.globalData.serverimage + "bacpichomepage.png",
    width: 0,
    height: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          width: res.screenWidth,
          height: res.screenHeight
        })
      },
    })
  },
  goToWhere: function(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    if (index == 0) {
      wx.navigateTo({
        url: '../qibajiu/qibajiu',
      })
    } else if (index == 1) {
      wx.navigateTo({
        url: '../rotate/rotate',
      })
    } else if (index == 2) {
      wx.navigateTo({
        url: '../ratiosize/ratiosize',
      })
    } else if (index == 3) {
      wx.navigateTo({
        url: '../dice/dice',
      })
    }
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

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