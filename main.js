const fs =require("fs")
console.log("Starting");
// using callback hell write then read then again write

fs.writeFile("harry2.txt" , "Harry is a best coder", ()=>{
    console.log("done"); // scheduled to display ; once text file is generated then it prints done
    fs.readFile("harry2.text", (error,data)=>{
        console.log(error , data);
    })
})

fs.appendFile("harry2.txt" , " harrybot" , (e,d)=>{
    console.log(d);
})
console.log("ending");
