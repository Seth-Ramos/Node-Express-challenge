const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.get('/', (req, res) =>{
  res.send('Hello!! add /home, /about, or /contact to find out more about me (or maybe smth else for suprise)')
})

app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname,'/home.html'));
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname,'/about.html'));
});

app.get('/contact', function(req, res){
    res.sendFile(path.join(__dirname,'/contact.html'));
});
  
app.get( '/unauthorized' ,(req, res,) => {
    res.status(401).send("401 unauthorized")
  });  


app.listen(port,function() {
  console.log(`Example app listening on port ${port}`)
});
