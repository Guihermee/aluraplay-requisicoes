// Usando a função do outro arquivo
import { conectaApi } from "./conectaAPI.js";

// buscando elemento HTML data-attribute (ul)
const lista = document.querySelector("[data-lista]");

// Função para construir um card no nosso elemento HTML(ul)
// basicamente é criada uma (li.videos__item) que recebe o innerHTML com as variações 
// Dentro dele que são os parâmetros para deixar isso dinâmico
export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>`

    return video;
}

// Essa função assíncrona basicamente faz= pega cada elemento na API e aplica nossa função
// constroi card dentro do "pai" lista (ul)
async function listaVideos() {
    try{
    // conectaApi.listaVideos(); isso ai é a conexão API principal
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeo</h2>`
    }
}

// Executa a função listaVideo para sempre que abrirmos a página aplicar o forEach em todos
// os elementos da API, fazendo assim aparecer os videos
listaVideos();
