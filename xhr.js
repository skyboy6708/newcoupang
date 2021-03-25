const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const fs = require("fs");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// 서버가 읽을 수 있도록 HTML의 위치를 정의해준다
app.set("views", __dirname + "/views");
// 서버가 HTML렌더링할때 EJS엔진을 사용하도록 설정
// app.set("view engine", "ejs");
// app.engine("html", require("ejs").renderFile);

app.use(express.static("resources"));
app.use(express.static("vendors"));
app.use(express.static("views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "@#@$MYSIGN#@$#$",
    resave: false,
    saveUninitialized: true,
  })
);
// app.use(bodyParser().json());
app.post("/login.html", (req, res) => {
  console.log(req.body);
});

app.get("/form_receiver", (req, res) => {
  const response = "서버가 응답하였습니다";
  const title = req.query.searchInput;
  console.log(title);
  res.send(`서버의 데이터: ${response}`);
  // res.send(req.query.searchInput);
});

const router = require("./router/main")(app, fs);
// 라우터 모듈인 main.js를 불러와서 app에 전달한다
// fs에 전달 - 파일을 열기위함
// session secret: 쿠키를 임의로 변조하는것을 방지하는 값
// resave: 세션을 언제나 저장할지 저장한다, 권장 false값
// saveUninitialized: 변경되지 않은 세션을 의미한다

const server = app.listen(3000, function () {
  console.log("Express server has started on port 3000");
});
