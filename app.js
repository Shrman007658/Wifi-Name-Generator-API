const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
app
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    res.status(200).render('index');
  })
  .get('/api', (req, res) => {
    const wififile = fs.readFileSync(path.join(__dirname, './public/WifiNames.json'));
    const stats = JSON.parse(wififile);
    const randID = Math.floor(Math.random() * (209 - 1 + 1) + 1);
    const name = stats[randID];
    console.log("name : " + name.Name);
    res.status(200).json({ name: name.Name })
  });

app.listen(PORT, () => {
  console.log(`Express Server started on Port ${PORT}`);
});