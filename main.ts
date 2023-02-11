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
	
})
