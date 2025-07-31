
// Função que calcula o n-ésimo número de Fibonacci de forma recursiva
var fib = function (n) {
    // Caso base: se n for 0 ou 1, retorna o próprio n
    // fib(0) = 0, fib(1) = 1
    if (n == 0 || n == 1) {
        return n;
    }
    // Chamada recursiva: soma dos dois anteriores
    // fib(n) = fib(n-1) + fib(n-2)
    return fib(n - 1) + fib(n - 2)
};

//Complexidade
//Tempo: O algoritmo é exponencial, O(2^n), pois para cada chamada de fib(n), ele faz duas novas chamadas recursivas (fib(n-1) e fib(n-2)),
//resultando em muitas recomputações.
//Espaço: O algoritmo é O(n) devido à profundidade máxima da pilha de chamadas recursivas, que pode chegar até n.

