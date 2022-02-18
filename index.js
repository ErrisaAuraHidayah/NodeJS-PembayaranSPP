'use strict'

//inisialisasi
const express = require("express")
const bodyParser = require("body-parser")

//implementasi
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}));

//menghubungkan ke datbase
const db = require ('./db')
db.connect(error => {
    if(error){
        console.log(error.message)
    }else{
        console.log("Mysql Connected")
    }
})

app.get("/",(req,res) => {
    res.send({
        message: "Berhasil menjalankan GET",
        data: {
            description : 
            "Endpoint ini menampilkan data"
        }
    })
})

app.use("/kelas", require('./routes/kelas.route'))
app.use("/petugas", require('./routes/petugas.route'))
app.use("/siswa", require('./routes/siswa.route'))
app.use("/spp", require('./routes/spp.route'))
app.use("/bayar", require('./routes/pembayaran.route'))

const port = 3000
app.listen(port, () => {
    console.log(`App running in server ${port}`)
})