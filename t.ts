const readline = require("readline")

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

input.question("Enter sth: ", (text: string)=>{
  console.log(text)
  input.close()
})