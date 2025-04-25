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

const c1 = new car ("Defender","2.5cr",true)