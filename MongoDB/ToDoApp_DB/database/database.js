const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'todoApp';

function main() {
    return new Promise((res,rej)=>{
        client.connect()
        .then(() => {
            console.log('Connected successfully to server from db');
            _db = client.db(dbName);
        })
        .catch((err) => {
            rej(err);
        })
    })
}

function getdb() {
    if(_db) return _db;
    return null;
}

module.exports.getdb = getdb;
module.exports.mongoConnect = main;