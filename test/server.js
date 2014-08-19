var huey = require('../')
var fs = require('fs')

fs.readFile(__dirname + '/images/astronaut.jpg', function(err, buf){
  require('./shared')(huey, {
    trad: __dirname + '/images/trad.jpg',
    jerry: __dirname + '/images/jerry.jpg',
    astronaut: buf
  })
})
