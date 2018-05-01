const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  res.send({
    intro: 'Hello world'
  })
});

app.listen(5000);