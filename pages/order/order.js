// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [
      { id: '001', name: '宫保鸡丁', price: 38 },
      { id: '002', name: '红烧猪蹄', price: 88 },
      { id: '003', name: '辣椒炒肉', price: 38 },
      { id: '004', name: '红烧草鱼', price: 68 },
      { id: '005', name: '莲藕排骨汤', price: 58 },
      { id: '006', name: '清炒红菜心', price: 28 },
      { id: '007', name: '小炒黄牛肉', price: 88 },
      { id: '008', name: '油炸基围虾', price: 98 }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  onTabItemTap(obj) {
    console.log('订单页面被点中', obj)
  }
})