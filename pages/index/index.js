//index.js
//获取应用实例
const util = require('../../utils/util.js')
const app = getApp()
const pageData = {}
for (var i = 1; i < 5; ++i) {
  (function (index) {
    pageData[`slider${index}change`] = function (e) {
      console.log(`slider${index}发生change事件，携带值为`, e.detail.value)
    }
  })(i);
}
Page({
  ...pageData,
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    height: 20,
    focus: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    console.log('页面加载完成...', options)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow (options) {
    console.log('页面显示', options)
  },
  onShareAppMessage (obj) {
    console.log('分享页面', obj, this.route)
    return {
      title: '分享到logs页面',
      path: this.route
    }
  },
  handleStartLoading() {
    wx.startPullDownRefresh({
      
    })
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 3000)
  },
  onTabItemTap(obj) {
    console.log('首页被点中', obj)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goToEditPage() {
    wx.navigateTo({
      url: '/pages/editor/editor',
    })
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },
  bindFormSubmit: function (e) {
    console.log(e.detail.value.textarea, e)
  },
  getSystemInfo() {
    // let info =wx.getSystemInfoSync()
    // console.log('获取到的系统信息为：', info)
    wx.getSystemInfo({
      success: function(res) {
        console.log('获取到的系统信息为：', res)
      },
    })
  },
  getLaunchInfo() {
    let opt = wx.getLaunchOptionsSync()
    console.log('获取到的小程序登录信息为：', opt)
  },
  toUnkenowPage() {
    wx.navigateTo({
      url: '/pages/unkonw/know',
    })
  },
  naviagteToAudio() {
    wx.navigateTo({
      url: '/pages/audio/audio?name=xxk&age=30&salary=5120000000000',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log('父页面接收到子页面传过来的数据----------', data)
        },
        someEvent: function (data) {
          console.log('父页面接收到了数据============', data)
        }
      },
      success(res) {
        console.log('跳转成功', res)
        res.eventChannel.emit('eventFromParent', {msg: '我是父页面传过来的数据'})
      },
    })
  },
  showToast() {
    wx.showToast({
      title: '家里嘎啦果的成功',
      image: '/images/tx.jpg',
      icon: 'loading',
      mask: true,
      duration: 10000
    })
  },
  showModal() {
    wx.showModal({
      title: 'gear个提示',
      content: '这是一个模态弹窗个人股然后后哈哈就安静就了噶寄过来哥啊韩国人嘎哈火热哈',
      cancelText: '取消选中',
      cancelColor: '#f00',
      confirmText: '确认选中',
      confirmColor: '#0f0',
      success(res) {
        console.log('操作模态框', res)
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  showLoading() {
    wx.showLoading({
      title: '加载中',
      mask: true
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  showActionSheet() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      itemColor: '#f0f',
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  showNavigationBarLoading() {
    wx.showNavigationBarLoading({
      success(res) {
        console.log('显示导航栏加载动画', res)
        setTimeout(() => {
          wx.hideNavigationBarLoading()
        }, 3000)
      },
      fail(res) {
        console.log('导航栏加载动画失败', res)
      }
    })
  },
  setNavigationBarTitle() {
    wx.setNavigationBarTitle({
      title: '动态设置导航栏标题'
    })
  },
  setNavigationBarColor() {
    const color = util.getRandomColor()
    console.log('随机颜色', color)
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: color,
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },
  showTabBarRedDot() {
    wx.showTabBarRedDot({
      index: 1,
      success(res){
        setTimeout(() => {
          wx.hideTabBarRedDot({
            index: 1,
          })
        }, 3000)
      }
    })
  },
  hideTabBar() {
    wx.hideTabBar({
      animation: true,
      success(res){
        setTimeout(() => {
          wx.showTabBar({
            animation: true,
          })
        }, 2000)
      }
    })
  },
  setTabBarStyle() {
    wx.setTabBarStyle({
      color: '#FFFF00',
      selectedColor: '#2de1de',
      backgroundColor: '#c5552d',
      borderStyle: 'white' // tabBar上边框的颜色， 仅支持 black/white
    })
  },
  setTabBarItem() {
    wx.setTabBarItem({
      index: 1,
      text: '多媒体',
      iconPath: '/images/person.png',
      selectedIconPath: '/images/person.png'
    })
  },
  setTabBarBadge() {
    wx.setTabBarBadge({
      index: 2,
      text: '999',
      success(){
        setTimeout(() =>{
          wx.removeTabBarBadge({
            index: 2,
          })
        }, 3000)
      }
    })
  },
  loadFontFace() {
    wx.loadFontFace({
      family: 'Bitstream Vera Serif Bold',
      source: 'url("https://sungd.github.io/Pacifico.ttf")',
      success: console.log
    })
  },
})
