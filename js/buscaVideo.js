import { conectaApi } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

// Função para criar uma busca de um objeto na nossa API,
async function buscarVideo(evento) {

    evento.preventDefault();

    const dadosDaPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDaPesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    };

    if (busca.length === 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeo</h2>`
    } else {
        busca.forEach(evento => {
            lista.appendChild(
                constroiCard(evento.titulo, evento.descricao, evento.url, evento.imagem))
        });
    }
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");
botaoPesquisa.addEventListener("click", evento => buscarVideo(evento));
