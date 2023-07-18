// O intersection types eh usado como &

type TemNome = { nome: string };
type TemIdade = { idade: number };

type Person = TemNome & TemIdade;

const p1: Person = {
  nome: 'asd',
  idade: 23,
};

console.log(p1);
