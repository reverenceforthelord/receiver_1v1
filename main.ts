radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        acc_x = value
    }
    if (name == "y") {
        acc_y = value
    }
})
let acc_y = 0
let acc_x = 0
radio.setGroup(1)
let right_angle = 90
let angle_range = 30
let angle = right_angle
basic.forever(function () {
    angle = right_angle + pins.map(
    acc_x,
    -1024,
    1023,
    0 - angle_range,
    angle_range
    )
    pins.servoWritePin(AnalogPin.P8, angle)
})
