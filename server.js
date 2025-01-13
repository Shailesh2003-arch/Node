// creating the server using the inbuilt module http.

const http = require("http");
const fs = require("fs");
const url = require("url");

const html = fs.readFileSync("./template/index.html", "utf-8");
let products = JSON.parse(fs.readFileSync("./Data/products.json", "utf-8")); //this becomes the array of objects...

let productListHtml = fs.readFileSync("./template/product-list.html", "utf-8");

const productHtmlArray = products.map((prod) => {
  let output = productListHtml.replace("{{%IMAGE%}}", prod.image);
  output = output.replace("{{%NAME%}}", prod.name);
  output = output.replace("{{%MODELNAME%}}", prod.modelName);
  output = output.replace("{{%MODELNUMBER%}}", prod.modelNumber);
  output = output.replace("{{%SIZE%}}", prod.size);
  output = output.replace("{{%CAMERA%}}", prod.camera);
  output = output.replace("{{%PRICE%}}", prod.price);
  output = output.replace("{{%COLOR%}}", prod.color);
  output = output.replace("{{%ID%}}", prod.id);
  return output;
});

const respone = http.createServer((req, res) => {
  //   console.log("A new request hit the server");
  // res.end(html);

  const { query, pathname: path } = url.parse(req.url, true);

  // let path = req.url;

  // console.log(path);
  if (path === "/" || path.toLowerCase() === "/home") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "hello world",
    });

    res.end(html.replace("{{%Content%}}", productListHtml));
  } else if (path.toLocaleLowerCase() === "/products") {
    if (!query.id) {
      let producutResponseHtml = html.replace(
        "{{%Content%}}",
        productHtmlArray.join("")
      );
      res.writeHead(200, {
        "Content-type": "text/html",
      });
      res.end(producutResponseHtml);
    } else {
      res.end(`This is a product wit ID = ` + query.id);
    }

    console.log(products);
    console.log(productHtmlArray.join(","));
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
