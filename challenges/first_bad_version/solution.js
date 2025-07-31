/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        // Inicializamos dois ponteiros: left (início) e right (fim) do intervalo de versões
        let left = 1;
        let right = n;

        // O loop continua enquanto left for menor que right
        // Quando left == right, encontramos a primeira versão ruim
        while (left < right) {
            // Calculamos o meio do intervalo para evitar overflow
            let mid = Math.floor((left + right) / 2);
            // Chamamos a API isBadVersion para saber se a versão do meio é ruim
            const result = isBadVersion(mid);

            if (result) {
                // Se mid é uma versão ruim, o primeiro bad version está em mid ou antes
                // Então movemos o ponteiro right para mid
                right = mid;
            } else {
                // Se mid NÃO é ruim, o primeiro bad version está depois de mid
                // Então movemos o ponteiro left para mid + 1
                left = mid + 1;
            }
        }
        // Quando left == right, encontramos a primeira versão ruim
        return left;
    };
};

/*
Explicação detalhada:
- Usamos busca binária porque queremos minimizar o número de chamadas à API isBadVersion.
- A cada iteração, dividimos o intervalo ao meio e eliminamos metade das possibilidades.
- O loop termina quando left encontra right, que será a primeira versão ruim.

Complexidade de Tempo (Time Complexity):
- O(log n), pois a cada iteração dividimos o intervalo pela metade.

Complexidade de Espaço (Space Complexity):
- O(1), pois usamos apenas variáveis auxiliares.
*/