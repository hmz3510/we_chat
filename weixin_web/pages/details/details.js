// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    promise:["正品保障","快速发货","7天退换货"],
    lid:0,
    family_id:0,
    img:[],
    text:"收藏",
    product:[], //保存商品信息
    picture:[], //保存商品图片
    uid:1,
  },

  // 加载详情页图片和数据
  getData:function(){
    var lid = this.data.lid;
    var family_id = this.data.family_id;
    wx.request({
      url: 'http://192.168.199.233:4000/details/details',
      data:{lid:lid,family_id:family_id},
      success:(res)=>{
        //console.log(res)
        this.setData({
          product:res.data.product,
          picture:res.data.picture
        })
        // console.log(this.data.product)
        // console.log(this.data.picture)
      }
    })
  },

  shouCang:function(){
    if(this.data.text=="收藏"){
      wx.showToast({
        title: '收藏成功',
      })
      this.setData({
        text:"已收藏"
      })
    }else{
      wx.showToast({
        title: '取消收藏成功',
        icon:"none"
      })
      this.setData({
        text: "收藏"
      })
    }
  },
  addCart:function(){
    wx.request({
      url: 'http://192.168.199.233:4000/carts/add',
      data:{lid:this.data.lid,count:1,uid:this.data.uid},
      success:(res)=>{
        wx.showToast({
          title: '已添加入购物车,请到购物车处查看',
          icon: "none"
        })
      }
    })
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      lid:options.lid,
      family_id:options.family_id
    })
    this.getData();
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