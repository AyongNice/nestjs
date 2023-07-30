/**
 * Nest Js
 * 可扩展的Node.js应用程序的框架
 * TypeScript（或纯JavaScript）并结合了面向对象编程
 * DI依赖注入  springMVC模式
 */

//sudo npm install -g typescript

//sudo npm install -g ts-node
//DI依赖注入

class Ayong1 {
    name: string;

    constructor(name: string) {
        this.name = name
    }
}

class Ayong6 {
    name: string;

    constructor(name: string) {
        this.name = new Ayong1('name').name
        console.log(this.name)
    }
}

class Container {
    map: any;

    constructor() {
        this.map = {};
    }

    protect(key: string, obj: any): void {
        this.map[key] = obj;
    }

    get(key: string) {
        return this.map[key]
    }
}
const  map = new Container();
map.protect('ayong',new Ayong1('ayong啪啪啪'));
map.protect('amei',new Ayong1('ameiHHHH'));

class Prouse{
    ayong:any
    amei:any
    constructor(obj:Container) {
        this.ayong=map.get('ayong');
        this.amei=map.get('amei');

    }
}
const  rouse = new Prouse(map)
console.log(rouse.ayong)
