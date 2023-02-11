function will_crush (dis_value: number) {
    return Tinybit.Ultrasonic_Car() <= dis_value
}
function set_color (color: number) {
    Tinybit.RGB_Car_Big(color);
}
function get_line(color: Tinybit.enLineState, pos: Tinybit.enPos)
{
    return Tinybit.Line_Sensor(pos, color)
}
basic.forever(function () {
    if (will_crush(45)) {
        set_color(1)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 60)
        basic.pause(300)
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 80, 0)
        basic.pause(100)
    } else {
        set_color(2)
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 80, 80)
    }
})
