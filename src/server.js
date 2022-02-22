const express = require('express');

const app = require('./app');

const router = express.Router();
const port = 4000;
// app.set('port', process.env.PORT || 4000);

router.get('/', (req, res) => {
  res.send('its working');
});

app.use('/', router);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// app.listen(app.get('port'), () => {
//   console.log('App running on port', app.get('port'));
// });
