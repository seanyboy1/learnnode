const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files){

    if (err) return console.error(err)

    files
        .filter(file => path.extname(file) === ext)
        .forEach(file => console.log(file))

 
})