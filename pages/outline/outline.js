// pages/outline/outline.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLeft:false,
    showRight:true,
    swiper: {
      contentUrls: [
        {
          title:"老虎棒子鸡",
          img:"/image/chopsticks.png",
          content:'老虎、棒子、鸡、虫，一物克一物:棒击虎，虎吃鸡，鸡吃虫，虫吃棒。\n两人相对，各用一根筷子相击，同时口喊“棒子棒....."或喊“老虎”  “鸡”，或“虫”，负者饮酒，若棒子与鸡，虎与虫同时喊出，则不分胜负。适合两个人玩，因为出口很快，所以玩起来速度很快!',
          width:'232rpx'
        },
        {
          title: "官兵捉贼",
          img: "/image/gamesthree@2x.png",
          content: '准备四张小纸，分别写“官、兵、捉、贼”字样，将四张纸折叠起来，参加游戏的四个人分别抽出一张，抽到“捉”字的人要根据其它三个人的面部表情或其它细节来猜出谁拿的是“贼” 字，猜错的要罚，由抽到“官”字的人决定如何惩罚，由抽到“兵”字',
          width: '297rpx'
        },
        {
          title: "颠三倒四",
          img: "/image/gamestwo@2x.png",
          content: '第一个人说1，第二个人就说2，第三个人一定要说4,第4个人说3 (这就是颠三倒四)，第5个人说5， 第6个人说6，第7个人不能说话，要用手指指向上面，第8个人也不能说话，要用手指指向下面(也就是七上八下)。',
          width: '412rpx'
        },
        {
          title: "十五二十",
          img: "/image/hands@2x.png",
          content: "每人两只手，两个人加起来最多是20，双方每次出没有(双手握拳伸出)，5(- 手握拳一手伸直)， 10(双手伸直)这三种数字。同时报一个比自己手上出的数字大或相同的数字，如果双方出的加起来等于自己报的数字，自己就贏，反之则喝酒。",
          width: '412rpx'
        },
      ],
      indicatorDots: false,
      autoplay: false,
      circular:false,//是否衔接滑动
      duration: 500,
      current: 0,
    },
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  changeSwiper:function(e){
    
    var that = this;
    var swiper = that.data.swiper;
    var current = e.detail.current;
    if (current == 0){
      that.setData({
        showLeft: false,
        showRight: true,
      });
    } else if (current == (swiper.contentUrls.length - 1)){
      that.setData({
        showRight: false,
        showLeft: true
      });
    }else{
      that.setData({
        showRight: true,
        showLeft: true
      });
    }

    swiper.current = current ;
    this.setData({
      swiper: swiper,
    })
  },
  prevImg: function () {
    var swiper = this.data.swiper;
    var current = swiper.current;
   
    var that = this;
    if (current == 0) {
      that.setData({
        showLeft: false,
      });
    } else {
      that.setData({
        showLeft: true,
        showRight:true
      });
    }
    swiper.current = current > 0 ? current - 1 : swiper.contentUrls.length - 1;
    this.setData({
      swiper: swiper,
    })
  },

  nextImg: function () {
    var swiper = this.data.swiper;
    var current = swiper.current;
  
    var that = this;
  
    if (current+1 == (swiper.contentUrls.length-1)){
      that.setData({
        showRight:false,
        showLeft:true
      });
       
    }else{
      that.setData({
        showRight: true,
        showLeft:true
      });
    }
    swiper.current = current < (swiper.contentUrls.length - 1) ? current + 1 : 0;
    this.setData({
      swiper: swiper,
    })
  },
})