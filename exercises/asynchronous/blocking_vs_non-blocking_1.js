// Task 1 - write a program that acheives the following sequence

// log "A"
// wait 2s
// log "B"
// wait 3s
// log "C"
// log "D" immediately 

console.log("A");
setTimeout(console.log, 2000, "B");
setTimeout(console.log, 3000, "C");
console.log("D");