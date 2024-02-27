const express = require('express')  // importing express
const app = express()
const port = 3000

app.use(express.static('public'))

//handler syntax: app.get / app.post / app.put / app.delete(path , handler)
app.get('/', (req, res) => {
  res.send('Hello World! hi dear <h1>Su</h1>')
})

app.get('/about', (req, res) => {
    res.send('contact me')
  })
app.get('/about us', (req, res) => {
    res.send('Hello about us')
  })
// app.get('/blog', (req, res) => {
//     res.send('Hello guysss chaiii pilo more')
//   })    
//   app.get('/mail', (req, res) => {
//     res.send('Chalo mail kre')
//   })   

app.get('/blog/:slug/', (req, res) => {
  // logic to fetch slug from db
  // For URL https://jubilant-garbanzo-9795x546vvwv3p7x-3000.app.github.dev/?mode=dark&region=in
    console.log(req.params);// will output {slug : 'intro-to-padosi'}
    console.log(req.query);//  will output {mode : 'dark' , region : 'India'}
    res.send(`${req.params.slug}`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})