const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "chintu2327@A",
    database: "task_db",
});

console.log("MySQL connection initialized");

module.exports = db.promise();