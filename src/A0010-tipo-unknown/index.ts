// Tipo unknown, aconselhável usar unknown ao invez de any, por unknown ser mais seguro

let x: unknown;
x = 100;
x = 'qwe';
x = true;

console.log(x);
