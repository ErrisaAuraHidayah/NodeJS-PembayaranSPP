'use strict'

const express = require('express')
const petugasController = require('../controllers/petugas.controller')
const router = new express.Router();

//ini untuk ngecek tokennya admin
const {checkToken} = require('../auth/tokenAdmin')

router.get("/tampil", petugasController.tampil)
router.post("/tambah", petugasController.tambah)
router.put("/update/:id_petugas", checkToken, petugasController.update)
router.delete("/hapus/:id_petugas", checkToken, petugasController.hapus)

//ini endpoint untuk loginnya
router.post("/login" , petugasController.login)

module.exports = router