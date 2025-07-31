// Função que recebe um array de números inteiros (nums) e um alvo (target)
var twoSum = function (nums, target) {
    // Cria um objeto vazio para mapear números já vistos e seus índices
    // Chave: número já visto | Valor: índice desse número no array
    var mapping = {};

    // Percorre todo o array uma vez
    for (let i = 0; i < nums.length; i++) {
        // Pega o número atual
        let actualNum = nums[i];
        // Calcula o complemento necessário para atingir o target
        let complement = target - actualNum;

        // Verifica se o complemento já foi visto antes
        // Se sim, significa que já encontramos os dois números que somam o target
        if (mapping[complement] !== undefined) {
            // Retorna os índices: o do complemento já visto e o índice atual
            return [mapping[complement], i];
        } else {
            // Se não encontrou, armazena o número atual e seu índice no mapping
            mapping[actualNum] = i;
        }
    }
    // Não é necessário retornar nada aqui, pois o problema garante que sempre haverá uma solução
};

/*
Explicação da lógica:
- Usamos um objeto (mapping) para guardar os números já vistos e seus índices.
- Para cada número, calculamos o complemento necessário para atingir o target.
- Se o complemento já foi visto, retornamos imediatamente os dois índices.
- Se não, adicionamos o número atual ao mapping para futuras verificações.
- Dessa forma, cada número é processado apenas uma vez, tornando a solução eficiente.

Complexidade de tempo:
- O(n), onde n é o tamanho do array nums.
- Cada elemento é visitado apenas uma vez e as operações de busca/inserção no objeto são O(1) em média.

Complexidade de espaço:
- O(n), pois no pior caso precisamos armazenar todos os n números no objeto mapping.
*/