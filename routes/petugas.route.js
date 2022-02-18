'use strict'

const express = require('express')
const petugasController = require('../controllers/petugas.controller')
const router = new express.Router();

router.get("/tampil", petugasController.tampil)
router.post("/tambah", petugasController.tambah)
router.put("/update/:id_petugas", petugasController.update)
router.delete("/hapus/:id_petugas", petugasController.hapus)

module.exports = router