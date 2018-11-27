// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],    
    navContent:[],
  },

  //发送异步请求取回导航数据
  getNav:function(){
    wx.request({
      url: 'http://192.168.199.233:4000/navlist/navlist',
      method:"get",
      dataType:"json",
      success:(res)=>{
        //console.log(res)
        this.setData({
          navList:res.data,
        })
        //console.log(this.data.navList)
      }
    })
  },

  getContent:function(){
    var pid = 1;
    wx.request({
      url: 'http://192.168.199.233:4000/navlist/navContent?pid='+pid,
    method:"get",
    dataType:"json",
    success:(res)=>{
      this.setData({
        navContent:res.data
      })
      //console.log(this.data.navContent)
    }
    })
  },
  change:function(event){
    var pid = event.target.dataset.id
    wx.request({
      url: 'http://192.168.199.233:4000/navlist/navContent?pid='+pid,
      method:"get",
      dataType:"json",
      success:(res)=>{
        this.setData({
          navContent:res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNav();
    this.getContent();
   
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