'use strict'

const res = require('express/lib/response')
const db = require('../db')

module.exports = {
    tampil: (req,res) =>{
        const sql = `SELECT * FROM spp`

        db.query(sql, (err, result) => {
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
        let tambah_spp = {
            angkatan : req.body.angkatan,
            tahun : req.body.tahun,
            nominal : req.body.nominal
        }

        let sql = `INSERT INTO spp SET ?`

        db.query(sql, tambah_spp, (err, result) => {
            if(err){
                throw err
            }else{
                res.json({
                    message : "Data spp berhasil ditambahkan",
                    data : ({
                        angkatan : tambah_spp.angkatan,
                        tahun : tambah_spp.tahun,
                        nominal : tambah_spp.nominal
                    })

                })
            }
        })
    },
    update: (req,res) => {
        const id_spp = req.params.id_spp
        let edit_spp = {
            angkatan : req.body.angkatan,
            tahun : req.body.tahun,
            nominal : req.body.nominal

        }

        let sql = `UPDATE spp SET ? WHERE id_spp = '${id_spp}'`
        db.query(sql, edit_spp, (err, result) => {
            if(err){
                throw err
            }else{
                res.json ({
                    message : "Data spp berhasil di update",
                    data : ({
                        angkatan : edit_spp.angkatan,
                        tahun : edit_spp.tahun,
                        nominal : edit_spp.nominal

                    })
                })
            }
        })
    },
    hapus: (req,res) => {
        const id_spp = req.params.id_spp
        let sql = `DELETE FROM spp WHERE id_spp = '${id_spp}'`

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