const inp = document.getElementById('inp');
const buttons = document.querySelectorAll('button');

for(let button of buttons){
    button.addEventListener('click',(e)=>{
        const buttonText = e.target.innerText;
        if(buttonText==='C'){
            inp.value='';
        }else if(buttonText==='X'){
            inp.value+='*';
        }else if(buttonText==='='){
            try{
                inp.value = eval(inp.value);
            }
            catch{
                inp.value='invalid operation';
            }
        }else {
            inp.value+=buttonText;
        }
    })
}