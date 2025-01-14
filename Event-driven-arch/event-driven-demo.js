const EventEmitter = require("events");
const http = require("http");
console.log(http);
// console.log(typeof http);
// console.log(typeof EventEmitter); // function

// Create a new instance of EventEmitter
// const myEmitter = new EventEmitter(); // returns you an object of class EventEmitter.
// console.log(typeof myEmitter); //object

// myEmitter.on("greet", (name) => {
//   console.log(`The event you triggered was the 'greet' event, hello, ${name}`);
// });

// myEmitter.emit("greet", "Alice");

const server = http.createServer();
// console.log(server);

server.listen(8000, "127.0.0.1", () => {
  console.log(`listening to requests`);
});

server.on("request", (req, res) => {
  //here you are listening to the event 'request'
  res.end(`Hello from the server`);
  console.log(`a new request recieved`);
});
