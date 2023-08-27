const express = require("express");
const bodyParser = require("body-parser");
const sql = require('mssql')


// *** REMOVE ***
const v1Router = require("./v1/routes");
const v1GiftRouter = require("./v1/routes/giftRoutes");
const cors = require("cors");
const db = require("./database_v1/index");


const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
db.sequelize.sync().then(r => console.log("Connect db success"));

app.use(bodyParser.json());
app.use("/api/v1", v1Router);

app.use("/api/v1/gift", v1GiftRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});