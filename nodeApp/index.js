const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'wcruz_mysql',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const names = [];

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const insertNames = () => {
    const sql = `INSERT INTO ${config.database}.people (name) VALUES ("Louis Latrel")`;
    connection.query(sql);
}


const getNames = () => {
    const sql = `SELECT name FROM ${config.database}.people`;
    connection.query(sql).on("result", (results) => {
        names.push(results.name);
    });
}

insertNames();
getNames();

app.get('/', (req,res) => {
    res.send(`<h1>Full Cycle Rocks!</h1> <ul>${names.map(name => `<li>${name}</li>`).join("")}</ul>`)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})