// express is used for faster execution
const express = require('express')

//initialize express
const app = express();

// create end points/route handlers

app.get('/', (req,res)=>{
    res.sendFile('<h1>Hello World from express</h1>');
});

// Listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));