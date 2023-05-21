import express, { response } from "express";

const app = express();
const port = process.env.PORT || 2080;

// 404 페이지 작성

app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

// 500 페이지 작성

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.type("text/plain");
  res.status(500);
  res.send("500 - Internal Server Error");
});

// index.html과 about.html 경로 생성

app.get("/", (req, res) => {
  res.type("text/html");
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.type("text/html");
  res.sendFile(__dirname + "/about.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
