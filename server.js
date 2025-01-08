// creating the server using the inbuilt module http.

const http = require("http");
const fs = require("fs");

const html = fs.readFileSync("./template/index.html", "utf-8");

const respone = http.createServer((req, res) => {
  //   console.log("A new request hit the server");
  res.end(html);
  console.log(`another req`);
  //   console.log(req);
  //   console.log(res);
});

respone.listen(8000, "127.0.0.1", () => {
  console.log("Server started");
});
