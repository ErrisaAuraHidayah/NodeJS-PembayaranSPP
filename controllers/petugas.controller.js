'use strict'

const bcrypt = require('bcryptjs/dist/bcrypt')
const db = require('../db')

module.exports = {
    tampil: (req,res) => {
        const sql = `SELECT * FROM petugas`
        db.query(sql, (err, result)=>{
            if(err){
                throw err
            }else{
                res.json({
                    message : "Berhasil",
                    data : result
                })
            }
        })
    },
    tambah: (req,res) => {
        let tambah_petugas = {
            username : req.body.username,
            password : req.body.password,
            nama_petugas : req.body.nama_petugas,
            level : req.body.level
        }

        let sql = `INSERT INTO petugas SET ?`

        db.query(sql, tambah_petugas, (err, result) => {
            if(err){
                throw err
            }else{
                res.json({
                    message : "Data petugas berhasl ditambahkan",
                    data : ({
                        username : tambah_petugas.username,
                        password : tambah_petugas.password,
                        nama_petugas : tambah_petugas.nama_petugas,
                        level : tambah_petugas.level

                    })
                })
            }
        })
    },
    update: (req,res) => {
        const id =req.params.id_petugas
        let edit_petugas = {
            username : req.body.username,
            password : req.body.password,
            nama_petugas : req.body.nama_petugas,
            level : req.body.level

        }
        let sql = `UPDATE petugas SET ? WHERE id_petugas = '${id}'`

        db.query(sql, edit_petugas, (err, result) => {
            if(err){
                console.log(err.message)
            }else{
                res.json({
                    message : "Data petugas berhasil di update",
                    data : ({
                        username : edit_petugas.username,
                        password : edit_petugas.password,
                        nama_petugas : edit_petugas.nama_petugas,
                        level : edit_petugas.level

                    })
                })
            }
        })
    },
    hapus: (req,res) => {
        const id = req.params.id_petugas
        let sql = `DELETE FROM petugas WHERE id_petugas = '${id}'`

        db.query(sql, (err, result) => {
            if(err){
                console.log(err.message)
            }else{
                res.json({
                    message : "Data petugas berhasil di  hapus"
                })
            }
        })
    },
    login: (req,res) => {
        const username = req.body.username
        const password = req.body.password

        if (!username || !password) res.status(402).json({ message: 'username dan password harus diisi'})

        return db.query(`SELECT * FROM petugas WHERE username = ?`, username, (err, result)=>{
            if(err) return res.status(500).json({err})
            const user = result[0]

            if(typeof user === 'undefined'){
                res.status(401).json({message: "email atau password tidak ditemukan"})
            }

            if(!bcrypt.compareSync(password, user.password)){
                res.status(401).json({message : "Email dan password tidak sesuai"})
            }

            //ini untuk mengecek sebagai admin atau petugas
            if(result[0].level === 'admin'){
                const secretAdmin = '#$%^*&$#$^'
                const token = jwt.sign({data: user}, secretAdmin)

                return res.json({message : "Hai Admin! Login Berhasil, silahkan menggunakan token dibawah ini untuk mengakses endpoint private lain", token})
            }else if(result[0].level === 'petugas'){
                const secretPetugas = '$^%#@$&*^%'
                const token = jwt.sign({data:user}, secretPetugas)

                return res.json({message : "Hai Petugas! Login Berhasil, silahkan menggunakan token dibawah ini untuk mengakses endpoint private lain", token})

            }

        })
    }

}