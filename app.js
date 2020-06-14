const events = require('events');
const util = require('util');

var Person = function (name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

let james = new Person('James');
let mary = new Person('Mary');
let ryu = new Person('Ryu');

let people = [james, mary, ryu];

people.forEach(function(person) {
  person.on('speak', function(mssg) {
    console.log(`${person.name} said: ${mssg}`)
  }) 
})

james.emit('speak', 'hey dude')
ryu.emit('speak', 'I want curry')