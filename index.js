const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const app = express();
app.use(express.json());

const sanitiserRoute = require("./routes/sanitiser");

app.use("/sanitiser", sanitiserRoute);



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