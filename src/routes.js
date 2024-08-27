const express = require('express');
const pagamentoController = require('./controllers/pagamentoController');
const router = express.Router();

router.post('/pedido', pagamentoController.processaPagamentoController);
module.exports = router;
