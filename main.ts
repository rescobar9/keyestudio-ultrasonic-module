let item = 0
led.enable(false)
basic.forever(function () {
    item = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    basic.showNumber(item)
    basic.pause(50)
    serial.writeValue("distance", item)
})
