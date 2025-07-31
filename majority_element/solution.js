// Função para encontrar o elemento majoritário em um array
var majorityElement = function (nums) {
    // Passo 1: Ordena o array em ordem crescente
    // Isso garante que todos os elementos iguais fiquem juntos
    nums.sort((a, b) => a - b);

    // Passo 2: Retorna o elemento que está na posição do meio do array
    // Como o elemento majoritário aparece mais da metade das vezes,
    // ele sempre estará na posição central após a ordenação
    return nums[Math.floor(nums.length / 2)];
};

//Complexidade
//Tempo: O algoritmo é O(n log n) devido à ordenação do array, que é o passo mais custoso.
//Espaço: O algoritmo é O(1) se a ordenação for feita in-place, pois não utiliza estruturas auxiliares proporcionais ao tamanho do array.