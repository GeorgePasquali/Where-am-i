var express = require('express');
var app = express();
var messages = [{text:'E otkachen', owner:'Dimo'},
                {text:'e lut', owner:'Niko'}, 
                 {text:'E gotin pich', owner:'Venci'},
                  {text:'E nai krasiviq', owner:'Jorkata'}];

app.use((req,res,next) => { // this handles requests from different url
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/messages', (req, res)=>{
    console.log("get invoked");
    res.json(messages);
})


app.listen(1234);