var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:18080')

// 连接后不断发布temp topic
client.on('connect', (e) => {
  console.log('success connect mqtt server')
  client.publish('c2', 'c2事件')
  console.log('send it test')
})
