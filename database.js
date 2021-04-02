/* Mongoose Import  */
const mongoose = require('mongoose');

/* Set Mongoose Default Configurations  */
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const MONGODB_URI = 'mongodb://localhost/my_bus_business'
/* Mongoose Database Connection  */
mongoose.connect(MONGODB_URI).then(() => console.log('Connected to my_bus_business DB'))
  .catch((error) => console.error(error));
