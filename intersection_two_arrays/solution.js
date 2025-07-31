// Função para encontrar a interseção de dois arrays
// Utiliza apenas um Set para armazenar os elementos únicos do primeiro array
// e percorre o segundo array para encontrar os elementos comuns


var intersection = function (nums1, nums2) {
    // Cria um Set com os elementos únicos de nums1
    // Isso permite buscas rápidas e elimina duplicatas automaticamente
    let set = new Set(nums1);
    // Array para armazenar o resultado da interseção
    let result = [];

    // Percorre cada elemento de nums2
    for (let num of nums2) {
        // Se o elemento estiver presente no Set,
        // significa que ele está em ambos os arrays
        if (set.has(num)) {
            result.push(num); // Adiciona ao resultado
            set.delete(num);  // Remove do Set para evitar duplicatas no resultado
        }
    }

    // Retorna o array com os elementos comuns, sem duplicatas
    return result;
};

// Complexidade de tempo: O(n + m), onde n = nums1.length e m = nums2.length
// Complexidade de espaço: O(n), para armazenar o Set dos elementos de nums1