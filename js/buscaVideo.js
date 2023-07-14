import { conectaApi } from "./conectaAPI.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDaPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDaPesquisa);

    console.log(busca);
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");
botaoPesquisa.addEventListener("click", evento => buscarVideo(evento));