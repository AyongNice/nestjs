/**
 * 这是阿勇的chaGpt 不用科学上网就可以用  http://ayongnice.love/chatgpt/
 * 关注微信公众号 阿勇学前端
 * B站的小萌新 多多关照
 */
const norte = (tarter: Function) => {
    tarter.prototype.name = '阿勇'
}
/**
 * class注解
 * @param tarter
 */

/**
 * 属性注解
 * @param defaultValue
 */
const pammasNote = (defaultValue: string) => {
    return function (tarter: Object, key: string | symbol) {
        Object.defineProperty(tarter, key, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: defaultValue
        })
    }
}

/**
 *  方法注解
 *
 */
const logMethh = (tarter: Object, key: string | symbol, descriptor: PropertyDescriptor): void => {
    const orig = descriptor.value;
    console.log("orig", orig);

    descriptor.value = function (...args: any[]) {
        console.log(String(key))
        return orig.apply(this, args)
    }
}
const logMethhTwo = (parms: string): MethodDecorator => {
    return function (tarter: Object, key: string | symbol, descriptor: PropertyDescriptor) {
        const orig = descriptor.value;
        console.log("parms", parms);

        descriptor.value = function (...args: any[]) {
            console.log(String(key))
            return orig.apply(this, args)
        }
    }

}


class TestNote {

    @pammasNote('ayong学前端')
    name: string | undefined;

    constructor() {
    }

    @logMethh
    menthg() {

    }

    @logMethhTwo('关注微信公众号 阿勇学前端')
    menthgTwo() {

    }

}

const testNote: TestNote = new TestNote();

testNote.menthgTwo()
