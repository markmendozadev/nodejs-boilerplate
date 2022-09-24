const express = require("express");
const dotenv = require("dotenv").config();
const ConnectDB = require("./config/db");
const userRoute = require("./routes/user");
const port = 5000;
const app = express();

ConnectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", userRoute);

app.listen(port, () => console.log(`LISTENING TO PORT ${port}`));
