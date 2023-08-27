const express = require("express");
const bodyParser = require("body-parser");
const DBConfig = require("./config/db.config");
const cookieParser = require("cookie-parser");
const v1Router = require("./v1/routes");
const giftRouter = require("./v1/routes/giftRoutes");
const authenticateRouter = require("./v1/routes/authenticateRoutes");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Mongo database
const db = require("./database_v1/index");
db.mongoose.connect(`mongodb://${DBConfig.HOST}:${DBConfig.PORT}/${DBConfig.DATABASE_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
}).then(() => {
      console.log("Successfully connect to MongoDB.");
}).catch(err => {
      console.error("Connection error", err);
      process.exit();
});


app.use("/api/v1", v1Router);
app.use("/api/v1/gift", giftRouter);
app.use("/api/v1/authenticate", authenticateRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});