console.log("After Life");
setTimeout(function() {
  console.log("3 seconds passed")
},3000);

let time = 0;
let timer = setInterval(function(){
  time += 2;
  console.log(time + ' seconds passed');
  if (time > 5) {
    clearInterval(timer);
  }
}, 2000);

console.log(__dirname)
console.log(__filename)

function sayHi() {
  console.log("Hi !!!")
}

sayHi()

let sayBye = function() {
  console.log("Bye !!!");
}

let callBye = function (bye) {
  bye();
}

callBye(sayBye);