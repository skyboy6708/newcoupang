module.exports = function (app, fs) {
  app.get("/", function (req, res) {
    res.render("index.html");
  });
  app.get("/login", function (req, res) {
    res.render("login.html");
    console.log(req, res);
  });
};
