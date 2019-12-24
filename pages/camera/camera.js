// pages/camera/camera.js
Page({
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
  },
  onLoad() {
    this.setData({
      nbTitle: '多媒体页面',
      nbLoading: true,
      nbFrontColor: '#ffffff',
      nbBackgroundColor: '#0000ff',
    })
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log('拍照成功了', res)
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  handleScanCode1(e){
    console.log('扫码成功后', e)
    wx.navigateTo({
      url: 'pages/logs/logs',
      // url: e.detail.result,
      success(res){
        console.log('跳转进入扫码对应的页面', res)
      }
    })
  },
  handleScanCode2(){
    wx.scanCode({
      onlyFromCamera: true, // 不允许扫描手机相册二维码
      success(res) {
        console.log('跳转进入扫码对应的页面', res)
        wx.navigateTo({
          url: '/pages/audio/audio',
          success(){
            console.log('跳转页面成功了')
          },
          fail(e){
            console.log('跳转页面出错了', e)
          },
        })
      }
    })
  },
  error(e) {
    console.log(e)
  }
})