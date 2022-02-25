'use strict'

const db = require ('../db')
const moment = require('moment');

module.exports = {
    
    tambah: (req, res) => {
        let tambah_bayar = {
            id_petugas : req.body.id_petugas,
            nisn : req.body.nisn,
            tgl_bayar : new Date(),
            bulan_spp : req.body.bulan_spp,
            tahun_spp : req.body.tahun_spp

        }
        //ini buat tanggal hari ini
        tambah_bayar.tgl_bayar = moment(now).format('YYYY-MM-DD')
        
        let sqlCariId = `SELECT * FROM kelas JOIN siswa on siswa.id_kelas = kelas.id_kelas WHERE nisn = ?`
        db.query(sqlCariId, tambah_bayar.nisn, (req,res)=>{
            if(err){
                throw err
            }else{
                var angkatan = result[0].angkatan

                let sql = `SELECT * FROM spp WHERE angkatan = `
                db.query(sql, angkatan, (err, result)=>{
                    if(err){
                        throw err
                    }else{
                        let id = result[0].id_spp

                        let sql = `SELECT * from pembayaran WHERE nisn = ?`
                        db.query(sql, tambah_bayar.nisn, (err,result)=>{
                            if(result.length == 0){
                                if(bulan_spp && tahun_spp){
                                    let sql =  `insert into pembayaran (id_petugas, nisn, tgl_bayar, bulan_spp, tahun_spp, id_spp, keterangan) values ('${id_petugas}','${nisn}','${today}','${bulan_spp}','${tahun_spp}', '${idspp}','${ket}' )`
                                    
                                    db.query(sql, (err, result) => {
                                        if(err) throw err
                                        
                                        res.json({
                                            message: "Berhasil menambahkan data pembayaran spp",
                                            bulan_spp: bulan_spp,
                                            tahun_spp: tahun_spp,
                                            tanggalPembayaran: tambah_bayar.tgl_bayar

                                        })
                                        
                                    })
                                }
                            } else {
                                var bulan_spp = result[0].bulan_spp
                                let tahunspp = result[0].tahun_spp
                                var bulan_spp = 1
                                if(bulan_spp < 12){
                                    bulan_spp = bulan_spp + 1
                                }
                                if(bulan_spp > 13){
                                    tahunspp = tahunspp + 1
                                }
                                let query = `insert into pembayaran (id_petugas, nisn, tgl_bayar, bulan_spp, tahun_spp, id_spp, keterangan) values ('${id_petugas}','${nisn}','${today}','${bulanspp}','${tahunSpp}', '${idspp}','${ket}' )`
                                db.query(query, (err, result)=>{
                                    if(err) throw err
                                    res.json({
                                        message: "Berhasil menambahkan data pembayaran spp",
                                        bulan_spp: bulan_spp,
                                        tahun_spp: tahunSpp,
                                        tanggalPembayaran: tambah_bayar.tgl_bayar

                                    })
                                })
                            }
                        })
                    }
                })
            }
        })
        
    }
    

}