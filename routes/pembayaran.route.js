'use strict'

const express = require('express')
const bayarController = require ('../controllers/pembayaran.controller')
const router = new express.Router();
const {checkToken} = require('../auth/tokenAdmin')

router.post('/tambah', checkToken, bayarController.tambah)



module.exports = router