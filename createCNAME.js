const fs = require('fs');

const file =  fs.writeFile('./dist/CNAME', "gusbev.com", () => {
    console.log("CNAME created");
});