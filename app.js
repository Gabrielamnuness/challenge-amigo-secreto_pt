let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome');
        return;
    }

    amigos.push(nome);
    input.value = '';
    mostrarAmigos();
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let amigo of amigos) {
        lista.innerHTML += `<li>${amigo}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos primeiro!');
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // mostra o resultado na UL "resultado"
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li><strong>Amigo sorteado:</strong> ${sorteado}</li>`;
}