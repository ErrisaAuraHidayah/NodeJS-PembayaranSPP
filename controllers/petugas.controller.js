'use strict'

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
    }  

}