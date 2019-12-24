//app.js
App({
  onShow(options) {
    console.log('小程序初次加载参数：', options)
  },
  onLaunch: function (options) {
    console.log('小程序初始化参数：', options)
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('登录成功', res)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log('成功获取用户设置', res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log('获取用户信息成功', res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onPageNotFound(e) {
    console.log('跳转的页面不存在', e)
  },
  globalData: {
    userInfo: null
  },
})