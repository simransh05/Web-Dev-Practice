const { v4: uuidv4 } = require('uuid');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data.json');
const fs = require('fs');

class todo {
    static getTodos() {
        return new Promise((res, rej) => {
            fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
                if (err) {
                    return rej(err);
                }
                data = JSON.parse(data);
                return res(data);
            })
        })
    }
    static addTodos(name) {
        return new Promise((res, rej) => {
            fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
                if (err) {
                    return rej(err);
                }
                data = JSON.parse(data);
                let newTask = {
                    id: uuidv4(),
                    name: name
                }
                data.unshift(newTask);
                fs.writeFile(filePath,
                    JSON.stringify(data),
                    (err) => {
                        if (err) return rej(err);
                        res('task added successfully');
                    })

            })
        })
    }
    static deleteTodo(id) {
        return new Promise((res, rej) => {
            fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
                if (err) {
                    return rej(err);
                } data = JSON.parse(data);
                const newData = data.filter(item => item.id != id);
                fs.writeFile(filePath,
                    JSON.stringify(newData),
                    (err) => {
                        if (err) return rej(err);
                        res('successfully deleted');
                    }
                )
            })
        })
    }
    static increasePriority(id) {
        return new Promise((res, rej) => {
            fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
                if (err) {
                    return rej(err);
                } let todo = JSON.parse(data);
                let idx;
                todo.forEach((e, i) => {
                    if (e.id == id) {
                        idx = i;
                    }
                })
                let temp = todo[idx];
                todo[idx] = todo[idx - 1];
                todo[idx - 1] = temp;
                fs.writeFile(filePath,
                    JSON.stringify(todo),
                    (err) => {
                        if (err) return rej(err);
                        res('successfully increase the priority');
                    }
                )
            })
        })
    }
    static decreasePriority(id) {
        return new Promise((res, rej) => {
            fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
                if (err) {
                    return rej(err);
                } let todo = JSON.parse(data);
                let idx;
                todo.forEach((e, i) => {
                    if (e.id == id) {
                        idx = i;
                    }
                })
                let temp = todo[idx];
                todo[idx] = todo[idx + 1];
                todo[idx + 1] = temp;
                fs.writeFile(filePath,
                    JSON.stringify(todo),
                    (err) => {
                        if (err) return rej(err);
                        res('successfully decrease the priority');
                    }
                )
            })
        })
    }
}

module.exports = todo;