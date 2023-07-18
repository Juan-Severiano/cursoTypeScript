// O type alias seria como o apelido dado a um tipo

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario?: number;
  favoriteColor: CorRGB;
};

const pessoa: Pessoa = { nome: 'asd', idade: 23, favoriteColor: 'Azul' };

console.log(pessoa);
