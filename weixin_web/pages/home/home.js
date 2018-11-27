// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[ //banner图片
    ],
    navImage:[], //nav导航图片
    fruit:[],
    tel:[],
  },

  //获取banner和产品图片
  getIndex:function(){
    var that = this
    wx.request({
      url: 'http://192.168.199.233:4000/index/index',
      method: "get",
      dataType: "json",
      success: function (res) {
       // console.log(res.data)
        that.setData({
          bannerList: res.data.banner,
          fruit:res.data.fruit,
          tel:res.data.tel
        })
        console.log(that.data.fruit)
      }
    })
  },
  //获取导航图片九宫格图片
  getnavImage:function(){
    var that = this;
    wx.request({
      url: 'http://192.168.199.233:4000/index/nav',
      method:"get",
      success(res){
     // console.log(res)
       that.setData({
         navImage:res.data
       })
      }
    })
  },

  //跳转连接
  jumpDetail:function(event){
    var lid = event.target.dataset.id;
    var family_id = event.target.dataset.fid
    wx.navigateTo({
      url: '/pages/details/details?lid=' + lid + "&family_id=" + family_id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIndex();
    this.getnavImage();
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