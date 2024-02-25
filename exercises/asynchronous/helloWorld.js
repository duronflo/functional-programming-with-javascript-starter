const printMessage = (message) => {
    console.log("async")
    setTimeout(console.log, 4000, "...hronous!")
}

const printHelloWorld = () => {
  console.log("I'm ");
  setTimeout(printMessage, 2000, "Async");
}

printHelloWorld();