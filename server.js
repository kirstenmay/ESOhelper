const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public/dist/public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/routes/routes')(app);

app.listen(5000, () => {
    console.log("listening on port 5000")
})