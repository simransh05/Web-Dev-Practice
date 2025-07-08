const input1 = document.getElementById('inp1');
const input2 = document.getElementById('inp2');
const btn = document.getElementById('btn');
const sumVal= document.querySelector('.sumVal')
const subVal= document.querySelector('.subtractVal')
const mutliVal= document.querySelector('.multiVal')

btn.addEventListener('click',()=>{
    const inp1Val =  Number(input1.value);
    const inp2Val = Number(input2.value);
    if(inp1Val==="" || inp2Val===""){
        alert('invalid number');
    }
    const sum = inp1Val+inp2Val;
    const subtract = inp1Val-inp2Val;
    const mutli = inp1Val*inp2Val;
    sumVal.textContent=sum;
    subVal.textContent=subtract;
    mutliVal.textContent=mutli;

})