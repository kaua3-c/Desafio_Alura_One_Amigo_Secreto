//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Declaração das variáveis
let arrayAmigos = [];
let amigo = document.getElementById("amigo");
listaAmigos = document.getElementById("listaAmigos");
titulo = document.getElementById("titulo");

//Função para adicionar um amigo à array, ele não pode ser um nome vazio. 
// Além disso, exibe a lista de amigos cadastrados em formato de lista
function adicionarAmigo() {
  if (amigo.value === "" || /[0-9]/.test(amigo.value)) {
    alert("Por favor digite um nome válido, ele não pode conter numeros ou ser vazio!");

    return;
  }
  arrayAmigos.push(amigo.value);
  listaAmigos.innerHTML = arrayAmigos.join("<br>");
  amigo.value = "";
  document.getElementById("sortearAmigo").disabled = false;
}
//função para sortear o amigo secreto, ela sorteia um número aleatório dentro do array e exibe o nome sorteado,
//  ao final verifica se ainda há nomes diponiveis, removendo o nome sorteado e atualizando a lista.
function sortearAmigo() {
  let amigoSorteado = Math.floor(Math.random() * arrayAmigos.length);
  console.log(arrayAmigos.length);
  if (amigoSorteado === null || arrayAmigos.length === 0) {
    document.getElementById("sortearAmigo").disabled = true;
    listaAmigos.innerHTML = "Não há mais amigos para sortear, me desculpe :/";
  }

  arrayAmigos.length != 0
    ? (titulo.innerHTML = `o amigo sorteado é: ${arrayAmigos[amigoSorteado]}`)
    : (titulo.innerHTML = `não há amigos cadastrados, por favor adicione um amigo!`);

  arrayAmigos.splice(amigoSorteado, 1);
  listaAmigos.innerHTML = arrayAmigos.join("<br>");
}
