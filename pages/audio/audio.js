// pages/audio/audio.js// audio.js
Page({
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
  },
  onLoad(options) {
    console.log(options)
    const eventChannel = this.getOpenerEventChannel()
    console.log('跳转过来的页面事件对象', eventChannel)
    eventChannel.emit('acceptDataFromOpenedPage', { msg: '来自子页面的消息' });
    eventChannel.emit('someEvent', { data: 'test' });
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('eventFromParent', function (data) {
      console.log('子页面接收到来自父页面的消息：-----', data)
    })
  },
  onReady: function (e) {
    this.setData({
      nbTitle: '音乐播放页面',
      nbLoading: true,
      nbFrontColor: '#ffffff',
      nbBackgroundColor: '#00ffff',
    })
    
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx2 = wx.createInnerAudioContext('myAudio')
    this.audioCtx2.src = this.data.src
    this.audioCtx2.onPlay((e) => {
      console.log('自定义播放器开始播放了', e)
    })
    this.audioCtx2.onError((e) => {
      console.log('自定义播放器开始播放了', e)
    })
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio15: function () {
    this.audioCtx.seek(15)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  handleError(err) {
    console.log('播放器加载出错了', err)
  },
})