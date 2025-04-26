function getData(dataID , getNextData){
    setTimeout(()=>{
        console.log("data",dataID)
        if(getNextData){
            getNextData()
        }
    },2000) 
}


// call back hell -- nexted callbacks (pyromid of doom)
getData(1 , ()=>{
    getData(2 ,()=>{
        getData(3)
    })
})
 
