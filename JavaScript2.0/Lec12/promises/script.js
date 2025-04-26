// let promise = new Promise((resolve,reject)=>{
//     console.log("i am promise")
//     // resolve(123)
//     reject("some error occured")
// })

// real life example 
// function getData(dataID, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataID)
//             resolve("success")
//             if (getNextData) {
//                 getNextData()
//             }
//         }, 9000)
//     })
// }

// const promise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am promise")
//         resolve("success")
//     })
// }

// let val = promise()
// val.then((msg) => {
//     console.log("fulfilled",msg)
// })

// val.catch((err) => {
//     console.log("error",err)
// })


// function async1() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("dataI")
//             resolve("success")
//         },4000)
//     })
// }

// function async2() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("dataII")
//             resolve("success")
//         },4000)
//     })
// }

// console.log("fetching the data")
// async1().then((msg)=>{
//     console.log("result",msg)
//     async2().then((msg)=>{
//         console.log("result",msg)
//     })
// })

// p1.catch((err)=>{
//     console.log("error",err)
// })

// better way to print turn by turn  
function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID)
            resolve("success")
        }, 3000)
    })
}


// ----------FIRST--------------
// getData(1).then((msg)=>{
//     console.log("result",msg)
//     getData(2).then((msg)=>{
//         console.log("result",msg)
//     })
// })


// ----------SECOND---------
getData(1).then((msg)=>{
    return getData(2)
}).then((msg)=>{
    return getData(3)
}).then((msg)=>{
    return getData(4)
}).then((msg)=>{
    console.log("Success")
})