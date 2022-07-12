const express = require("express");
const app = express();
const newsRouter = require("./src/routes/news");
const port = 8000;
const APIkey = "ee2381d8fce84333a35e732b945c8584";
// Static files

app.use(express.static("public"));
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", newsRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
