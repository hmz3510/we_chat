// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse:wx.canIUse('button.open-type.getUserInfo'),

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      wx.getSetting({
        success:function(res){
          //console.log(res.authSetting['scope']) true
          if(res.authSetting['scope.userInfo']){
            wx.getUserInfo({
              success:function(res){
               // console.log(res)
               //从数据库获取信息
               that.queryUserInfo();
               //用户已经授权
              }
            })
          }
        }
      })
  },
  
  bindGetUserInfo:function(event){
    if(event.detail.userInfo){
      //console.log(event.detail.userInfo)
      //用户按了允许授权按钮
      var that =this;
      getApp().globalData.img = event.detail.userInfo.avatarUrl;
      getApp().globalData.nickName = event.detail.userInfo.nickName
      //插入登录的用户的相关信息到数据库
      // wx.request({
      //   url: "http://localhost:4000/user/addUser",
      //   method:"post",
      //  data:{
      //    openid: getApp().globalData.openid,
      //    nickName: event.detail.userInfo.nickName,
      //    avatarUrl: event.detail.userInfo.avatarUrl,
      //    province: event.detail.userInfo.province
      //  },
      //  header:{
      //    'Content-Type': 'application/x-www-form-urlencoded'
      //  },
      //  success:function(res){
      //    //从数据库获取用户信息
      //    that.queryUserInfo();
      //    console.log("插入小程序登录用户信息成功")
      //  }
      // });
      //授权成功后跳转 进入小程序首页
      wx.switchTab({
        url: '/pages/home/home',
      })
    }else{
      //用户拒绝了授权
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权,将无法进入小程序,请授权之后再进入',
        showCancel:false,
        confirmText:"返回授权",
        success:function(res){
          if(res.confirm){
            console.log("用户点击了 '返回授权'")
          }
        }
      })
    }
  },
  
  //获取用户接口
  queryUserInfo:function(){
    wx.request({
      url: "http://192.168.199.233:4000/user/getUser",
      method:"post",
      data:{
        openid:getApp().globalData.openid
      },
      header:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      success:(res)=>{
        getApp().globalData.userInfo = res.data;
      }
    })
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