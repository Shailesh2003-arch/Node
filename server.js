// creating the server using the inbuilt module http.

const http = require("http");
const fs = require("fs");

const html = fs.readFileSync("./template/index.html", "utf-8");

const respone = http.createServer((req, res) => {
  //   console.log("A new request hit the server");
  // res.end(html);
  let path = req.url;
  console.log(path);
  if (path === "/" || path.toLowerCase() === "/home") {
    res.end(html);
  } else if (path.toLocaleLowerCase() === "/about") {
    res.end(`You are in about page`);
  } else if (path.toLocaleLowerCase() === "/contact") {
    res.end(`You are in contact page`);
  } else {
    res.end(`Error 404:Page not found`);
  }
});

respone.listen(8000, "127.0.0.1", () => {
  console.log("Server started");
});
