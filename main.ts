input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("B")
    basic.showString("B")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("L")
    basic.showString("L")
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("S")
    basic.showString("S")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    if (receivedString == "F") {
        for (let i = 0; i <= 255; i++) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, i)
        }
        basic.showString(receivedString)
    } else if (receivedString == "B") {
        for (let i = 0; i <= 255; i++) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, i)
        }
        basic.showString(receivedString)
    } else if (receivedString == "R") {
        for (let i = 0; i <= 255; i++) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, i)
        }
        basic.showString(receivedString)
    } else if (receivedString == "L") {
        for (let i = 0; i <= 255; i++) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, i)
        }
        basic.showString(receivedString)
    } else if (receivedString == "S") {
        for (let i = 0; i <= 255; i++) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, i)
        }
        basic.showString(receivedString)
    } else if (false) {
    	
    } else if (false) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("reset")
    basic.showString("reset")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("R")
    basic.showString("R")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("F")
    basic.showString("F")
})
basic.showIcon(IconNames.Heart)
radio.setGroup(236)
basic.forever(function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
})
