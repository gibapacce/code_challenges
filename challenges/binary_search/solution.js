// Solução mais simples: Busca binária iterativa

var search = function (nums, target) {
    // Inicializa os ponteiros do início e fim do array
    let left = 0;
    let right = nums.length - 1;

    // Enquanto a janela de busca for válida
    while (left <= right) {
        // Calcula o índice do meio da janela
        let mid = Math.floor((left + right) / 2);

        // Se o elemento do meio for o target, retorna o índice
        if (nums[mid] === target) {
            return mid;
        }
        // Se o target for maior que o elemento do meio,
        // descarte a metade esquerda
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        // Se o target for menor, descarte a metade direita
        else {
            right = mid - 1;
        }
    }
    // Se não encontrar, retorna -1
    return -1;
}

// Complexidade de tempo: O(log n), pois a cada iteração descartamos metade do array.
// Complexidade de espaço: O(1), pois usamos apenas variáveis auxiliares.
