//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Declaração das variáveis
let arrayAmigos = [];
let amigo = document.getElementById("amigo");
listaAmigos = document.getElementById("listaAmigos");
resultado = document.getElementById("resultado");
mensagemLista = document.getElementById("mensagemLista");
const botao = document.createElement("button");
botao.textContent = "Remover";
//Função para adicionar um amigo à array, ele não pode ser um nome vazio.
// Além disso, exibe a lista de amigos cadastrados em formato de lista

function adicionarAmigo() {
  const nome = amigo.value.trim();
  if (nome === "" || /[0-9]/.test(nome)) {
    alert(
      "Por favor digite um nome válido, ele não pode conter números ou ser vazio!"
    );
    return;
  }
  resultado.innerHTML = "";
  arrayAmigos.push(nome);
  renderizarLista();

  amigo.value = "";
  document.getElementById("sortearAmigo").disabled = false;
}

function renderizarLista() {
  listaAmigos.innerHTML = "";

  if (arrayAmigos.length === 0) {
    mensagemLista.innerHTML =
      "Ainda não há amigos secretos na lista, adicione um :)";
    return;
  } else {
    mensagemLista.innerHTML = "";
  }

  arrayAmigos.forEach((nome, index) => {
    listaAmigos.innerHTML += `
      <tr>
        <td >${nome}</td>
        <td >
            <a href="#" onclick="removerAmigo(${index})" class="deletar" title="Deletar">
            <img src="./assets/delete.png" alt="remover amigo">
            </a>
            <br>
          </div>
        </td>
      </tr>
    `;
  });
}

//função para sortear o amigo secreto, ela sorteia um número aleatório dentro do array e exibe o nome sorteado,
//  ao final verifica se ainda há nomes diponiveis, removendo o nome sorteado e atualizando a lista.
function sortearAmigo() {
  let amigoSorteado = Math.floor(Math.random() * arrayAmigos.length);
  
  if (amigoSorteado === null || arrayAmigos.length === 0) {
    document.getElementById("sortearAmigo").disabled = true;
    listaAmigos.innerHTML = "Não há mais amigos para sortear, me desculpe :/";
  }
  arrayAmigos.length != 0
    ? ((resultado.innerHTML = `o amigo sorteado é: ${arrayAmigos[amigoSorteado]}`),
      (resultado.style.color = "#05DF05"))
    : ((resultado.innerHTML = `não há amigos cadastrados, por favor adicione um amigo!`),
      (resultado.style.color = "#ff2c2c"));

  arrayAmigos.splice(amigoSorteado, 1);
  renderizarLista();
}
function removerAmigo(index) {
  amigoRemovido = arrayAmigos[index];
  arrayAmigos.splice(index, 1);
  resultado.innerHTML =
    ((resultado.style.color = "#4B69FD"),
    `${amigoRemovido} foi removido da lista!`);
  renderizarLista();
}
//função para limpar a lista de amigos, zerando o array e removendo os nomes da lista exibida.
function limparListaAmigo() {
  arrayAmigos = [];
  listaAmigos.innerHTML = "";
  resultado.innerHTML = "";
  renderizarLista();
}
