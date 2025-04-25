class car {
    constructor(name,price , isDiskBreak){
        this.name=name;
        this.price=price;
        this.isDiskBreak=isDiskBreak;
    }
    // method
    start(){
        console.log(`${this.name} is starting`)
    }

    // getter
    get getName(){
        return this.name;
    }

    // setter
    set updateName(name){
        this.name=name;
    }
    
    // static method are called directly by the class name
    static applyBreak(){
        console.log("applying the break")
    }
}


class RacingCar extends car{
    constructor(name,price , isDiskBreak,maxSpeed,color){
        super(name,price,isDiskBreak)
        this.maxSpeed=maxSpeed;
        this.color=color;
    }

    get maximumSpeed(){
        return this.maxSpeed;
    }

    get getColor(){
        return this.color;
    }
}

const r1 = new RacingCar("BMW","50L",true,250,"blue")