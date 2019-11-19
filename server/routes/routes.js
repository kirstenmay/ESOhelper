const controller = require('../controllers/controller');
const path = require("path");

module.exports = (app) => {
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })};
