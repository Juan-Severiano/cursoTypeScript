// // Any representa qualquer tipo, normalmente não é colocado no código pq vc quer

// function showMsg(msg: string) {
//   return msg;
// }

// const msg = showMsg('asdasdasdasdasdasdasd');
// console.log(msg);
import prompt from 'prompt-sync';
const userResponse = prompt();

if (typeof userResponse === 'number') {
  console.log('number');
}
