'use strict'

const express = require('express')
const siswaController = require('../controllers/siswa.controller')
const router = new express.Router();

const {checkToken} = require('../auth/tokenAdmin')

router.get("/tampil", checkToken, siswaController.tampil)
router.post("/tambah", checkToken, siswaController.tambah)
router.put("/update/:nisn", checkToken, siswaController.update)
router.delete("/hapus/:nisn", checkToken, siswaController.hapus)

module.exports = router