// Solução mais simples: Percorrer o array mantendo o menor preço até o momento
// e calculando o lucro máximo possível a cada dia.

var maxProfit = function (prices) {
    // Inicializa o menor preço como infinito (para garantir que qualquer preço será menor)
    let minPrice = Infinity;
    // Inicializa o lucro máximo como 0
    let maxProfit = 0;

    // Percorre cada preço no array
    for (let i = 0; i < prices.length; i++) {
        // Se o preço atual for menor que o menor preço já visto, atualize minPrice
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            // Caso contrário, calcule o lucro se vendesse hoje
            let profit = prices[i] - minPrice;
            // Atualize o lucro máximo se esse lucro for maior
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    // Retorne o lucro máximo encontrado
    return maxProfit;
}

// Complexidade de tempo: O(n), pois percorremos o array apenas uma vez.
// Complexidade de espaço: O(1), pois usamos apenas variáveis auxiliares.
