// REST

const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocektseat'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);