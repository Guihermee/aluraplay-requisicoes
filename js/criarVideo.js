// Exportando a função do outro arquivo
import { conectaApi } from "./conectaAPI.js";
const formulario = document.querySelector("[data-formulario]");

// Função assíncrona para criar um elemento nosso na nossa API por meio de um formulário
async function criarVideo(evento) {
    // Previne o comportamento padrão do navegar
    evento.preventDefault();

    // Capturando os dados do input do usuário
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    // Usando a função do outro arquivo (requisição POST)
    await conectaApi.criaVideo(titulo, descricao, url, imagem);
    window.location.href = "../pages/envio-concluido.html";
}

// Quando usuário clicar "submit" é ativado nossa função criarVideo enviando os dados do evento
formulario.addEventListener("submit", evento => criarVideo(evento))