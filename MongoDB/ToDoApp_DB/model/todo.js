const { ObjectId } = require("mongodb");
const { getdb } = require("../database/database");
const { v4: uuidv4 } = require('uuid');

async function getPriority() {
    let counter = await getdb().collection('counter');
    let currentPriority;
    let cnt = await counter.findOne();
    if (!cnt) {
        await counter.insertOne({ id: 'myCounter', val: 1 });
        currentPriority = 1;
    } else {
        cnt = await counter.findOneAndUpdate(
            { id: 'myCounter' },
            { $inc: { val: 1 } },
            { ReturnDocument: 'after' }
        )
        currentPriority = cnt.value.val;
    } return currentPriority;
}
class Todo {
    static async addTodo(name) {
        return new Promise(async (resolve, rej) => {
            try {
                let todo = await getdb().collection('todo');
                let currentPriority = await getPriority();
                const data = {
                    name,
                    id: uuidv4(),
                    priority: currentPriority
                };
                await todo.insertOne(data);
                resolve('successfully added');
            }
            catch (err) {
                rej('error occur ', err.message)
            }
        })
    }
    static getTodo() {
        return new Promise(async (resolve, rej) => {
            try {
                let todo = await getdb().collection('todo');
                let data = await todo.find({}).sort({ priority: 1 }).toArray();
                resolve(data);
            }
            catch (err) {
                rej(err.message)
            }
        })
    }
    static deleteTodo(atrid) {
        return new Promise(async (resolve, rej) => {
            try {
                let todo = await getdb().collection('todo');
                await todo.deleteOne({ id: atrid });
                resolve('succesfully deleted');
            }
            catch (err) {
                rej(err.message)
            }
        })
    }
    static increasePriority(id) {
        return new Promise(async (resolve, rej) => {
            try {
                let todo = await getdb().collection('todo');
                // 1. find the current item
                let currentItem = await todo.find({ id: id }).toArray();
                currentItem = currentItem[0];
                // 2.fetch all the task having less priority then current
                let allItem = await todo.find({
                    priority: { $lt: currentItem.priority }
                }).sort({ priority: -1 }).toArray(); // -1 for dec +1 for asend
                // 3. we fetch the item we want to swap with
                let previous = allItem[0];
                if (!previous) {
                    resolve('done set priority')
                }
                // 4. lets swap priority
                await todo.updateOne(
                    { id: previous.id },
                    {
                        $set: {
                            priority: currentItem.priority
                        }
                    }
                )
                await todo.updateOne(
                    { id: currentItem.id },
                    {
                        $set: {
                            priority: previous.priority
                        }
                    }
                )
                resolve('succesfully increase Priority');
            }
            catch (err) {
                rej(err.message)
            }
        })
    }
    static decreasePriority(id) {
        return new Promise(async (resolve, rej) => {
            try {
                let todo = await getdb().collection('todo');
                // 1. find the current item
                let currentItem = await todo.find({ id: id }).toArray();
                currentItem = currentItem[0];
                // 2.fetch all the task having less priority then current
                let allItem = await todo.find({
                    priority: { $gt: currentItem.priority }
                }).sort({ priority: 1 }).limit(1).toArray(); // -1 for dec +1 for asend
                // 3. we fetch the item we want to swap with
                let next = allItem[0];
                if (!next) {
                    resolve('done set priority')
                }
                // 4. lets swap priority
                await todo.updateOne(
                    { id: next.id },
                    {
                        $set: {
                            priority: currentItem.priority
                        }
                    }
                )
                await todo.updateOne(
                    { id: currentItem.id },
                    {
                        $set: {
                            priority: next.priority
                        }
                    }
                )
                resolve('succesfully increase Priority');
            }
            catch (err) {
                rej(err.message)
            }
        })
    }
}

module.exports = Todo;