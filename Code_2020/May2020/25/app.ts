/**
 * @description Separate Out Sensor values From Delta Poll data
 */

let keys = [
  'device.2.lastSend',
  'device.2.lastReceive',
  'device.2.instance.0.commandClass.49.data.57',
  'device.2.instance.0.commandClass.50.data.0',
  'device.3.instance.0.commandClass.50.data.2',
  'device.3.instance.0.commandClass.49.data.5',
]
let deviceNodeId = {
  leackageDevice: 2,
  waterSensor: 3
}
let deltaDeviceFilters: any = {
  leackageDevice: {},
  waterSensor: {}
}
let filters: any = {
  leakageDevice: {
    Amount: '50.data.0',
    Temperature: '49.data.23',
    Flow: '49.data.56',
    Pressure: '49.data.57'
  },
  waterSensor: {
    Amount: '50.data.2',
    Temperature: '49.data.20',
    Flow: '49.data.5',
    Pressure: '49.data.0'
  }
}
for (let i = 0; i < keys.length; i++) {
  if (keys[i].indexOf('commandClass') >= 0) {
    if (keys[i].indexOf('device.2') >= 0) {
      for (let attribute in filters.leakageDevice) {
        if (attribute) {
          if (keys[i].indexOf(filters.leakageDevice[attribute]) >= 0) {
            deltaDeviceFilters.leackageDevice[attribute] = keys[i];
          }
        }
      }
      // console.log('Leackage Device',keys[i]);
    } else if (keys[i].indexOf('device.3') >= 0) {
      // console.log('Water Sensor', keys[i]);
      for (let attribute in filters.waterSensor) {
        if (attribute) {
          if (keys[i].indexOf(filters.waterSensor[attribute]) >= 0) {
            deltaDeviceFilters.waterSensor[attribute] = keys[i];
          }
        }
      }
    }
  }
}

console.log(deltaDeviceFilters);