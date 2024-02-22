import fs from "fs/promises"

let a = await fs.readFile("harry2.txt")
let b = await fs.writeFile("harry2.txt" , "\n\n\n\n\n\t this is an amazing promise")
let c = await fs.appendFile("harry2.txt" , "\n\n\n\n\n\t this is an amazing promise")
console.log(a.toString(), c);
