'use strict'

const express = require('express')
const bayarController = require('../controllers/pembayaran.controller')
const router = new express.Router();

router.get("/tampil", bayarController.tampil)
router.post("/tambah", bayarController.tambah)
router.put("/update/:id_pembayaran", bayarController.update)
router.delete("/hapus/:id_pembayaran", bayarController.hapus)

module.exports = router