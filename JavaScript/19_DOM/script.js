// let heading = document.getElementsByTagName('h1');
// heading.style.color = 'Red';

let btn = document.getElementById('btn')
let h1 = document.getElementById('heading')
let inp = document.getElementById('inp')
const form = document.querySelector('form')

// btn.onclick = function () {
//     console.log('someone click the button')
// }

// btn.onclick = function(){
//     shout;
//     scream;
// }

function shout(){
    console.log('shout!!!!!!!')
}

function scream(){
    console.log('scream!!!!!!!')
}
// click event - event listener execute all the listener at the same time 
// btn.addEventListener("click",shout)
// btn.addEventListener('click',scream)

// // mouse event 
// h1.addEventListener('mouseenter',()=>{
//     h1.style.color='green';
//     h1.style.backgroundColor='aqua'
// })

// h1.addEventListener('mouseleave',()=>{
//     h1.style.color='';
//     h1.style.backgroundColor=''
// })

// // keyboard events
// inp.addEventListener('keypress',()=>{
//     console.log('key is pressed')
// })

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const user = form.elements[1].value;
    const age = form.elements[2].value;
    console.log(user,age);
})