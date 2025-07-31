// Função para verificar se uma string é um palíndromo, ignorando caracteres não alfanuméricos e diferenças entre maiúsculas/minúsculas
function isPalindrome(s) {
    // Passo 1: Remover todos os caracteres que não são letras ou números e converter para minúsculo
    // Usamos regex para filtrar apenas caracteres alfanuméricos
    const filtered = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Passo 2: Verificar se a string filtrada é igual à sua reversa
    // Se sim, é um palíndromo
    const reversed = filtered.split('').reverse().join('');
    return filtered === reversed;
}

/*
Complexidade de Tempo (Time Complexity):
- O(n), onde n é o tamanho da string de entrada. Cada operação (replace, toLowerCase, split, reverse, join) percorre a string uma vez.

Complexidade de Espaço (Space Complexity):
- O(n), pois criamos uma nova string filtrada e sua reversa, ambas de tamanho proporcional à entrada.
*/
