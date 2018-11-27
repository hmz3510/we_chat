// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid:1,
    list:[],
    sum:0,
    totalPrice:0,
    checked:true,
    allSelect:false,
    num:0,
    hasSelect:false
  },

  getList:function(){
    wx.request({
      url: 'http://192.168.199.233:4000/carts/cartlist',
      data:{uid:this.data.uid},
      dataType:"json",
      success:(res)=>{
        this.setData({
          list:res.data
        })
       console.log(this.data.list)
      }
    })
  },

  //选中事件
  selected:function(event){
    this.data.num=0;
    var index = parseInt(event.target.dataset.index);
    this.data.list[index].isselect = !this.data.list[index].isselect;
    if (this.data.list[index].isselect){
      this.data.totalPrice += this.data.list[index].price * this.data.list[index].count 
    }else{
      this.data.totalPrice -= this.data.list[index].price * this.data.list[index].count
      
    }
    //全选判断条件
    for(var i=0;i<this.data.list.length;i++){
      this.data.num += + this.data.list[i].price * this.data.list[i].count
      if(this.data.num==this.data.totalPrice){
        this.data.allSelect = true
      }else{
        this.data.allSelect = false
      }
   
    }
    this.setData({
      list:this.data.list,
      totalPrice: this.data.totalPrice,
      allSelect:this.data.allSelect,
    })
    //console.log(this.data.list)
  },

  //全选事件
  allSelect:function(){
    var i =0;
    if(!this.data.allSelect){
      for(var i = 0; i<this.data.list.length;i++){
        this.data.list[i].isselect = true
        this.data.sum += this.data.list[i].price * this.data.list[i].count
      }
    }else{
      for(var i =0;i<this.data.list.length;i++){
        this.data.list[i].isselect = false;
      }
      this.data.sum = 0;
    }
    this.setData({
      list:this.data.list,
      allSelect:!this.data.allSelect,
      totalPrice:this.data.sum
    })
    console.log(this.data.allSelect)
  },

  //更新
  addCart:function(event){
    var iid = event.target.dataset.iid
    var count = event.target.dataset.count
    count++;
    wx.request({
      url: 'http://192.168.199.233:4000/carts/update',
      data:{iid:iid,count:count},
      success:(res)=>{
       this.getList();
      }
    })
  },
  delCart:function(event){
    var iid = event.target.dataset.iid
    var count = event.target.dataset.count
    count--;
    wx.request({
      url: 'http://localhost:4000/carts/update',
      data: { iid: iid, count: count },
      success: (res) => {
        this.getList()
       
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (event) {
    this.getList()
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