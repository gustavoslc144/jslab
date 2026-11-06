// Recuperar o ID da URL
const parametros = new URLSearchParams(window.location.search);
const id = Number(parametros.get("id"));

// Localizar o pedido no array
const pedido = pedidos.find(item => item.id === id);

// Selecionar o elemento HTML
const areaDetalhes = document.querySelector("#detalhes-pedido");

// Criar um parágrafo com uma informação
function criarInformacao(rotulo, valor) {
    const paragrafo = document.createElement("p");

    paragrafo.textContent = `${rotulo}: ${valor}`;

    return paragrafo;
}

// Renderizar as informações do pedido
function renderizarDetalhes(pedido) {
    areaDetalhes.textContent = "";

    if (!pedido) {
        areaDetalhes.textContent = "Pedido não encontrado.";
        return;
    }

    const titulo = document.createElement("h2");
    titulo.textContent = `PS-${pedido.id}`;

    const valorFormatado = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(pedido.valor);

    areaDetalhes.append(
        titulo,
        criarInformacao("Cliente", pedido.cliente),
        criarInformacao("Categoria", pedido.categoria),
        criarInformacao("Prioridade", pedido.prioridade),
        criarInformacao("Status", pedido.status),
        criarInformacao("Valor", valorFormatado)
    );
}

// Executar a renderização
renderizarDetalhes(pedido);