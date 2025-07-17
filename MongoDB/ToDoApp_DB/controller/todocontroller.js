const Todo = require("../model/todo");

module.exports.getGettodos = (req, res) => {
    try {
        let data = Todo.getTodo()
        res.send(data);
    }
    catch (err) {
        res.send(err.message)
    }
}


module.exports.postAddtodos = (req, res) => {
    const { name } = req.body;
    Todo.addTodo(name)
        .then((msg) => {
            console.log(msg);
            res.redirect('/gettodo')
        })
        .catch((err) => {
            res.send(err.message)
        })
};


module.exports.postDeletetodos = (req, res) => {
    const { id } = req.body;
    Todo.deleteTodo(id)
        .then((msg) => {
            console.log(msg);
            res.redirect('/gettodo')
        })
        .catch((err) => {
            res.send(err.message)
        })
};

module.exports.getIncrease = (req, res) => {
    const { id } = req.query;
    Todo.increasePriority(id)
        .then((msg) => {
            console.log(msg);
            res.redirect('/gettodo')
        })
        .catch((err) => {
            res.send(err);
        })
};


module.exports.getDecrease = (req, res) => {
    const { id } = req.query;
    Todo.decreasePriority(id)
        .then((msg) => {
            console.log(msg);
            res.redirect('/gettodo')
        })
        .catch((err) => {
            res.send(err);
        })

};