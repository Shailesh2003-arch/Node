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
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "hello world",
    });

    res.end(html.replace("{{%Content%}}", "You are in home page"));
  } else if (path.toLocaleLowerCase() === "/products") {
    res.writeHead(200);
    res.end(html.replace("{{%Content%}}", "You are in products page"));
  } else if (path.toLocaleLowerCase() === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "hello world",
    });

    res.end(html.replace("{{%Content%}}", "You are in about page"));
  } else if (path.toLocaleLowerCase() === "/contact") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "hello world",
    });

    res.end(html.replace("{{%Content%}}", "You are in contact page"));
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "my-header": "sorry the page you're finding doesn't exist",
    });

    res.end(html.replace("{{%Content%}}", "Error: 404 page not found"));
  }
});

respone.listen(8000, "127.0.0.1", () => {
  console.log("Server started");
});
