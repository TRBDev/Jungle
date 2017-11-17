import Firebase from "firebase";
import { config } from "./config";

const app = Firebase.initializeApp(config);
const db = app.database();

module.exports = {
    app,
    db
};