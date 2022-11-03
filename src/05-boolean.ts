(()=>{
let isEnable = true;
// isEnable = 'as';
// isEnable = 123e12;
isEnable = false;
console.log(isEnable);

let isNew: boolean = true;
console.log(isNew);

const random = Math.random();
console.log('random', random);
isNew = random > 0.5 ? true : false;
console.log('isNew',isNew);
})()
