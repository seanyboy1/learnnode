

var http = require('http')
var urlString = process.argv[2]
http.get(urlString, function callback (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
})