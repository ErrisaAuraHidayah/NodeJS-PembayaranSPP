'use strict'

const express = require('express')
const kelasController = require('../controllers/kelas.controller')
const router = new express.Router();

router.get("/tampil", kelasController.tampil)
router.post("/tambah", kelasController.tambah)
router.put("/update/:id_kelas", kelasController.update)
router.delete("/hapus/:id_kelas", kelasController.hapus)

module.exports = router