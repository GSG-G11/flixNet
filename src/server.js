const express = require('express');

const app = express();
const router = express.Router();
const port = 4000;

router.get('/', (req, res) => {
  res.send('its working');
});

app.use('/', router);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
