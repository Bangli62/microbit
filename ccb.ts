
/**
* 使用這個文件來定義自訂的函式和積木。
* 進一步了解：https://makecode.microbit.org/blocks/custom
*/
enum AlarmSound {
    //% block="annoy"
    Annoy,
    //% block="alert"
    Alert
}
enum MyEnum {
    //% block="開"
    One,
    //% block="關"
    Two
}

/**
 * Custom blocks
 */
//% weight=20 color=#b30000 icon="\uf099" block="開發板""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n 描述它是整數 , eg: 5
     * @param s 它是字串, eg: "Hello"
     * @param e 它是列舉
     */
    //% block"設定LED燈 x %x y %y 狀態 %e"
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
    //% block="輸出長方形的長 %x  寬 %y"
    //% x.min=1 x.max=180 x.defl=2
    //% y.min=1 y.max=180 y.defl=2
    export function area (x: number,y:number): number {
        return x*y;
    }

    //% block="播放警告聲音 || of %sound for %duration ms"
    //% duration.shadow=timePicker //設定延遲參數是時間選擇
    //% expandableArgumentMode=toggle //toggle按一下全部展開,true 一次展開一個
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
