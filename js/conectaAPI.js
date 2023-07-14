// Função assincrona para conectar nossa API convertida para JSON
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

// Função assincrona para criar um novo elemento na nossa API
async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    
    if (conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo");
    }

    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

// Função assíncrona para buscar um elemento em nossa API (é usado o ?q=buscadigitada)
async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();
    
    return conexaoConvertida;
}

// Exportando as funções para uso delas em outros arquivos
export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}
