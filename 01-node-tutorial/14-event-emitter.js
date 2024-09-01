const EventEmitter = require("events")

// order matters for the on and emit
// first listen using the on and then emit value
// can pass additional arguments
// built-in modules utilize it

const customEmitter = new EventEmitter()

customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id:${id}`)
})

customEmitter.on("response", () => {
  console.log(`some other logic here `)
})

customEmitter.emit("response", "john", 34)
