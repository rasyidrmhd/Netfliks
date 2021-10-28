require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3005;
const routes = require("./routes");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({}));

app.use("/", routes);

app.listen(PORT, () => {
  console.log("listening to localhost:", PORT);
});
