const express = require('express')
const app = express();
const port = 3000;

require('./database') // Database Connection

app.get('/', (req, res) => {
  res.send('Seventh Lab, Web Design II (Bus Services)')
});



app.listen(port, () => {
  console.log(`Listening on port ~> ${port}`)
});

