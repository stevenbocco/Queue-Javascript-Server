let fs = require('fs');
let object = {name: 'Aplex'};

fs.readFile('C:/Users/Alexander/Desktop/javascript upggift XMLHttpRequest Alexander Dahlberg/memes.txt', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
  console.log(JSON.parse(data).name);
});


/*
fs.writeFile('C:/Users/Alexander/Desktop/javascript upggift XMLHttpRequest Alexander Dahlberg/memes.txt', JSON.stringify(object), function read(err, data) {
    if (err) {
        throw err;
    }
  console.log('ok');
});
*/
