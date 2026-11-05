console.log("JavaScript carregado com sucesso!");

/*const artigo = document.createElement("article");
const titulo = document.createElement("h3");
const lista = document.querySelector("#lista-pedidos");

titulo.textContent = "Pedido PS-1042";

artigo.append(titulo);
lista.append(artigo)*/

function formatarMoeda(valor) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valor);
}

function criarCardPedido(pedido) {
    const artigo = document.createElement("article");

    const titulo = document.createElement("h3");
    titulo.textContent = `PS-${pedido.id}`;

    const cliente = document.createElement("p");
    cliente.textContent = `Cliente: ${pedido.cliente}`;

    const categoria = document.createElement("p");
    categoria.textContent = `Categoria: ${pedido.categoria}`;

    const prioridade = document.createElement("p");
    prioridade.textContent = `Prioridade: ${pedido.prioridade}`;

    const status = document.createElement("p");
    status.textContent = `Status: ${pedido.status}`;

    const valor = document.createElement("p");
    valor.textContent = `Valor: ${formatarMoeda(pedido.valor)}`;

    artigo.append(
        titulo,
        cliente,
        categoria,
        prioridade,
        status,
        valor
    );

    return artigo
}

function renderizarPedidos(listaPedidos) {
    const lista = document.querySelector("#lista-pedidos");

    lista.textContent = "";

    if (listaPedidos.length === 0) {
        lista.textContent = "Nenhum pedido encontrado";
        return;
    }

    listaPedidos.forEach(pedido => {
        const artigo = criarCardPedido(pedido);

        lista.append(artigo);
    });
}

renderizarPedidos(pedidos);