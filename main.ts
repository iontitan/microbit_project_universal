for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # # . . #
        . . . . #
        . . . . .
        # . . . .
        # . . # #
        `)
    basic.showLeds(`
        . # # . .
        . . . . #
        # . . . #
        # . . . .
        . . # # .
        `)
    basic.showLeds(`
        . . # # .
        # . . . .
        # . . . #
        . . . . #
        . # # . .
        `)
    basic.showLeds(`
        # . . # #
        # . . . .
        . . . . .
        . . . . #
        # # . . #
        `)
}
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
basic.showString(control.deviceName())
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    # # # # #
    `)
basic.showString("" + (control.deviceSerialNumber()))
