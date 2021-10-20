
/**
* �ϥγo�Ӥ��өw�q�ۭq���禡�M�n��C
* �i�@�B�F�ѡGhttps://makecode.microbit.org/blocks/custom
*/
enum AlarmSound {
    //% block="annoy"
    Annoy,
    //% block="alert"
    Alert
}
enum MyEnum {
    //% block="�}"
    One,
    //% block="��"
    Two
}

/**
 * Custom blocks
 */
//% weight=20 color=#b30000 icon="\uf099" block="�}�o�O""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n �y�z���O��� , eg: 5
     * @param s ���O�r��, eg: "Hello"
     * @param e ���O�C�|
     */
    //% block"�]�wLED�O x %x y %y ���A %e"
    export function foo(x: number, y: number, e: MyEnum): void {
        if (e==MyEnum.One){
        led.plot(x,y)
        }else{
            led.unplot(x,y)
        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="��X����Ϊ��� %x  �e %y"
    //% x.min=1 x.max=180 x.defl=2
    //% y.min=1 y.max=180 y.defl=2
    export function area (x: number,y:number): number {
        return x*y;
    }

    //% block="����ĵ�i�n�� || of %sound for %duration ms"
    //% duration.shadow=timePicker //�]�w����ѼƬO�ɶ����
    //% expandableArgumentMode=toggle //toggle���@�U�����i�},true �@���i�}�@��
    export function alarmSound(sound?: AlarmSound, duration: number = 160) {
        if (sound == AlarmSound.Annoy)
            music.playTone(400, duration);
        else {
            music.playTone(261, duration);

            music.playTone(298, duration);
            music.playTone(331, duration);
        }
    }

}
