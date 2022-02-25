'use strict'

const express = require('express')
const kelasController = require('../controllers/kelas.controller')
const router = new express.Router();

const {checkToken} = require('../auth/tokenAdmin')

router.get("/tampil", checkToken, kelasController.tampil)
router.post("/tambah", checkToken, kelasController.tambah)
router.put("/update/:id_kelas", checkToken, kelasController.update)
router.delete("/hapus/:id_kelas", checkToken, kelasController.hapus)

module.exports = router