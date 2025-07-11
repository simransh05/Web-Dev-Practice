const addTask = document.querySelector('#addTask');
const newTask = document.querySelector('#newTask');
const taskList = document.querySelector('.taskList')

addTask.addEventListener('click', (ev) => {
    ev.preventDefault();
    axios.post('/addtodo', {
        name: newTask.value
    })
        .then((res) => {
            let todos = res.data;
            console.log(todos);
            addToDOM(todos);
            newTask.value = "";
        }).catch((err) => {
            console.log(err.message);
        })
})

axios.get('/gettodo')
    .then((req) => {
        let todos = req.data;
        addToDOM(todos);
    })
    .catch((err) => {
        console.log(err)
    })

function addToDOM(todos) {
    taskList.innerText = '';
    todos.forEach(element => {
        let li = document.createElement('li');
        // li.innerText = element.name;
        li.innerHTML = `
        <span class="item">${element.name}</span>
        <button atrid="${element.id}" class="up">⬆</button>
        <button atrid="${element.id}" class="down">⬇</button>
        <button atrid="${element.id}" class="delete">X</button>
        `
        taskList.appendChild(li);
    });
}

taskList.addEventListener('click', (e) => {
    const atrid = e.target.getAttribute('atrid');
    const className = e.target.className;
    if (className == 'delete') {
        deleteTO(atrid);
    }
    else if(className=='up'){
        upside(atrid)
    }else if(className=='down'){
        downbtn(atrid)
    }
})

function upside(atrid){
    axios.get(`increase?id=${atrid}`,{
        id:atrid
    })
    .then((res)=>{
        const todo = res.data;
        addToDOM(todo);
    })
    .catch((err)=>{
        console.log(err);
    })
}

function downbtn(atrid){
    axios.get(`decrease?id=${atrid}`,{
        id:atrid
    })
    .then((res)=>{
        const todo = res.data;
        addToDOM(todo);
    })
    .catch((err)=>{
        console.log(err)
    })
}

function deleteTO(atrid){
    axios.post('/deletetodo', { id: atrid })
            .then((res) => {
                let todos = res.data;
                console.log(todos);
                addToDOM(todos);
            })
            .catch((err) => {
                console.log(err);
            })
}


// axios.get('/gettodo')
//     .then((todo) => {
//         console.log(todo)
//     })
//     .catch((err) => {
//         console.log(err.message);
//     })