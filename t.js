var readline = require("readline");
var input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
input.question("Enter sth: ", function (text) {
    console.log(text);
    input.close();
});
