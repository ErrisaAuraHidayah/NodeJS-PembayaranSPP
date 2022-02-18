const mysql = require("mysql")

//koneksi
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "pembayaran_spp"
})

module.exports  = db