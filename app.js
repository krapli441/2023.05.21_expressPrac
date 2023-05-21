import express from "express";

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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
