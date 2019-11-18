const path = require("path");
const express = require("express");
var uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/ESOhelper', { useNewUrlParser: true });
const app = express();
app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const routes = require('./config/routes')(app);
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});


app.listen(5000, () => console.log("listening on port 5000"));