// pages/profile/profile.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:'',
    nickName:'',
    imgList:[]
  },
  
  getCartImg:function(){
    wx.request({
      url: 'http://192.168.199.233:4000/carts/cartImg',
      success:(res)=>{
        //console.log(res)
        this.setData({
          imgList:res.data,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      img:app.globalData.img,
      nickName:app.globalData.nickName
    })
    this.getCartImg();
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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