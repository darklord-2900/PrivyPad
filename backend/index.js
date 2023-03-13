const connectToMongo=require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 3000

app.use(express.json())
// Available Routes 
app.use('/api/auth',require('./routes/auth'))
app.use('/api/auth',require('./routes/notes'))
//create a user using: POST "/api/auth". Doesn't require auth
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at: http://localhost:${port}`)
})
