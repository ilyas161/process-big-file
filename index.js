const fs = require("fs");

const data = fs.readFile("free_company_dataset.csv", "utf-8", (err, data) => {
    if(err) {
        console.error(err.stack || err);
        process.exit(err.code);
    }
    console.log(data);
});
