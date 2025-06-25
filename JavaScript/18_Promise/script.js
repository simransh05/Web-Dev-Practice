let movie = false;
let p = new Promise((res, rej) => {
    delay()
    if (!movie) return rej('no popcorn')
    else {
        return res('enjoy the movie')
    }
}
)
function delay (){
    let currentTime = new Date().getTime();
    // console.log(currentTime)
    while(currentTime+1000>new Date().getTime()){}
}

p
    .then((msg) => {
        console.log('success',msg)
    })
    .catch((err) => {
        console.log('err',err)
    })