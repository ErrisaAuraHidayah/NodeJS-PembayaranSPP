'use strict'

const express = require('express')
const siswaController = require('../controllers/siswa.controller')
const router = new express.Router();

router.get("/tampil", siswaController.tampil)
router.post("/tambah", siswaController.tambah)
router.put("/update/:nisn", siswaController.update)
router.delete("/hapus/:nisn", siswaController.hapus)

module.exports = router