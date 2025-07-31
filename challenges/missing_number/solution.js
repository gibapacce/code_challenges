var missingNumber = function (nums) {
    // Passo 1: n é o tamanho do array
    const n = nums.length;
    // Passo 2: soma esperada de 0 até n
    const somaEsperada = n * (n + 1) / 2;
    // Passo 3: soma real dos elementos do array
    const somaReal = nums.reduce((acc, num) => acc + num, 0);
    // Passo 4: a diferença é o número que está faltando
    return somaEsperada - somaReal;
};

var missingNumber = function (nums) {
    let xor = 0;

    // Percorremos todos os índices do array (de 0 até nums.length - 1)
    // e também todos os valores do array nums.
    // A ideia é fazer XOR entre cada índice e o valor correspondente do array.
    // Isso porque, se todos os números de 0 a n estivessem presentes,
    // cada número se anularia com ele mesmo (por exemplo, 2 ^ 2 = 0).
    for (let i = 0; i < nums.length; i++) {
        // Fazemos XOR do acumulador com o índice i e com o valor nums[i].
        // Assim, todos os números presentes tanto nos índices quanto no array
        // vão se anular, sobrando apenas o número que está faltando.
        xor ^= i ^ nums[i];
    }

    // Após o loop, ainda falta fazer XOR com o último número do intervalo, que é n.
    // Isso porque os índices vão de 0 até n-1, mas o intervalo esperado é de 0 até n.
    // O número que está faltando não foi anulado, então ao fazer XOR com n,
    // o resultado final será exatamente o número ausente no array.
    xor ^= nums.length;

    // Retornamos o resultado
    return xor;
};

//Complexidade
//Tempo: O algoritmo é linear, O(n), pois percorre o array uma vez para somar ou fazer XOR.
//Espaço: O algoritmo é constante, O(1), pois usa apenas algumas variáveis extras, independentemente do tamanho do array.