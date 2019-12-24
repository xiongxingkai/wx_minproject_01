const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getRandomNum(min, max) {
  if (min > max) {
    [min,max]=[max,min]
  }
  return Math.floor(Math.random()*(max-min)+min)
}

function getRandomColor() {
  let arr = Array(3).fill(1).map(() => getRandomNum(0, 256).toString(16)).map(item => item.length>1? item: '0'+item)
  return '#' + arr.join('')
}
function getRandomRGBColor() {
  return 'rgba(' + getRandomNum(0, 256) + ',' + getRandomNum(0, 256) + ',' + getRandomNum(0, 256) + ',' + Math.random() + ')'
}

module.exports = {
  formatTime: formatTime,
  getRandomColor: getRandomColor,
  getRandomRGBColor: getRandomRGBColor,
}
