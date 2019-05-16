const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/public')));



const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});