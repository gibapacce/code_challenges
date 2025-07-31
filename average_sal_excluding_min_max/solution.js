var average = function (salary) {
    // Usamos Math.min e Math.max para encontrar rapidamente o menor e o maior salário.
    // Essas funções são eficientes e evitam a necessidade de percorrer manualmente o 
    // array para comparar valores.
    const minSalary = Math.min(...salary);
    const maxSalary = Math.max(...salary);

    // Utilizamos o método reduce para somar todos os salários do array de forma concisa e funcional.
    // O reduce permite acumular valores em uma única linha, tornando o código mais limpo e legível.
    const totalSum = salary.reduce((accumulator, value) => accumulator + value, 0);

    // Subtraímos o menor e o maior salário da soma total para excluir esses valores do cálculo da média.
    // Essa abordagem evita a necessidade de criar um novo array sem esses valores.
    const sumWithoutMinMax = totalSum - minSalary - maxSalary;

    // Calculamos a quantidade de salários considerados, subtraindo 2 do tamanho original do array,
    // já que sempre removemos o menor e o maior. Isso garante que a média será feita apenas com os 
    // valores corretos.
    const count = salary.length - 2;

    // Dividimos a soma dos salários restantes pela quantidade para obter a média.
    // Essa é a forma mais direta e eficiente de calcular a média após a exclusão dos extremos.
    const averageSalary = sumWithoutMinMax / count;

    // Retornamos o resultado final.
    return averageSalary;
};

//Complexidade
//Tempo: O algoritmo é linear, O(n), pois percorre o array algumas vezes (para min, max e reduce), mas todas são O(n).
//Espaço: O algoritmo é constante, O(1), pois usa apenas variáveis extras e não cria estruturas proporcionais ao tamanho do array.