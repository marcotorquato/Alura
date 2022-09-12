var rafa = { nome: "RaFa", vitoria: 2, empates: 1,derrotas: 1, pontos: 0};
var paulo  = { nome: "Paulo", vitoria: 2, empates: 1,derrotas: 1, pontos: 0};

pontos.rafa = calculaPontos(rafa)
pontos.paulo = calculaPontos(paulo)

function calculaPontos (jogador) {
    var ponto = (jogador.vitorias * 3) + jogador.empates
}

