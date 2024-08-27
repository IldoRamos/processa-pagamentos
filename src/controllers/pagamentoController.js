const pagamentoService = require('../services/pagamentoService');

exports.processaPagamentoController = (req, res) => {
    const { idPedido, valorTotal, metodoPagamento } = req.body;

    // Processa o pagamento usando o serviço de pagamento
    const pagamentoResult = pagamentoService.processaPagamentoService(idPedido, valorTotal, metodoPagamento);

    if (pagamentoResult.status === 'success') {
        res.status(200).json({
            status: 'success',
            message: 'Pagamento processado com sucesso',
        });
    } else {
        res.status(400).json({
            status: 'failure',
            message: 'Pagamento falhou',
        });
    }
};
