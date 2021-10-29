var mqtt = require("mqtt")
var client = mqtt.connect("mqtt://localhost:18080")

// 连接后不断发布temp topic
client.on("connect", (e) => {
    console.log("success connect mqtt server");
    setInterval(() => {
        const t = Math.round(Math.random()*10+10).toString()
        client.publish("temp", t)
        console.log("send it" + t)
    }, 1000)
})
