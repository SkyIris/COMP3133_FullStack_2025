const fs = require('fs')
//Read file async

fs.readFile("input.txt", (err,data) => {
    if(err)
    {
        console.log(err)
        return
    }
    console.log(data.toString())
})