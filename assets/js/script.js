console.log("JavaScript carregado com sucesso!");

/*const artigo = document.createElement("article");
const titulo = document.createElement("h3");
const lista = document.querySelector("#lista-pedidos");

titulo.textContent = "Pedido PS-1042";

artigo.append(titulo);
lista.append(artigo)

[feat/events]
const botao = document.querySelector("#botao-teste");

botao.addEventListener(
    "click",
    event => {
        console.log(event);
    }
);*/
/*const lista = document.querySelector("#lista-pedidos");
lista.addEventListener(
    "click",
    event => {
        const botao = event.target.closest("[data-acao]");
        if (!botao) {
            return;
        }

        console.log(botao.dataset);
    }
);*/
const campoBusca = document.querySelector("#campo-busca");
const filtroStatus = document.querySelector("#filtro-status");
const ordenacao = document.querySelector("#ordenacao");

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

    const botao = document.createElement("button");
    botao.textContent = "Ver detalhes";
    botao.dataset.id = pedido.id;
    botao.dataset.acao = "detalhes";

    artigo.append(
        titulo,
        cliente,
        categoria,
        prioridade,
        status,
        valor,
        botao
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

function pesquisarPedidos(termo) {
    const pesquisa = termo.trim().toLowerCase();

    return pedidos.filter(pedido => {
        return (
            pedido.cliente.toLowerCase().includes(pesquisa) ||
            pedido.categoria.toLowerCase().includes(pesquisa) ||
            String(pedido.id).includes(pesquisa)
        );
    });
}

function atualizarVisualizacao() {
    // 1. Obter Critérios
    const termo = campoBusca.value;
    const status = filtroStatus.value;
    const criterio = ordenacao.value;

    // 2. Aplicar Pesquisa
    let resultado = pesquisarPedidos(termo);

    // 3. Aplicar Filtro
    if (status !== "todos") {
        resultado = resultado.filter(pedido => {
            return pedido.status === status;
        });
    }

    // 4. Aplicar Ordenação
    if (criterio === "cliente") {
        resultado.sort((a,b) => {
            return a.cliente.localeCompare(b.cliente, "pt-BR");
        });
    } else if (criterio === "valor-crescente") {
        resultado.sort((a,b) => a.valor - b.valor);
    } else if (criterio === "valor-decrescente") {
        resultado.sort((a,b) => b.valor - a.valor);
    }

    // 5. Renderizar Resultado
    renderizarPedidos(resultado);
}

// Eventos
campoBusca.addEventListener("input", atualizarVisualizacao);
filtroStatus.addEventListener("change", atualizarVisualizacao);
ordenacao.addEventListener("change", atualizarVisualizacao);

// Renderização inicial
atualizarVisualizacao();