const http = require("http")
const fs = require("fs")

http
  .createServer(function (request, response) {
    // const text = fs.readFileSync("./content/big.txt", "utf8")
    // response.end(text)
    const fileStream = fs.createReadStream("./content/big.txt", "utf8")
    fileStream.on("open", () => {
      fileStream.pipe()
    })
    fileStream.on("error", (err) => {
      response.end(err)
    })
  })
  .listen(3000)
