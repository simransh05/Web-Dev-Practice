function sum(a){
    if(!a) return 0;
    let ans = a;
    function smallersum(b){
        if(!b) return ans;
        ans+=b;
        return smallersum;
    }return smallersum;
}

console.log(sum(10)())
console.log(sum(10)(20)())
console.log(sum(10)(20)(30)())
console.log(sum(10)(20)(30)(40)())