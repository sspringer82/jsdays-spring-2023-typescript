(async () => {
function doSomethingAsync(): Promise<number> {
  return new Promise((resolve, reject) => {
    let value = 0;
    setTimeout(() => {
      console.log('c');
      value = 100 + Math.random();
      resolve(value);
    }, 1000)
  } )
}

console.log('a');

const result22 = await doSomethingAsync();
console.log(result22);

console.log('b');

  // doSomethingAsync().then((result) => {
  //   doSomethingAsync().then((result) => {
  //     doSomethingAsync().then((result) => {

  //     }) 
  //   })
  // }) 
  doSomethingAsync()
  .then((result) => {return doSomethingAsync()})
  .then(() => doSomethingAsync())
  .then(() => {})

})();


