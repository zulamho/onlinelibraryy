const express = require("express");
const mongoose = require("mongoose");
const hbs = require("express-handlebars");

const app = express();

app.use(express.json());
app.use(require("./routes/index"))

app.engine(".hbs", hbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

mongoose
  .connect(
    "mongodb+srv://admin06:admin06@cluster0.zvgtk.mongodb.net/onlinelibrary",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Сервер успешно запущен");
    });
  })
  .catch((err) => {
    console.log(err);
  });
