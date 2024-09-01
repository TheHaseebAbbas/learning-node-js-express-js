const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page")
  }
  if (req.url === "/about") {
    // blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
      }
    }
    res.end("About Page")
  }
  res.end("End Page")
})

server.listen(5000, () => {
  console.log("Server running at http://127.0.0.1:5000/")
})
