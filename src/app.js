var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const serverless = require("serverless-http");
const fileRouter = require("../files/fileRouter");
var indexRouter = require("../routes/index");
var usersRouter = require("../routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// app.use(bodyParser.text({ type: "/" }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(bodyParser.urlencoded({ extended: false }));

app.use("/.netlify/functions/api", router);
// app.use("/users", usersRouter);
app.use(fileRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
// app.post("/profile", upload.single("avatar"), function (req, res, next) {
//   // req.file - файл `avatar`
//   // req.body сохранит текстовые поля, если они будут
// });

module.exports = app;
