const { v4: uuidv4 } = require('uuid');
// let todo=[];
const Todo = require('../database/script/database');

module.exports.getGettodos = (req, res) => {
    Todo.getTodos()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send('unable to fetch todos ', err.message);
        })
}

// module.exports.postAddtodos = (req,res)=>{
//     const {name} = req.body;
//     todo.push({
//         id: uuidv4(),
//         name
//     })
//     res.redirect('/gettodo')
// };

module.exports.postAddtodos = (req, res) => {
    const { name } = req.body;
    Todo.addTodos(name)
        .then((msg) => {
            console.log(msg);
            res.redirect('/gettodo')
        }).catch((err) => {
            res.send(err.message);
        })

};

// module.exports.postDeletetodos = (req,res)=>{
//     const {id} = req.body;
//     todo = todo.filter(task=>{
//         if(task.id==id){
//             return false;
//         }return true;
//     });
//     res.redirect('/gettodo')
// };

module.exports.postDeletetodos = (req, res) => {
    const { id } = req.body;
    Todo.deleteTodo(id)
        .then((msg) => {
            console.log(msg);
            res.redirect('/gettodo')
        })
        .catch((err) => {
            console.log(err);
        })
};

// module.exports.getIncrease = (req,res)=>{
//     const {id} = req.query;
//     console.log(id);
//     let idx ;
//     todo.forEach((e,i)=>{
//         if(e.id==id){
//             idx = i;
//         }
//     })
//     let temp = todo[idx];
//     todo[idx]= todo[idx-1];
//     todo[idx-1] = temp;
//     res.redirect('/gettodo')
// };

module.exports.getIncrease = (req, res) => {
    const { id } = req.query;
    Todo.increasePriority(id)
        .then((msg) => {
            console.log(msg);
            res.redirect('/gettodo')
        })
        .catch((err) => {
            console.log(err);
        })
};

// module.exports.getDecrease = (req,res)=>{
//     const {id} = req.query;
//     let idx ;
//     todo.forEach((e,i)=>{
//         if(e.id==id){
//             idx = i;
//         }
//     })
//     let temp = todo[idx];
//     todo[idx]= todo[idx+1];
//     todo[idx+1] = temp;
//     res.redirect('/gettodo')
// };

module.exports.getDecrease = (req, res) => {
    const { id } = req.query;
    Todo.decreasePriority(id)
        .then((msg) => {
            console.log(msg);
            res.redirect('/gettodo')
        })
        .catch((err) => {
            console.log(err);
        })
};