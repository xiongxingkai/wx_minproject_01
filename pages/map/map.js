// pages/map/map.js
Page({
  data: {
    markersArray: [
      {
        iconPath: "/images/person.png",
        id: 0,
        latitude: 23.05229928411434,
        longitude: 113.33452109999998,
        rotate: 30,
        alpha: 0.35,
        width: 30,
        height: 30,
      },
      {
        iconPath: "/images/upload_01.png",
        id: 1,
        latitude: 23.25229928411434,
        longitude: 113.30452109999998,
        rotate: 50,
        alpha: 0.35,
        width: 30,
        height: 30,
      },
    ],
    polylineArray: [
      {
        points: [
          {
            latitude: 23.15229928411434,
            longitude: 105.30452109999998
          },
          {
            latitude: 25.15229928411434,
            longitude: 113.32452109999998
          },
          {
            latitude: 28.15829928411434,
            longitude: 115.33452109999998
          },
          {
            latitude: 32.25829928411434,
            longitude: 119.39452109999998
          },
        ],
        color: '#ffff00',
        width: 5,
        borderColor: '#0000FF',
        borderWidth: 1
      },
      {
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
            longitude: 115.0941950082779,                    // 上高万象广场经纬度 longitude: 114.927978515625  latitude: 28.239069158099046
            latitude: 28.31599403909564              // 泗溪车站经纬度 longitude: 115.0941950082779  latitude: 28.31599403909564
        }],
        color: "#FF0000DD",
        width: 5,
        dottedLine: true
      }
    ],
    polygonsArray: [
      {
        points: [
          {
            latitude: 25.15829928411434,
            longitude: 107.33452109999998
          },
          {
            latitude: 26.15629928411434,
            longitude: 118.30452109999998
          },
          {
            latitude: 32.18829928411434,
            longitude: 118.33652109999998
          },
          {
            latitude: 32.27829928411434,
            longitude: 107.32452109999998
          },
        ],
        strokeWidth: 5,
        strokeColor: '#07C160'
      },
      {
        points: [
          {
            latitude: 27.15829928411434,
            longitude: 110.33452109999998
          },
          {
            latitude: 27.15629928411434,
            longitude: 118.30452109999998
          },
          {
            latitude: 29.18829928411434,
            longitude: 118.33652109999998
          },
          {
            latitude: 29.27829928411434,
            longitude: 110.32452109999998
          },
        ],
        strokeWidth: 5,
        strokeColor: '#ff00ff'
      }
    ]
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res)
      }
    })
  },
  moveToLocation: function () {
    // this.mapCtx.moveToLocation()
    this.mapCtx.moveToLocation({
      longitude: 115.0941950082779,
      latitude: 28.31599403909564
    })
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      rotate: 50,
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  },
  getRegion(){
    this.mapCtx.getRegion({
      success(res){
        console.log('获取视野成功', res)
      }
    })
  },
  handleRegionChange(res) {
    console.log('监听到地图视野发生变化了', res)
  },
  handleMapTap(res) {
    console.log('地图被点击了', res)
  },
  getRotate(){
    this.mapCtx.getRotate({
      success(res){
        console.log('获取当前的旋转角度', res)
      }
    })
  },
  getScale(){
    this.mapCtx.getScale({
      success(res){
        console.log('获取当前的缩放比', res)
      }
    })
  },
  getSkew(){
    this.mapCtx.getSkew({
      success(res){
        console.log('获取当前的倾斜角度', res)
      }
    })
  },
  chooseImage(){
    wx.chooseImage({
      success(res) {
        console.log('选择图片完成后', res)
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success(res) {
            console.log('获取图片信息后', res)
          }
        })
      }
    })
  },
  chooseMessageFile(){
    wx.chooseMessageFile({
      count: 10,
      type: 'image',
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        console.log('选择文件完成之后', res)
      }
    })
  },
  chooseVideo(){
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        console.log('选择视频完成后', res)
      }
    })
  },
})