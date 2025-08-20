# Code Challenges

Este repositório reúne soluções de problemas clássicos de entrevistas. Cada pasta em `challenges/` contém um `problem.txt` (enunciado) e um `solution.js` (solução em JavaScript).

## Estrutura do Projeto

- `index.html`: Interface visual com fluxogramas de pensamento (não executa os algoritmos)
- `style.css`: Estilos da interface
- `scripts.js`: Script da interface
- `challenges/<problema>/`
  - `problem.txt`: Enunciado
  - `solution.js`: Solução em JS

## Lista de Problemas

- [average_sal_excluding_min_max](challenges/average_sal_excluding_min_max/)
- [best_time_to_buy](challenges/best_time_to_buy/)
- [binary_search](challenges/binary_search/)
- [climbing_stairs](challenges/climbing_stairs/)
- [contains_duplicate](challenges/contains_duplicate/)
- [fibonacci](challenges/fibonacci/)
- [first_bad_version](challenges/first_bad_version/)
- [intersection_two_arrays](challenges/intersection_two_arrays/)
- [majority_element](challenges/majority_element/)
- [max_consecutive_ones](challenges/max_consecutive_ones/)
- [merged_sorted_array](challenges/merged_sorted_array/)
- [missing_number](challenges/missing_number/)
- [Palindrome Number](challenges/Palindrome%20Number/)
- [two_sum](challenges/two_sum/)
- [valid_palindrome](challenges/valid_palindrome/)

## Pré-requisitos

- Node.js >= 18

## Como Usar

1. Navegue até a pasta do problema desejado em `challenges/<problema>/`.
2. Leia o enunciado em `problem.txt`.
3. Estude a solução em `solution.js`.

Opcionalmente, exporte a função para facilitar testes no Node:

```js
// no final do solution.js
module.exports = search; // ajuste o nome da função conforme o problema
```

Então rode um teste simples:

```bash
node -e "const f=require('./challenges/binary_search/solution.js'); console.log(f([-1,0,3,5,9,12],9))"
```

Sem export: copie o conteúdo de `solution.js` no REPL do Node e chame a função manualmente.

## Objetivo

Servir como material de estudo e referência para entrevistas técnicas (algoritmos e estruturas de dados).

## Contribuição

- Faça um fork
- Crie uma branch: `git checkout -b feat/novo-problema`
- Commit: `git commit -m "feat: solução para <problema>"`
- Abra um Pull Request com descrição do problema e abordagem
