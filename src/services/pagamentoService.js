exports.processaPagamentoService = (idPedido, valorTotal, metodoPagamento) => {
    // Simulação de processamento de pagamento
    console.log(`Processando paramento de pedido ${idPedido} com valor a pagar ${valorTotal} usando ${metodoPagamento}`);

    // Aqui, poderia haver uma integração real com uma API de pagamento.
    const isPagamentoSuccessful = Math.random() > 0.3; // Simulação: 70% de chance de sucesso

    if (isPagamentoSuccessful) {
        return {
            status: 'success',
            transactionId: `TRANS-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        };
    } else {
        return {
            status: 'failure',
            message: 'Pagamento não pode ser processado',
        };
    }
};
