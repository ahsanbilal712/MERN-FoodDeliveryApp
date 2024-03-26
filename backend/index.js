const express = require('express')
const app = express()
const port = 5001
const mongoDb = require("./db")
mongoDb();

app.get('/', (req, res) => {
  res.send('Hello Word!')
}) 
app.use(express.json())
app.use('/api', require('./Routes/CreateUser'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})