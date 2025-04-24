
function person (name,age){
    this.name= name;
    this.age=age;
    // console.log(this)
    // this.sayName = function(){
    //     console.log(this.name)
    // }
}

person.prototype.sayName = function(){
    console.log(this.name);
}

const p1 = new person("kartik",23)