const http = require('http');
const fs=require('fs');
const hostname = '127.0.0.1';
const port = 3000;
var express=require('express');
const app=express();
const path = require('path');


const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
app.set('port', PORT);
app.set('env', NODE_ENV);


app.get('/',function(req,res)
{
  const wififile=fs.readFileSync(path.join(__dirname,'./WifiNames.json'));
  const stats=JSON.parse(wififile);
  const randID= Math.floor(Math.random() * (209 - 1 + 1) + 1);
  const name=stats.find(namewifi=>namewifi.ID==randID);
  res.send(name.Name);
});


app.listen(PORT, () => {
  console.log(
    `Express Server started on Port ${app.get(
      'port'
    )} | Environment : ${app.get('env')}`
  );
});