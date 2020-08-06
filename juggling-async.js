

const http = require('http')
const bl = require('bl')
var x 

for (x = 2; x < 5; x++) {
  http.get(process.argv[x], function (res) {
    res.pipe(bl(function (err, data) {
      if (err) { return console.error(err) }
      console.log(data.toString())
    }))
  })
}

