const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const app = express();
app.use(express.json());
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));


const sanitiserRoute = require("./routes/sanitiser");
const indexRoute = require("./routes/index");

app.use("/api/sanitiser", sanitiserRoute);
app.use("/", indexRoute);


dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser: true,  
    useUnifiedTopology: true },
    (err) => {
        if(err) {
            console.error("[E] " + err);
        }else{
            console.info("[I] DB connected successfully.");
        }
    }
)



port = process.env.PORT || 8080
app.listen(port, () => {console.info("[I] App started running on port", port)});