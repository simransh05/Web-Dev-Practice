let obj = {
    a:'hello',
    b: true,
    c: 123,
    d :[1,2,3],
    e : {"key" : "value"}
}

console.log(JSON.stringify(obj))
let stringJson = JSON.stringify(obj)
// "a":"hello","b":true,"c":123,"d":[1,2,3],"e":{"key":"value"}} - string form
// { a: 'hello', b: true, c: 123, d: [ 1, 2, 3 ], e: { key: 'value' } } - object 
console.log(JSON.parse(stringJson))