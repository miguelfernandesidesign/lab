const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/contactos.html')
})

app.post('/', (req, res)=>{
    console.log(req.body)
})

app.listen(PORT, ()=>{
    console.log('Server running on port ${PORT}')
})