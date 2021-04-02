const express = require('express')
const app = express();
const port = 3000;

app.use(express.json());

require('./database'); // Database Connection
const ClientsRoute = require('./routes/client.route')

app.use('/', ClientsRoute)

app.get('/', (req, res) => {
  res.send('Seventh Lab, Web Design II (Bus Services)')
});

app.listen(port, () => {
  console.log(`Listening on port ~> ${port}`)
});

