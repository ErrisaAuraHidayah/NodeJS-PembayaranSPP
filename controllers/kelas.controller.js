'use strict'

const db = require('../db')

module.exports = {
    tampil: (req,res) =>{
        const sql = `SELECT * FROM kelas`
        db.query(sql, (err, result) => {
            if(err) {
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
        let tambah_kelas = {
            nama_kelas : req.body.nama_kelas,
            jurusan : req.body.jurusan,
            angkatan : req.body.angkatan,
        }

        let sql = `INSERT INTO kelas SET ?`

        db.query(sql, tambah_kelas, (err, result) => {
            if(err){
                throw err
            }else{
                res.json ({
                    message : "Data kelas berhasil ditambahkan",
                    data : ({
                        nama_kelas : tambah_kelas.nama_kelas,
                        jurusan : tambah_kelas.jurusan,
                        angkatan : tambah_kelas.angkatan
                    })
                })
            }
        })
    },
    update: (req, res) => {
        const id = req.params.id_kelas
        let edit_kelas = {
            nama_kelas : req.body.nama_kelas,
            jurusan : req.body.jurusan,
            angkatan : req.body.angkatan

        }

        let sql = `UPDATE kelas SET ? WHERE id_kelas = '${id}'`

        db.query(sql, edit_kelas, (err, result) => {
            if(err){
                console.log(err.message)
            }else{
                res.json({
                    message: "Data Kelas Berhasil di Update",
                    data : ({
                        nama_kelas : edit_kelas.nama_kelas,
                        jurusan : edit_kelas.jurusan,
                        angkatan : edit_kelas.angkatan

                    })
                })
            }
        })
    },
    hapus: (req,res) => {
        let id_kelas = req.params.id_kelas
        let sql = `DELETE FROM kelas WHERE Id_kelas = '${id_kelas}'`

        db.query(sql, (err, result) => {
            if(err){
                console.log(err.message)
            }else{
                res.json({
                    message : "Data Kelas berhasil di Hapus",
                    
                })
            }
        })
    }


}
