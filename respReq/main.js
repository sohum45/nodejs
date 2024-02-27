const express = require('express')
const blog = require('./routes/blog')// /blog related routes will be handled by this file


const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
  console.log("Hey , it's a get request");
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log("Hey , it's a post request");
  res.send('Hello World! post')
})

app.put('/', (req, res) => {
  console.log("Hey , it's a put request");
  res.send('Hello World! put')
}).delete('/', (req, res) => {   // chaining
  console.log("Hey , it's a delete request");
  res.send('Hello World! delete')
})

// app.get("/index", (req, res) => {
//   console.log("Hey it's a index");
//   res.send('Hello World!index')
// })

 
app.get('/api', (req, res) => {
  res.json({a: 1, b:2 , c:3 , d:4 , name:["harry", "jerry"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})