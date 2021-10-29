var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:18080')

// 连接后订阅 c2 topic
client.on('connect', (e) => {
  console.log('success connect mqtt server')
  client.subscribe('c2', function (err) {
    console.log('subscribe c2 topic')
  })
})

// 监听订阅的message
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic + ':\t' + message.toString())
})
