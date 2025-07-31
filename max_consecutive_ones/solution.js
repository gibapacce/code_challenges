// Função que encontra o maior número de 1s consecutivos em um array de 0s e 1s
var findMaxConsecutiveOnes = function (nums) {
    // Variável para contar a sequência atual de 1s
    var currCount = 0;
    // Variável para guardar o maior número de 1s consecutivos encontrados até agora
    var maxCount = 0;

    // Percorre todo o array
    for (let i = 0; i < nums.length; i++) {
        // Se o elemento atual for 1, incrementa o contador da sequência atual
        if (nums[i] == 1) {
            currCount++;
        } else {
            // Se encontrar um 0, compara o valor atual com o máximo já encontrado
            // Atualiza maxCount se currCount for maior
            maxCount = Math.max(maxCount, currCount);
            // Zera o contador da sequência atual, pois a sequência foi interrompida
            currCount = 0;
        }
    }
    // Após o loop, faz uma última comparação para o caso da maior sequência estar no final do array
    return Math.max(maxCount, currCount);
};

//Complexidade
//Tempo: O algoritmo é linear, O(n), porque passa pelo array uma única vez.
//Espaço: O algoritmo é constante, O(1), porque só usa algumas variáveis extras, não importa o tamanho do array.