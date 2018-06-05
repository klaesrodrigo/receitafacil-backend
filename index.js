const express = require('express');
const app = express();

require('./controllers/index')(app);

app.listen(3000, () => {
    console.log("RUN!!");
});