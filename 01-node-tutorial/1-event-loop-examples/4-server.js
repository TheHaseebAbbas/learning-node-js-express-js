var http = require("http")

const server = http.createServer((req, res) => {
  console.log("request event")
  res.end("Hello World")
})

server.listen(5000, () => {
  console.log("Server running at http://127.0.0.1:5000/")
})
