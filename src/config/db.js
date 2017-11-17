const Firebase = require("firebase");
const { config } = require("./config");

const app = Firebase.initializeApp(config);
const db = app.database();

module.exports = {
    db
};