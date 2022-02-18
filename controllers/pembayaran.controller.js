'use strict'

const db = require ('../db')

module.exports = {
    tampil: (req, res) =>{
        const sql = `SELECT * FROM pembayaran`
        db.query(sql, (err, result) =>{
            if(err) throw err
            res.json({
                message: "Berhasil",
                data: result
            })
        })
    },
    tambah: (req, res) => {
        let tambah_bayar = {
            id_petugas : req.body.id_petugas,
            nisn : req.body.nisn,
            tgl_bayar : req.body.tgl_bayar,
            bulan_spp : req.body.bulan_spp,
            tahun_spp : req.body.tahun_spp

        }

        let sql = `INSERT INTO pembayaran SET ? `

        db.query(sql, tambah_bayar, (err, result) => {
            if(err){
                throw err
            }else{
                res.json({
                    message : "Data pembayaran berhasil ditambahkan",
                    data : ({
                        id_petugas : tambah_bayar.id_petugas,
                        nisn : tambah_bayar.nisn,
                        tgl_bayar : tambah_bayar.tgl_bayar,
                        bulan_spp : tambah_bayar.bulan_spp,
                        tahun_spp : tambah_bayar.tahun_spp

                    })
                })
                
            }
        })
    },
    update: (req,res) => {
        const id = req.params.id_pembayaran
        let edit_bayar = {
            id_petugas : req.body.id_petugas,
            nisn : req.body.nisn,
            tgl_bayar : req.body.tgl_bayar,
            bulan_spp : req.body.bulan_spp,
            tahun_spp : req.body.tahun_spp
    
        }
        let sql = `UPDATE pembayaran SET ? WHERE id_pembayaran = '${id}'`

        db.query(sql, edit_bayar, (err, result) => {
            if(err){
                console.log(err.message)
            }else{
                res.json({
                    message : "Data spp Berhasil di Update",
                    data : ({
                        id_petugas : edit_bayar.id_petugas,
                        nisn : edit_bayar.nisn,
                        tgl_bayar : edit_bayar.tgl_bayar,
                        bulan_spp : edit_bayar.bulan_spp,
                        tahun_spp : edit_bayar.tahun_spp
                                    
                    })
                })
            }
        })
    },
    hapus: (req,res) => {
        const id = req.params.id_pembayaran
        let sql = `DELETE FROM pembayaran WHERE id_pembayaran = '${id}'`

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