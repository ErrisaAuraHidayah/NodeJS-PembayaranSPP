'use strict'

const express = require('express')
const sppController = require('../controllers/spp.controller')
const router = new express.Router();

router.get("/tampil", sppController.tampil)
router.post("/tambah", sppController.tambah)
router.put("/update/:id_spp", sppController.update)
router.delete("/hapus/:id_spp", sppController.hapus)

module.exports = router