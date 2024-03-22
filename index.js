//imports
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')


//middleware to make connection to frontend site
app.use(cors());
app.send(express.json());



app.get('/', (req, res) => {
 res.send('Hello World!')
})


app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})