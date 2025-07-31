// ═══════════════════════════════════════════════════════════════════════════
// 1. VALID PALINDROME (STRING)
// ═══════════════════════════════════════════════════════════════════════════
/**
 * PROBLEMA: Validar se string é palíndromo
 *
 * FLUXO DE PENSAMENTO:
 * - O que é um palíndromo? Uma string que lida de trás para frente é igual à original.
 * - O problema pede para ignorar maiúsculas/minúsculas e caracteres não alfanuméricos.
 * - Então, primeiro preciso limpar a string e padronizar o formato.
 * - Depois, basta comparar a string processada com sua reversa.
 *
 * ESTRATÉGIA:
 * 1. Remover caracteres não alfanuméricos com regex
 * 2. Converter tudo para minúsculas
 * 3. Comparar string processada com sua reversa
 * 4. Alternativa: usar two pointers para economia de espaço
 */
var isPalindromeString = function (s) {
    // Remove todos os caracteres que não são letras ou números e converte para minúsculo
    // Isso garante que só letras e números sejam considerados, ignorando espaços e pontuação
    const filtered = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    // Inverte a string filtrada para comparar com a original
    // split separa em array de caracteres, reverse inverte, join junta de volta em string
    const reversed = filtered.split("").reverse().join("");
    // Compara a string filtrada com sua reversa
    // Se forem iguais, é palíndromo
    return filtered === reversed;
};
// Complexidade: Tempo O(n) | Espaço O(n)
// Tempo O(n): Percorre a string uma vez para remover caracteres não-alfanuméricos e comparar com a reversa
// Espaço O(n): Cria uma string filtrada e sua reversa
// Razão: A complexidade de tempo é linear devido à iteração única sobre a string, 
// e o espaço é linear por criar strings adicionais.

// ═══════════════════════════════════════════════════════════════════════════
// 2. TWO SUM
// ═══════════════════════════════════════════════════════════════════════════
/**
 * PROBLEMA: Encontrar dois números que somam o alvo
 *
 * FLUXO DE PENSAMENTO:
 * - Preciso encontrar dois números no array cuja soma seja igual ao alvo.
 * - Se eu guardar os números já vistos, posso verificar rapidamente se o complemento já apareceu.
 * - Assim, para cada número, calculo o complemento e vejo se já vi esse valor antes.
 * - Se sim, achei a resposta; se não, continuo guardando os números.
 *
 * ESTRATÉGIA:
 * 1. Usar um objeto (hash map) para mapear números já vistos e seus índices
 * 2. Para cada número, calcular o complemento (target - número atual)
 * 3. Se o complemento já foi visto, retornar os índices
 * 4. Caso contrário, armazenar o número atual e seu índice
 */
var twoSum = function (nums, target) {
    // Cria um objeto para mapear números já vistos e seus índices
    var mapping = {};
    // Percorre o array uma vez
    for (let i = 0; i < nums.length; i++) {
        // Pega o número atual
        let actualNum = nums[i];
        // Calcula o complemento necessário para atingir o target
        let complement = target - actualNum;
        // Verifica se o complemento já foi visto antes
        if (mapping[complement] !== undefined) {
            // Se sim, retorna os índices: o do complemento já visto e o índice atual
            return [mapping[complement], i];
        } else {
            // Se não encontrou, armazena o número atual e seu índice no mapping
            mapping[actualNum] = i;
        }
    }
};
// Complexidade: Tempo O(n) | Espaço O(n)
// Tempo O(n): Percorre o array uma vez, cada busca/inserção no objeto é O(1) em média
// Espaço O(n): No pior caso, armazena todos os n números no objeto
// Razão: Cada elemento é processado uma vez e o hash map pode crescer até o tamanho do array.

// ROTEIRO DE EXPLICAÇÃO PARA ENTREVISTA:
// - Preciso encontrar dois números que somam o alvo. Usei hash map para guardar os já vistos.
// - Para cada número, calculo o complemento e verifico se já vi antes. Se sim, retorno os índices.
// - Hash map permite busca O(1), evitando dois loops.

// ═══════════════════════════════════════════════════════════════════════════
// 3. PALINDROME NUMBER
// ═══════════════════════════════════════════════════════════════════════════
/**
 * PROBLEMA: Verificar se um número inteiro é palíndromo
 *
 * FLUXO DE PENSAMENTO:
 * - Um número é palíndromo se lido de trás para frente for igual ao original.
 * - Números negativos nunca são palíndromos (por causa do sinal).
 * - A forma mais simples é converter para string e comparar com a reversa.
 *
 * ESTRATÉGIA:
 * 1. Números negativos nunca são palíndromos
 * 2. Converter o número para string
 * 3. Comparar a string com sua reversa
 */
var isPalindromeNumber = function (x) {
    // Números negativos nunca são palíndromos (por causa do sinal '-'), retorna false
    if (x < 0) return false;
    // Converte o número para string para facilitar a inversão
    // Converter o número para string (x.toString()) percorre todos os dígitos → O(k)
    let str = x.toString();
    // Inverte a string usando split, reverse e join
    let reversedStr = str.split('').reverse().join('');
    // Compara a string original com a invertida
    return str === reversedStr;
};
// Complexidade: Tempo O(k) | Espaço O(k)
// k = número de dígitos de x
// Exemplos:
// Se x = 12321, então k = 5.
// Se x = 123456789, então k = 9.
// Tempo O(k): Percorre a string de dígitos
// Espaço O(k): Cria a string e sua reversa
// Razão: Cada dígito é processado uma vez e são criadas strings auxiliares do mesmo tamanho.

// ROTEIRO DE EXPLICAÇÃO PARA ENTREVISTA:
// - Um número é palíndromo se lido de trás para frente for igual ao original. Números negativos nunca são palíndromos.
// - Converti para string e comparei com a reversa. Alternativa: inverter matematicamente.

// ═══════════════════════════════════════════════════════════════════════════
// 4. MISSING NUMBER (SOMA)
// ═══════════════════════════════════════════════════════════════════════════
/**
 * PROBLEMA: Encontrar o número ausente em sequência 0..n
 *
 * FLUXO DE PENSAMENTO:
 * - O array deveria conter todos os números de 0 a n, mas falta um.
 * - Se eu souber a soma esperada de 0 a n e subtrair a soma real, encontro o ausente.
 * - Uso a fórmula da soma de uma progressão aritmética para isso.
 *
 * ESTRATÉGIA:
 * 1. Calcular a soma esperada de 0 até n
 * 2. Calcular a soma real do array
 * 3. A diferença é o número ausente
 */
var missingNumberSum = function (nums) {
    // n é o tamanho do array
    const n = nums.length;
    // Soma esperada de 0 até n (fórmula da soma de uma PA)
    const somaEsperada = n * (n + 1) / 2;
    // Soma real dos elementos do array
    const somaReal = nums.reduce((acc, num) => acc + num, 0);
    // A diferença é o número que está faltando
    return somaEsperada - somaReal;
};
// Complexidade: Tempo O(n) | Espaço O(1)
// Tempo O(n): Percorre o array uma vez para somar
// Espaço O(1): Usa apenas variáveis extras
// Razão: Apenas uma passagem pelo array e não há uso de estruturas auxiliares proporcionais ao tamanho do array.

// ROTEIRO DE EXPLICAÇÃO PARA ENTREVISTA:
// - O array deveria conter todos os números de 0 a n, mas falta um. Calculei a soma esperada e subtraí a soma real.
// - Uso a fórmula da soma de PA. Não precisa de espaço extra.

// ═══════════════════════════════════════════════════════════════════════════
// 5. MISSING NUMBER (XOR)
// ═══════════════════════════════════════════════════════════════════════════
/**
 * PROBLEMA: Encontrar o número ausente usando XOR
 *
 * FLUXO DE PENSAMENTO:
 * - O XOR de um número com ele mesmo é zero, e com zero é ele mesmo.
 * - Se eu fizer XOR de todos os índices e todos os valores do array, os números presentes duas vezes se anulam.
 * - O número que falta só aparece uma vez, então sobra ele no final.
 *
 * ESTRATÉGIA:
 * 1. Fazer XOR entre todos os índices e todos os valores do array
 * 2. Fazer XOR com n ao final
 * 3. O resultado é o número ausente
 */
var missingNumberXor = function (nums) {
    // Inicializa o acumulador XOR
    let xor = 0;
    // Percorre todos os índices e valores do array
    for (let i = 0; i < nums.length; i++) {
        // XOR compara cada bit dos dois números e retorna 1 se forem diferentes, 0 se iguais.
        // Exemplo: 5 ^ 3 = 6, pois 101 ^ 011 = 110
        // Aqui o XOR faz o acumulado entre o índice e o valor do array,
        // "cancelando" os números que aparecem duas vezes e deixando só o que está faltando.
        xor ^= i ^ nums[i];
    }
    // Faz XOR com o último número do intervalo (n)
    xor ^= nums.length;
    // O resultado é o número ausente
    return xor;
};

// O XOR “cancela” todos os números que aparecem duas vezes (como índice e como valor).
// O único número que não é cancelado é o que está faltando, pois ele só aparece uma vez
// (como índice ou como valor, mas não nos dois).

// Complexidade: Tempo O(n) | Espaço O(1)
// Tempo O(n): Percorre o array uma vez
// Espaço O(1): Apenas variáveis extras
// Razão: Cada elemento é processado uma vez e só são usadas variáveis simples.

// ROTEIRO DE EXPLICAÇÃO PARA ENTREVISTA:
// - O XOR de um número com ele mesmo é zero, e com zero é ele mesmo. Fiz XOR de todos os índices e valores.
// - O número que falta só aparece uma vez, então sobra ele no final. Não usa espaço extra.


//Solução ordenação do array
// Ordenar o array e procurar o primeiro índice onde o valor não bate com o índice.
var missingNumberSort = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) return i;
    }
    return nums.length;
}

// ═══════════════════════════════════════════════════════════════════════════
// 6. MERGE SORTED ARRAY
// ═══════════════════════════════════════════════════════════════════════════
/**
 * PROBLEMA: Mesclar dois arrays ordenados nums1 e nums2
 *
 * FLUXO DE PENSAMENTO:
 * - Preciso juntar dois arrays já ordenados em um só, mantendo a ordem.
 * - Se eu comparar os menores elementos disponíveis de cada array, sempre posso escolher o menor para o resultado.
 * - Uso dois ponteiros para percorrer ambos os arrays e vou adicionando o menor ao resultado.
 * - Depois, adiciono o que sobrou de cada array.
 *
 * ESTRATÉGIA:
 * 1. Usar ponteiros para comparar elementos de nums1 e nums2
 * 2. Adicionar o menor ao resultado
 * 3. Copiar o resultado de volta para nums1
 */
var merge = function (nums1, m, nums2, n) {
    // Cria um novo array para armazenar o resultado da mesclagem
    let result = [];
    // Ponteiros para percorrer nums1 e nums2
    let i = 0, j = 0;
    // Loop principal do merge:
    // Enquanto ainda houver elementos para comparar em ambos os arrays,
    // compare o elemento atual de nums1 (nums1[i]) com o de nums2 (nums2[j]).
    // Sempre adicione ao resultado o menor dos dois e avance o ponteiro correspondente.
    // Isso garante que o array resultante fique ordenado.
    while (i < m && j < n) {
        // Se o elemento atual de nums1 for menor que o de nums2,
        // adicione nums1[i] ao resultado e avance o ponteiro i.
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i]); // Adiciona nums1[i] se for menor
            i++;
        } else {
            // Caso contrário, adicione nums2[j] ao resultado e avance o ponteiro j.
            result.push(nums2[j]); // Adiciona nums2[j] se for menor ou igual
            j++;
        }
    }
    // Adiciona os elementos restantes de nums1 (se houver)
    while (i < m) {
        result.push(nums1[i]);
        i++;
    }
    // Adiciona os elementos restantes de nums2 (se houver)
    while (j < n) {
        result.push(nums2[j]);
        j++;
    }
    // Copia o resultado de volta para nums1 (in-place)
    for (let k = 0; k < m + n; k++) {
        nums1[k] = result[k];
    }
};
// Complexidade: Tempo O(m + n) | Espaço O(m + n)
// Tempo O(m + n): Percorre todos os elementos de ambos os arrays
// Espaço O(m + n): Usa array auxiliar
// Razão: Cada elemento de ambos os arrays é processado uma vez e o array auxiliar tem tamanho proporcional à soma dos dois arrays.

// ROTEIRO DE EXPLICAÇÃO PARA ENTREVISTA:
// - Preciso juntar dois arrays ordenados em um só, mantendo a ordem. Usei dois ponteiros e sempre adiciono o menor ao resultado.
// - Depois, adiciono o que sobrou de cada array. É o padrão do merge do merge sort.

// ═══════════════════════════════════════════════════════════════════════════
// 7. MAX CONSECUTIVE ONES
// ═══════════════════════════════════════════════════════════════════════════
/**
 * PROBLEMA: Encontrar o maior número de 1s consecutivos em um array de 0s e 1s
 *
 * FLUXO DE PENSAMENTO:
 * - Quero saber a maior sequência de 1s seguidos.
 * - Preciso de um contador para a sequência atual e outro para o máximo já visto.
 * - Sempre que encontrar um 0, comparo e atualizo o máximo, e reinicio o contador.
 * - No final, comparo de novo para o caso da sequência terminar no último elemento.
 *
 * ESTRATÉGIA:
 * 1. Percorrer o array contando sequências de 1s
 * 2. Atualizar o máximo sempre que encontrar um 0
 */
var findMaxConsecutiveOnes = function (nums) {
    // Contador da sequência atual de 1s
    var currCount = 0;
    // Guarda o maior número de 1s consecutivos encontrados até agora
    var maxCount = 0;
    // Percorre todo o array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            // Se for 1, incrementa o contador da sequência atual
            currCount++;
        } else {
            // Se encontrar 0, atualiza o máximo e zera o contador
            maxCount = Math.max(maxCount, currCount);
            currCount = 0;
        }
    }
    // Última comparação para o caso da maior sequência estar no final
    return Math.max(maxCount, currCount);
};
// Complexidade: Tempo O(n) | Espaço O(1)
// Tempo O(n): Percorre o array uma vez
// Espaço O(1): Apenas variáveis extras
// Razão: Cada elemento é processado uma vez e não há uso de estruturas auxiliares.

// ROTEIRO DE EXPLICAÇÃO PARA ENTREVISTA:
// - Quero saber a maior sequência de 1s seguidos. Usei um contador para a sequência atual e outro para o máximo já visto.
// - Sempre que encontro um 0, atualizo o máximo e reinicio o contador.

// ═══════════════════════════════════════════════════════════════════════════
// 8. MAJORITY ELEMENT
// ═══════════════════════════════════════════════════════════════════════════
/**
 * PROBLEMA: Encontrar o elemento majoritário em um array
 *
 * FLUXO DE PENSAMENTO:
 * - O elemento majoritário aparece mais da metade das vezes.
 * - Se eu ordenar o array, o elemento do meio obrigatoriamente será o majoritário.
 * - Assim, basta ordenar e pegar o elemento central.
 *
 * ESTRATÉGIA:
 * 1. Ordenar o array
 * 2. Retornar o elemento do meio
 */
var majorityElement = function (nums) {
    // Ordena o array em ordem crescente
    nums.sort((a, b) => a - b);
    // Retorna o elemento que está na posição do meio do array
    // Como o elemento majoritário aparece mais da metade das vezes,
    // ele sempre estará na posição central após a ordenação
    return nums[Math.floor(nums.length / 2)];
};
// Complexidade: Tempo O(n log n) | Espaço O(1) se sort in-place
// Tempo O(n log n): Devido à ordenação
// Espaço O(1): Se sort in-place
// Razão: O passo dominante é a ordenação, e se feita in-place não há uso extra de memória proporcional ao array.

// ROTEIRO DE EXPLICAÇÃO PARA ENTREVISTA:
// - O elemento majoritário aparece mais da metade das vezes. Ordenei o array e peguei o elemento do meio.
// - Alternativa: algoritmo de Boyer-Moore para O(n) tempo e O(1) espaço.

// ═══════════════════════════════════════════════════════════════════════════
// 9. INTERSECTION OF TWO ARRAYS
// ═══════════════════════════════════════════════════════════════════════════
/**
 * PROBLEMA: Encontrar a interseção de dois arrays
 *
 * FLUXO DE PENSAMENTO:
 * - Quero saber quais elementos aparecem nos dois arrays.
 * - Se eu guardar os elementos do primeiro array em um Set, posso verificar rapidamente se um elemento do segundo array está presente.
 * - Para evitar duplicatas no resultado, removo do Set quando encontro.
 *
 * ESTRATÉGIA:
 * 1. Usar Set para armazenar elementos únicos do primeiro array
 * 2. Percorrer o segundo array e verificar se está no Set
 * 3. Adicionar ao resultado e remover do Set para evitar duplicatas
 */
var intersection = function (nums1, nums2) {
    // Cria um Set com os elementos únicos de nums1
    let set = new Set(nums1);
    // Array para armazenar o resultado da interseção
    let result = [];
    // Percorre cada elemento de nums2
    for (let num of nums2) {
        // Se o elemento estiver presente no Set, está em ambos os arrays
        if (set.has(num)) {
            result.push(num); // Adiciona ao resultado
            set.delete(num);  // Remove do Set para evitar duplicatas no resultado
        }
    }
    // Retorna o array com os elementos comuns, sem duplicatas
    return result;
};
// Complexidade: Tempo O(n + m) | Espaço O(n)
// Tempo O(n + m): n = nums1.length, m = nums2.length
// Espaço O(n): Para armazenar o Set
// Razão: Cada elemento de nums1 e nums2 é processado uma vez e o Set pode crescer até o tamanho de nums1.

// ROTEIRO DE EXPLICAÇÃO PARA ENTREVISTA:
// - Quero saber quais elementos aparecem nos dois arrays. Guardei os do primeiro array em um Set.
// - Para cada elemento do segundo, verifico se está no Set e adiciono ao resultado.

// ═══════════════════════════════════════════════════════════════════════════
// 10. FIRST BAD VERSION
// ═══════════════════════════════════════════════════════════════════════════
/**
 * PROBLEMA: Encontrar a primeira versão ruim
 *
 * FLUXO DE PENSAMENTO:
 * - Preciso minimizar o número de chamadas à API isBadVersion.
 * - Se uma versão é ruim, todas as seguintes também são.
 * - Uso busca binária para encontrar o ponto de transição entre versões boas e ruins.
 *
 * ESTRATÉGIA:
 * 1. Usar busca binária para minimizar chamadas à API
 * 2. Ajustar ponteiros left/right conforme resultado de isBadVersion
 */
var solution = function (isBadVersion) {
    // Retorna uma função que recebe n (total de versões)
    return function (n) {
        // Inicializa ponteiros do início e fim do intervalo de versões
        let left = 1;
        let right = n;
        // Loop até os ponteiros se encontrarem
        while (left < right) {
            // Calcula o meio do intervalo
            let mid = Math.floor((left + right) / 2);
            // Se a versão do meio é ruim, o primeiro bad version está em mid ou antes
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                // Se não é ruim, o primeiro bad version está depois de mid
                left = mid + 1;
            }
        }
        // Quando left == right, encontramos a primeira versão ruim
        return left;
    };
};
// Complexidade: Tempo O(log n) | Espaço O(1)
// Tempo O(log n): Busca binária
// Espaço O(1): Apenas variáveis auxiliares
// Razão: A cada iteração o espaço de busca é reduzido pela metade e só são usadas variáveis simples.

// ROTEIRO DE EXPLICAÇÃO PARA ENTREVISTA:
// - Preciso minimizar o número de chamadas à API isBadVersion. Usei busca binária para encontrar o ponto de transição.
// - Busca binária é ideal para problemas de transição ordenada.

// ═══════════════════════════════════════════════════════════════════════════
// 11. FIBONACCI (RECURSIVO)
// ═══════════════════════════════════════════════════════════════════════════
/**
 * PROBLEMA: Calcular o n-ésimo número de Fibonacci (recursivo)
 *
 * FLUXO DE PENSAMENTO:
 * - O número de Fibonacci é a soma dos dois anteriores.
 * - Para n = 0 ou n = 1, o valor é o próprio n.
 * - Para n maior, chamo recursivamente para n-1 e n-2.
 *
 * ESTRATÉGIA:
 * 1. Caso base: n = 0 ou n = 1
 * 2. Chamada recursiva: fib(n-1) + fib(n-2)
 */
var fib = function (n) {
    // Caso base: se n for 0 ou 1, retorna o próprio n
    if (n == 0 || n == 1) {
        return n;
    }
    // Chamada recursiva: soma dos dois anteriores
    return fib(n - 1) + fib(n - 2);
};
// Complexidade: Tempo O(2^n) | Espaço O(n)
// Tempo O(2^n): Muitas recomputações recursivas
// Espaço O(n): Profundidade da pilha de chamadas
// Razão: Cada chamada recursiva pode gerar duas novas chamadas e a pilha pode chegar até n níveis.

// ROTEIRO DE EXPLICAÇÃO PARA ENTREVISTA:
// - O número de Fibonacci é a soma dos dois anteriores. Para n = 0 ou n = 1, o valor é o próprio n.
// - Para n maior, chamo recursivamente para n-1 e n-2. Alternativa: bottom-up para evitar recomputações.

// ═══════════════════════════════════════════════════════════════════════════
// 12. CONTAINS DUPLICATE
// ═══════════════════════════════════════════════════════════════════════════
/**
 * PROBLEMA: Verificar se existe número duplicado no array
 *
 * FLUXO DE PENSAMENTO:
 * - Preciso saber se algum número aparece mais de uma vez.
 * - Se eu guardar os números já vistos em um Set, posso verificar rapidamente se já vi o número.
 * - Se encontrar, retorno true; se não, continuo.
 *
 * ESTRATÉGIA:
 * 1. Usar Set para armazenar elementos já vistos
 * 2. Se encontrar duplicado, retornar true
 */
var containsDuplicate = function (nums) {
    // Cria um conjunto (Set) para armazenar os números já vistos
    const validatedElement = new Set();
    // Percorre cada número do array
    for (let number of nums) {
        // Verifica se o número já está no conjunto
        if (validatedElement.has(number)) {
            // Se estiver, significa que já apareceu antes (é duplicado)
            return true;
        }
        // Se não estiver, adiciona o número ao conjunto para futuras verificações
        validatedElement.add(number);
    }
    // Se terminar o loop sem encontrar duplicados, retorna false
    return false;
};
// Complexidade: Tempo O(n) | Espaço O(n)
// Tempo O(n): Percorre o array uma vez
// Espaço O(n): No pior caso, todos os elementos são únicos
// Razão: Cada elemento é processado uma vez e o Set pode crescer até o tamanho do array.

// ROTEIRO DE EXPLICAÇÃO PARA ENTREVISTA:
// - Preciso saber se algum número aparece mais de uma vez. Guardei os já vistos em um Set.
// - Se encontrar, retorno true; se não, continuo. Set permite busca rápida.

// ═══════════════════════════════════════════════════════════════════════════
// 13. CLIMBING STAIRS
// ═══════════════════════════════════════════════════════════════════════════
/**
 * PROBLEMA: Quantas maneiras de subir n degraus (1 ou 2 por vez)
 *
 * FLUXO DE PENSAMENTO:
 * - Para chegar ao degrau n, posso vir do n-1 (subindo 1) ou do n-2 (subindo 2).
 * - O número de maneiras de chegar em n é a soma das maneiras de chegar em n-1 e n-2.
 * - Para n = 1 ou n = 2, o valor é o próprio n.
 * - Uso variáveis para guardar os dois últimos resultados e somo até n.
 *
 * ESTRATÉGIA:
 * 1. Caso base: n = 1 ou n = 2
 * 2. Para n >= 3, usar bottom-up com variáveis para os dois últimos resultados
 */
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
// Complexidade: Tempo O(n) | Espaço O(1)
// Tempo O(n): Percorre de 3 até n
// Espaço O(1): Apenas variáveis extras
// Razão: Cada degrau é processado uma vez e só são usadas variáveis simples.

// ROTEIRO DE EXPLICAÇÃO PARA ENTREVISTA:
// - Para chegar ao degrau n, posso vir do n-1 (subindo 1) ou do n-2 (subindo 2). O número de maneiras é a soma dos dois anteriores.
// - Para n = 1 ou n = 2, o valor é o próprio n. Usei variáveis para guardar os dois últimos resultados.

// ═══════════════════════════════════════════════════════════════════════════
// 14. BINARY SEARCH
// ═══════════════════════════════════════════════════════════════════════════
/**
 * PROBLEMA: Busca binária em array ordenado
 *
 * FLUXO DE PENSAMENTO:
 * - Preciso encontrar rapidamente um elemento em um array ordenado.
 * - Uso dois ponteiros (início e fim) e sempre comparo o meio.
 * - Se o valor do meio for o alvo, achei; se não, descarto metade do array.
 * - Repito até encontrar ou acabar o array.
 *
 * ESTRATÉGIA:
 * 1. Inicializar ponteiros left/right
 * 2. Enquanto left <= right, calcular mid
 * 3. Comparar target com nums[mid] e ajustar ponteiros
 */
var search = function (nums, target) {
    // Inicializa os ponteiros do início e fim do array
    let left = 0;
    let right = nums.length - 1;
    // Enquanto a janela de busca for válida
    while (left <= right) {
        // Calcula o índice do meio da janela
        let mid = Math.floor((left + right) / 2);
        // Se o elemento do meio for o target, retorna o índice
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            // Se o target for maior que o elemento do meio, descarta a metade esquerda
            left = mid + 1;
        } else {
            // Se o target for menor, descarta a metade direita
            right = mid - 1;
        }
    }
    // Se não encontrar, retorna -1
    return -1;
};
// Complexidade: Tempo O(log n) | Espaço O(1)
// Tempo O(log n): Busca binária
// Espaço O(1): Apenas variáveis auxiliares
// Razão: A cada iteração metade do array é descartada e não há uso de estruturas auxiliares.

// ROTEIRO DE EXPLICAÇÃO PARA ENTREVISTA:
// - Preciso encontrar rapidamente um elemento em um array ordenado. Uso dois ponteiros e sempre comparo o meio.
// - Se o valor do meio for o alvo, achei; se não, descarto metade do array.

// ═══════════════════════════════════════════════════════════════════════════
// 15. BEST TIME TO BUY AND SELL STOCK
// ═══════════════════════════════════════════════════════════════════════════
/**
 * PROBLEMA: Calcular o lucro máximo ao comprar e vender uma ação
 *
 * FLUXO DE PENSAMENTO:
 * - Preciso comprar no menor preço possível e vender no maior preço depois disso.
 * - Percorro o array, guardando o menor preço até o momento.
 * - Para cada preço, calculo o lucro se vendesse hoje e atualizo o máximo se for maior.
 *
 * ESTRATÉGIA:
 * 1. Percorrer o array mantendo o menor preço até o momento
 * 2. Calcular o lucro máximo possível a cada dia
 */
var maxProfit = function (prices) {
    // Inicializa o menor preço como infinito (para garantir que qualquer preço será menor)
    let minPrice = Infinity;
    // Inicializa o lucro máximo como 0
    let maxProfit = 0;
    // Percorre cada preço no array
    for (let i = 0; i < prices.length; i++) {
        // Se o preço atual for menor que o menor preço já visto, atualiza minPrice
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            // Caso contrário, calcula o lucro se vendesse hoje
            let profit = prices[i] - minPrice;
            // Atualiza o lucro máximo se esse lucro for maior
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    // Retorna o lucro máximo encontrado
    return maxProfit;
};
// Complexidade: Tempo O(n) | Espaço O(1)
// Tempo O(n): Percorre o array uma vez
// Espaço O(1): Apenas variáveis extras
// Razão: Cada elemento é processado uma vez e só são usadas variáveis simples.

// ROTEIRO DE EXPLICAÇÃO PARA ENTREVISTA:
// - Preciso comprar no menor preço possível e vender no maior preço depois disso. Guardo o menor preço até o momento.
// - Para cada preço, calculo o lucro se vendesse hoje e atualizo o máximo se for maior.

// ═══════════════════════════════════════════════════════════════════════════
// 16. AVERAGE SALARY EXCLUDING MIN AND MAX
// ═══════════════════════════════════════════════════════════════════════════
/**
 * PROBLEMA: Calcular a média salarial excluindo o menor e o maior salário
 *
 * FLUXO DE PENSAMENTO:
 * - Preciso calcular a média dos salários, mas ignorando o menor e o maior.
 * - Encontro o menor e o maior salário, somo todos e subtraio esses dois.
 * - Divido pelo número de salários restantes para obter a média.
 *
 * ESTRATÉGIA:
 * 1. Encontrar min e max
 * 2. Somar todos os salários
 * 3. Subtrair min e max da soma
 * 4. Dividir pelo número de salários restantes
 */
var average = function (salary) {
    // Encontra o menor salário do array
    const minSalary = Math.min(...salary);
    // Encontra o maior salário do array
    const maxSalary = Math.max(...salary);
    // Soma todos os salários
    const totalSum = salary.reduce((accumulator, value) => accumulator + value, 0);
    // Subtrai o menor e o maior salário da soma total
    const sumWithoutMinMax = totalSum - minSalary - maxSalary;
    // Calcula a quantidade de salários considerados (excluindo min e max)
    const count = salary.length - 2;
    // Calcula a média dos salários restantes
    const averageSalary = sumWithoutMinMax / count;
    // Retorna o resultado final
    return averageSalary;
};
// Complexidade: Tempo O(n) | Espaço O(1)
// Tempo O(n): min, max e reduce percorrem o array
// Espaço O(1): Apenas variáveis extras
// Razão: Cada operação percorre o array uma vez e não há uso de estruturas auxiliares proporcionais ao tamanho do array.

// ROTEIRO DE EXPLICAÇÃO PARA ENTREVISTA:
// - Preciso calcular a média dos salários, mas ignorando o menor e o maior. Encontro o menor e o maior, somo todos e subtraio esses dois.
// - Divido pelo número de salários restantes para obter a média.