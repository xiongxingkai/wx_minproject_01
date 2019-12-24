//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    x: 0,
    y: 0,
    countries: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    isChecked: false,
    bgTextStyle: 'light',
    scrollTop: '200rpx',
    bgColor: '#ff0000',
    bgColorTop: '#00ff00',
    bgColorBottom: '#0000ff',
    nbTitle: '标题',
    nbLoading: false,
    nbFrontColor: '#ffffff',
    nbBackgroundColor: '#178AD0',
  },
  onLoad: function(options) {
    console.log('logs页面加载完成', options)
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShow(options) {
    console.log('logs页面显示', options)
  },
  onPageScroll(obj) {
    console.log('logs页面滚动', obj)
  },
  onTabItemTap(obj) {
    console.log('logs页面被点中', obj)
  },
  onResize(res) {
    console.log('手机屏幕方向改变', res)
  },
  handleImageLoad(res) {
    console.log('图片加载完成', res)
  },
  tap: function (e) {
    this.setData({
      x: 30,
      y: 30
    });
  },
  onChange: function (e) {
    console.log(e.detail)
  },
  onScale: function (e) {
    console.log(e.detail)
  },
  handleContact: function (e) {
    console.log('打开模拟回话窗口', e)
  },
  handlePhoneNumber: function (e) {
    console.log('获取用户电话号码', e)
  },
  handleError: function (e) {
    console.log('出现错误异常', e)
  },
  handleGetUserInfo: function (e) {
    console.log('获取用户信息', e)
  },
  handleLaunchApp: function (e) {
    console.log('打开app', e)
  },
  onShareAppMessage(obj) {
    console.log('分享页面', obj, this.route)
    return {
      title: '分享到logs页面',
      path: this.route
    }
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value, e)
  },
  checkedIsChecked() {
    console.log('是否选中了 ', this.data.isChecked)
  },
})