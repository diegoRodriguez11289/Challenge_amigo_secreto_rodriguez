// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo(){
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();
    
    if(nombre===''){
        alert('ingresa un nombre valido');
        return;

    }

    if(amigos.includes(nombre)){
        alert('nombre ya en lista')
        return;

    }

    amigos.push(nombre);
    input.value='';
    actualizarListaAmigos();

}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';  // Limpia la lista antes de actualizar
    
    for (let i = 0; i < amigos.length; i++) { //recorre el array de amigos y va creando elementos li para cada amigo
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
function mostrarResultado(nombreSorteado) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    const li = document.createElement('li');
    li.innerHTML = `
        <strong> El amigo secreto sorteado es:</strong><br>
        <span class="winner-name">${nombreSorteado}</span>
    `;
    
    resultado.appendChild(li);
}

function sortearAmigo() {
    // Validar que haya al menos 2 amigos
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para hacer el sorteo.');
        return;
    }
    
    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    
    mostrarResultado(amigoSorteado);
}
//reinicia la lista de amigos y limpia la pantalla de resultado
function resetearLista() {
    amigos = [];
    actualizarListaAmigos();
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

}
