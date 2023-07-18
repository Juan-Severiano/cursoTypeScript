// Quando um retorno de funcao tem mais de um retorno, para quie possa retornar algum outro tipo

function add(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add('asd', 'asdasddddd'));
