const csv = require('csv-parser');
const fs = require('fs');
const firstRow = "country,year,population\n"
const results = [];

fs.unlink('canada.txt', (e) => {
    if (e) {
      if (e.code === 'ENOENT') {
        console.error('File does not exist.');
      } else {
        throw e;
      }
    } else {
      console.log('File deleted!');
    }
  });

  fs.unlink('usa.txt', (e) => {
    if (e) {
      if (e.code === 'ENOENT') {
        console.error('File does not exist.');
      } else {
        throw e;
      }
    } else {
      console.log('File deleted!');
    }
  });

  fs.writeFile("canada.txt", firstRow, e => {
    if(e){
        console.error(e)
    }
})

fs.writeFile("usa.txt", firstRow, e => {
    if(e){
        console.error(e)
    }
})

fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (row) => results.push(row))
  .on('end', () => {
    for(let i = 0; i< results.length; i++)
    {
        let country = results[i].country
        let year = results[i].year
        let population = results[i].year
        row = country + "," + year + "," + population + "\n"

        if (country == "United States"){
            fs.appendFile("usa.txt", row, e => {
                if(e){
                    console.error(e)
                }
            })
        }
        if (country == "Canada"){
            fs.appendFile("canada.txt", row, e => {
                if(e){
                    console.error(e)
                }
            })
        }
    }
    console.log("done");
  });