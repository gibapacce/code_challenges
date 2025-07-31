var isPalindrome = function (x) {
    // Números negativos nunca são palíndromos (por causa do sinal '-')
    if (x < 0) return false;

    // Converte o número para string
    let str = x.toString();

    // Inverte a string usando split, reverse e join
    let reversedStr = str.split('').reverse().join('');

    // Compara a string original com a invertida
    return str === reversedStr;
};

// Complexidade de tempo: O(k), onde k é o número de dígitos de x
// Complexidade de espaço: O(k), para armazenar a string e a string invertida