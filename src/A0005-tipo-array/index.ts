// Tipo Array<T> - T[]

function multiArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const res3 = toUpperCase('sad', 'qwe');
const res2 = concatString('sad', 'qwe');
const res = multiArgs(1, 54, 2, 5);
console.log(res);
console.log(res2);
console.log(res3);
