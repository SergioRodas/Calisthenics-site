const express = require("express"),
  app = express(),
  path = require("path");
app.set("port", process.env.PORT || 3000),
  app.set("views", path.join(__dirname, "views")),
  app.engine("html", require("ejs").renderFile),
  app.set("view engine", "ejs"),
  app.use(require("./routes/")),
  app.use(express.static(path.join(__dirname, "public"))),
  app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
  });
