new Promise((resolve, reject) => {
    resolve("This is what success looks like");
})
.then(data => {
     const dataArr = data.split("");
     return dataArr.reverse()
})
.then(data => data.join(""))
.then(data => console.log(data))
.catch(error => {
    console.log("There was an error")
})