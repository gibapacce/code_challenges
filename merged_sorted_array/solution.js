/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// Função para mesclar dois arrays ordenados nums1 e nums2
var merge = function (nums1, m, nums2, n) {
    // 1. Crie um novo array para armazenar o resultado da mesclagem
    //    Isso facilita a comparação e inserção dos elementos em ordem.
    let result = [];
    let i = 0, j = 0;

    // 2. Compare os elementos de nums1 e nums2 e adicione o menor ao resultado
    //    Usamos dois ponteiros (i para nums1 e j para nums2).
    //    Enquanto ambos tiverem elementos, comparamos nums1[i] e nums2[j]
    //    e adicionamos o menor ao array result.
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i]); // Adiciona nums1[i] se for menor
            i++;
        } else {
            result.push(nums2[j]); // Adiciona nums2[j] se for menor ou igual
            j++;
        }
    }

    // 3. Adicione os elementos restantes de nums1 (se houver)
    //    Se ainda restarem elementos em nums1, adicionamos todos ao result.
    while (i < m) {
        result.push(nums1[i]);
        i++;
    }

    // 4. Adicione os elementos restantes de nums2 (se houver)
    //    Se ainda restarem elementos em nums2, adicionamos todos ao result.
    while (j < n) {
        result.push(nums2[j]);
        j++;
    }

    // 5. Copie o resultado de volta para nums1
    //    Como o problema pede para modificar nums1 in-place,
    //    copiamos os elementos de result de volta para nums1.
    for (let k = 0; k < m + n; k++) {
        nums1[k] = result[k];
    }
}

// Complexidade de tempo: O(m + n), pois percorremos todos os elementos de ambos os arrays uma única vez.
// Complexidade de espaço: O(m + n), pois usamos um array auxiliar do mesmo tamanho que a soma dos dois arrays.