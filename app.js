const express = require("express");
const path = require("path");

const app = express();
const indexRouter = require("./routes/index");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

app.use("/", indexRouter);

app.get("/", (req, res) => {
  res.render("index", { message: "yo" });
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`listening on port ${PORT}`);
});