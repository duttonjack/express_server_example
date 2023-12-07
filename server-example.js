// 3 Main Parts of basic ExpressJS Server



// Set up dependencies
const express = require('express');
const app = express();



// handle request with routes
app.get('/hello', function(req, res){
    res.send('hi there!')
})

app.get("/goodbye", function (req, res){
    res.send("Goodbye")
})


// listen on a port
app.listen(3000, function() {
    console.log('server is running')
})