import axios, {AxiosResponse} from 'axios';

const Get = (url: string) => {
    return function (target: any, key: string | symbol, descriptor: PropertyDescriptor) {
        const orig:Function = descriptor.value;
        descriptor.value = async function (...args: any[]):Promise<void> {
            try{
                const res:AxiosResponse<any,any> = await axios.get(url);
                orig.call(this,res,...args)
            }catch (e) {
                orig.call(this,e,...args)
            }

        };
    };
};

class AxiosGet {
    constructor() {}
    @Get('http://jsonplaceholder.typicode.com/posts')
    getData(res?:AxiosResponse<any,any>,err?:Error): void {
        console.log(res)
        console.log(err)
    }
}

const axonsTest = new AxiosGet();
axonsTest.getData();
