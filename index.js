const fs=require('fs');
var express=require('express');
const app=express();
const path = require('path');


const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';


app.get('/',(req,res) => {
  const wififile=fs.readFileSync(path.join(__dirname,'./WifiNames.json'));
  const stats=JSON.parse(wififile);
  const randID= Math.floor(Math.random() * (209 - 1 + 1) + 1);
  const name = stats[randID];
  res.send(name.Name);
});


app.listen(PORT, () => {
  console.log(
    `Express Server started on Port ${PORT} | Environment : ${NODE_ENV}`
  );
});