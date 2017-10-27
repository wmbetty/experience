// 初始化蓝牙适配器
function openBluetoothAdapter() {
  if (wx.openBluetoothAdapter) {
    wx.openBluetoothAdapter({
      success: function (res) {
        console.log(res)
      },
      fail: function (e) {
          console.log(e)
      }
    })
  } else {
    // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
    wx.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    })
  }
}
// 关闭蓝牙模块
function closeBluetoothAdapter() {
  wx.closeBluetoothAdapter({
    success: function (res) {
      console.log(res)
    }
  })
}
// 获取本机蓝牙适配器状态
function getBluetoothAdapterState() {
  wx.getBluetoothAdapterState({
    success: function (res) {
      console.log(res)
    }
  })
}
// 监听蓝牙适配器状态变化事件 CALLBACK
function onBluetoothAdapterStateChange() {
  wx.onBluetoothAdapterStateChange(function (res) {
    console.log('adapterState changed, now is', res)
  })
}
// 开始搜寻附近的蓝牙外围设备。注意，该操作比较耗费系统资源，请在搜索并连接到设备后调用 stop 方法停止搜索。
function startBluetoothDevicesDiscovery() {
  // 以微信硬件平台的蓝牙智能灯为例，主服务的 UUID 是 FEE7。传入这个参数，只搜索主服务 UUID 为 FEE7 的设备
  wx.startBluetoothDevicesDiscovery({
    services: ['FEE7'],
    success: function (res) {
      console.log(res)
    }
  })
}
// 停止搜寻附近的蓝牙外围设备。请在确保找到需要连接的设备后调用该方法停止搜索。
function stopBluetoothDevicesDiscovery() {
  wx.stopBluetoothDevicesDiscovery({
    success: function (res) {
      console.log(res)
    }
  })
}
// 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备
function getBluetoothDevices() {
  wx.getBluetoothDevices({
    success: function (res) {
      console.log(res)
    }
  })
}
// 监听寻找到新设备的事件
function onBluetoothDeviceFound() {
  wx.onBluetoothDeviceFound(function (devices) {
    console.log('new device list has founded')
    console.dir(devices)
  })
}
// 根据 uuid 获取处于已连接状态的设备
function getConnectedBluetoothDevices() {
  wx.getConnectedBluetoothDevices({
    success: function (res) {
      console.log(res)
    }
  })
}
// 获取蓝牙设备所有 service（服务）
function getBLEDeviceServices(deviceId) {
  wx.getBLEDeviceServices({
    // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
    deviceId: deviceId,
    success: function (res) {
      console.log('device services:', res.services)
    }
  })
}
// 获取蓝牙设备所有 characteristic（特征值）
function getBLEDeviceCharacteristics(deviceId, serviceId) {
  wx.getBLEDeviceCharacteristics({
    // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
    deviceId: deviceId,
    // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
    serviceId: serviceId,
    success: function (res) {
      console.log('device getBLEDeviceCharacteristics:', res.characteristics)
    }
  })
}

module.exports = {
  openBluetoothAdapter: openBluetoothAdapter,
  closeBluetoothAdapter: closeBluetoothAdapter,
  getBluetoothAdapterState: getBluetoothAdapterState,
  onBluetoothAdapterStateChange: onBluetoothAdapterStateChange,
  startBluetoothDevicesDiscovery: startBluetoothDevicesDiscovery,
  stopBluetoothDevicesDiscovery: stopBluetoothDevicesDiscovery,
  getBluetoothDevices: getBluetoothDevices,
  onBluetoothDeviceFound: onBluetoothDeviceFound,
  getConnectedBluetoothDevices: getConnectedBluetoothDevices,
  getBLEDeviceServices: getBLEDeviceServices,
  getBLEDeviceCharacteristics: getBLEDeviceCharacteristics
}