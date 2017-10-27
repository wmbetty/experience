const _Promise = require('./bluebird');
// const qqMapWx = require('./qqmap-wx-jssdk.min');
// const qqMap = new qqMapWx({key:'CGTBZ-J6YWG-RXDQ7-IUKHX-2LXDS-HGBVJ'});
// const province = require('./province');
// const city = require('./city');
// const area = require('./area');
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
//
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/*设置缓存*/
function setStorage(key, val, sync = true) {
  if (sync) {
    wx.setStorageSync(key, val)
  } else {
    wx.setStorage({
      key: key,
      data: val
    });
  }
}
/*在缓存获取数据*/
function getStorage(key, cb, sync = true) {
  if (sync) {
    var value = wx.getStorageSync(key);
    if (value) {
      return value;
    } else {
      return false;
    }
  } else {
    wx.getStorage({
      key: key,
      success: function (res) {
        if (cb && typeof cb == 'function') {
          cb(res.data);
        }
      },
      fail: function () {
        return false;
      }
    })
  }
}
function Throttle() {
  var time = null;
  return function (fn, timerout = 500) {
    clearTimeout(time);
    time = setTimeout(() => {
      fn()
    }, timerout)
  }
}
//移除缓存
function removeStorage(key, cb, sync = true) {
  if (sync) {
    wx.removeStorageSync(key);
  } else {
    wx.removeStorage({
      key: key,
      success: function (res) {
        if (cb && typeof cb == 'function') {
          cb(res.data);
        }
      }
    })
  }
}
//弹提示框
function alert(obj = {}, showCancel = false) {
  return new _Promise((reslove, reject) => {
    wx.showModal({
      title: obj.title ? obj.title : '',
      content: obj.content ? obj.content : '',
      showCancel: showCancel,
      cancelText: obj.cancelText ? obj.cancelText : '取消',
      confirmText: obj.confirmText ? obj.confirmText : '确定',
      cancelColor: obj.cancelColor ? obj.cancelColor : '#000000',
      confirmColor: obj.confirmColor ? obj.confirmColor : '#3CC51F',
      success: function (res) {
        if (res.confirm) {
          reslove({ confirm: true });
        } else {
          reslove({ confirm: false })
        }
      }
    })
  });
}
//加载
function showLoading(title = '加载中') {
  var time = null;
  if (wx.showLoading) {
    wx.showLoading({
      title: title,
    });
  } else {
    wx.showToast({
      title: title,
      icon: 'loading',
      duration: 1000000
    });
    clearInterval(time);
    time = setInterval(function () {
      // alert({content:'再一次 showLoading'});
      wx.showToast({
        title: title,
        icon: 'loading',
        duration: 1000000
      });
    }, 9000);
  }
  return time;
}

//关闭加载
function hiddenLoading(time) {
  if (wx.showLoading) {
    wx.hideLoading();
  } else {
    clearInterval(time);
    wx.hideToast();
  }
}

module.exports = {
  formatTime: formatTime,
  setStorage: setStorage,
  getStorage: getStorage,
  removeStorage: removeStorage,
  alert: alert,
  Throttle: Throttle,
  showLoading: showLoading,
  hiddenLoading: hiddenLoading
}
