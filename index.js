const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./controllers/index')(app);

app.listen(3000, () => {
    console.log("RUN!!");
});