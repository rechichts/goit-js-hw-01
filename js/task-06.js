'user strict'

let input;
let total = 0;

do {
    let input = prompt ('Введи число');

    if (input === null) {
        break;
    } 

    input = Number(input);
    total += input;
} while (true);

console.log(`Общая сумма ${total}`);