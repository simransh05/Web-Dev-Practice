function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data")
            resolve(200)
        }, 2000)
    })
}
async function weatherData() {
    await api()  // for first call -- work for this one 
    await api()  // for second call
}



function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID)
            resolve("success")
        }, 3000)
    })
}

// async function getDataFunc() {
//     console.log("Fetching data for 1...")
//     await getData(1)
//     console.log("Fetching data for 2...")
//     await getData(2)
//     console.log("Fetching data for 3...")
//     await getData(3)
//     console.log("Fetching data for 4...")
//     await getData(4)
//     console.log("success")
// }

// IIFE using async await 
(async function () {
    console.log("Fetching data for 1...")
    await getData(1)
    console.log("Fetching data for 2...")
    await getData(2)
    console.log("Fetching data for 3...")
    await getData(3)
    console.log("Fetching data for 4...")
    await getData(4)
    console.log("success")
})()