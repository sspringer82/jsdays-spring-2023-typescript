// TS 4
// function log(severety: string) {
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     descriptor.enumerable = value;
//   };
// }


function log(originalMethod: any, _context: any) {
  return async function(this: any, ...args: any[]) {
    console.log('calling method')
    const result = await originalMethod.call(this, ...args);
    console.log('after call');
    return result;
  }

}

class Person2 {
  @log
  async greet(name: string) {
    console.log(`Hello ${name}`);
  }
}

const p = new Person2();
p.greet('Paula');