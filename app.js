var fs = require('fs');

// Asynchronous
// Runs in the background while the further code runs
fs.readFile('readMe.txt', 'utf8', function(err, data) {
  console.log(data)
  fs.writeFile('writeMe.txt', data)
})

console.log('test');