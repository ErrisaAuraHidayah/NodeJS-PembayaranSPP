'use strict'

const db = require('../db')

module.exports = {
    tampil: (req,res) => {
        const sql = `SELECT * FROM siswa`
        db.query(sql, (err,result) => {
            if(err){
                throw err
            }else{
                res.json({
                    message : "Berhasil",
                    data: result
                })
            }
        })
    },
    tambah: (req,res) => {
        let tambah_siswa = {
            
            nis : req.body.nis,
            nama : req.body.nama,
            id_kelas : req.body.id_kelas,
            alamat : req.body.alamat,
            no_tlp : req.body.no_tlp
        }
        let sql = `INSERT INTO siswa SET ?`

        db.query(sql, tambah_siswa, (err, result) => {
            if(err){
                throw err
            }else{
                res.json ({
                    message : "Data siswa berhasil ditambahkan",
                    data : ({
                        
                        nis : tambah_siswa.nis,
                        nama : req.body.nama,
                        id_kelas : tambah_siswa.id_kelas,
                        alamat : tambah_siswa.alamat,
                        no_tlp : tambah_siswa.no_tlp
                    })
                })
            }
        })
    },
    update: (req,res) => {
        const id = req.params.nisn
        let edit_siswa = {
            
            nis : req.body.nis,
            nama : req.body.nama,
            id_kelas : req.body.id_kelas,
            alamat : req.body.alamat,
            no_tlp : req.body.no_tlp
        }

        let sql = `UPDATE siswa SET ? WHERE nisn = '${id}'`
        
        db.query(sql, edit_siswa, (err,  result) => {
            if(err){
                throw err
            }else{
                res.json({
                    message: "Data berhasil di update",
                    data : ({
                        nis : edit_siswa.nis,
                        nama : edit_siswa.nama,
                        id_kelas : edit_siswa.id_kelas,
                        alamat : edit_siswa.alamat,
                        no_tlp : edit_siswa.no_tlp

                    })
                })
            }
        })

    },
    hapus: (req,res) => {
        const id = req.params.nisn
        let sql = `DELETE FROM siswa WHERE nisn = '${id}'`

        db.query(sql, (err, result) => {
            if(err){
                console.log(err.message)
            }else{
                res.json({
                    message : "Data Berhasil di Hapus",
                })
            }
        })
    }

}