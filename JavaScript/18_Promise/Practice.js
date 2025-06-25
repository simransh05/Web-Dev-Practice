function download(url){
    console.log('start download')
    return new Promise((res,rej)=>{
        setTimeout(() => {
            return res('Dowmloaded file')
        }, 2000);
    })
}

function compress(downloaded){
    console.log('start compress')
    return new Promise((res,rej)=>{
        setTimeout(() => {
            return res('compress file')
        }, 2000);
    })
}

function upload(compiled){
    console.log('start upload')
    return new Promise((res,rej)=>{
        setTimeout(() => {
            return res('uploaded file')
        }, 2000);
    })
}

download('https://codingBlocks.com/myFile.mp4')
.then((msg)=>{
    console.log(msg)
    return compress(upload)
})
.then((msg)=>{
    console.log(msg)
    return upload()
})
.then((msg)=>{
    console.log(msg)
})
.catch(()=>{
    console.log('error occur')
})