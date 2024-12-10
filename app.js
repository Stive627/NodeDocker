const express = require('express')
const app = express()
app.get('/', (req, res)=>res.status(200).send('The app is working'))
app.listen(3000, ()=>console.log(`The server is running at http://localhost:3000`))