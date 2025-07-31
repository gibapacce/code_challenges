// Função que verifica se existe algum número duplicado no array 'nums'
var containsDuplicate = function (nums) {
    // Cria um conjunto (Set) para armazenar os números já vistos
    const validatedElement = new Set();

    // Percorre cada número do array
    for (number of nums) {
        // Verifica se o número já está no conjunto
        // Se estiver, significa que já apareceu antes (é duplicado)
        if (validatedElement.has(number)) {
            // Retorna true imediatamente, pois encontrou um duplicado
            return true;
        }
        // Se não estiver, adiciona o número ao conjunto para futuras verificações
        validatedElement.add(number);
    }
    // Se terminar o loop sem encontrar duplicados, retorna false
    return false;
};

//Complexidade
//Tempo: O algoritmo é linear, O(n), pois percorre o array uma vez e cada operação no Set é O(1) em média.
//Espaço: O algoritmo é O(n), pois no pior caso todos os elementos são únicos e o Set cresce proporcionalmente ao tamanho do array.