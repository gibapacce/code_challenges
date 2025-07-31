// A ideia é que o número de maneiras de chegar ao degrau n é a soma das maneiras de chegar ao degrau n-1 e n-2.
// Isso porque, para chegar ao degrau n, você pode vir do n-1 (subindo 1 degrau) ou do n-2 (subindo 2 degraus).

var climbStairs = function (n) {
    // Caso base: se n for 1 ou 2, retorna n (há 1 ou 2 maneiras de subir)
    if (n <= 2) return n;

    // Inicializa as variáveis para armazenar as maneiras de chegar nos degraus anteriores
    let oneStepBefore = 2; // Maneiras de chegar no degrau n-1
    let twoStepsBefore = 1; // Maneiras de chegar no degrau n-2
    let allWays = 0;

    // Calcula para cada degrau a partir do 3 até n
    for (let i = 3; i <= n; i++) {
        // O total de maneiras de chegar no degrau atual é a soma dos dois anteriores
        allWays = oneStepBefore + twoStepsBefore;
        // Atualiza as variáveis para o próximo loop
        twoStepsBefore = oneStepBefore;
        oneStepBefore = allWays;
    }

    // Retorna o total de maneiras de chegar ao topo
    return allWays;
};

// Complexidade de tempo: O(n), pois percorremos todos os degraus de 3 até n uma vez.
// Complexidade de espaço: O(1), pois usamos apenas variáveis para armazenar os dois últimos resultados.
