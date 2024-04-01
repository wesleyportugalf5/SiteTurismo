// sec1-principal - link interno

const url = 'gramado.html'
const haha = document.querySelector('.sec1-principal')

function openInNewTab(url) {
  const win = window.open(url, '_self')
  win.focus()
}

haha.addEventListener('click', () => {
  openInNewTab(url)
})

// Curiosidades Paginal Principal

const reviews = [
  {

    id: 1,
    curiosidadesPais: "Brasil",
    curiosidadesCidade: "São Paulo",
    curiosidadesImg:
      "imagens/sao-paulo02.jpg",
    curiosidadesTexto:
      "Fundado em 1554 pelos jesuítas para catequizar a população até então majoritariamente indígena, o pequeno povoado de Piratininga se transformou em uma das maiores metrópoles do mundo. Hoje, a cidade é reflexo da fusão de imigrantes de todos os continentes, os quais contribuíram para construir o universo multicultural que forma São Paulo. Há quem viaje à capital paulista apenas para uma reunião rápida, outros pretendem conhecer um novo restaurante, assistir a um show, ir a um jogo de futebol, fazer compras ou, simplesmente, curtir a mais pulsante cidade brasileira. A lista de opções é extensa, para não dizer infinita. Isso porque São Paulo está viva. Aproveite cada segundo para explorar todos os mundos que SP oferece. E lembre-se de voltar sempre.",
  },
  {

    id: 3,
    curiosidadesPais: "Estados Unidos",
    curiosidadesCidade: "Los Angeles",
    curiosidadesImg:
      "imagens/los-angeles03.jpg",
    curiosidadesTexto:
      "Sob o sol da Califórnia a cidade vem mostrando que vai muito além de Hollywood. Todavia, é quase impossível deixar de lado o mundo do cinema. Na verdade, nem há motivo para isso. A imagem pode ser tão familiar que nem nos surpreende mais, porém andar pela Calçada da Fama e fazer algumas fotos com sósias (nem sempre tão bonitos quanto os originais) é uma das obrigações mais divertidas dos turistas que estão na cidade - leva apenas algumas horas e você guardará a recordação para sempre. Não há motivos para ir contra o fluxo e deixar de registrar o letreiro de Hollywood. Entre no clima e divirta-se turistando. O único conselho a seguir, no entanto, é não cair na falsa conversa de que Los Angeles resume-se à Hollywood Boulevard.",
  },
  {
    id: 2,
    curiosidadesPais: "Brasil",
    curiosidadesCidade: "Belo Horizonte",
    curiosidadesImg:
      "imagens/belo-horizonte09.jpg",
    curiosidadesTexto:
      "A cidade, planejada pelo engenheiro Aarão Reis para ter até 200 mil habitantes, foi inaugurada em 12 de dezembro de 1897 na Praça da Liberdade sob nome de Cidade de Minas. Do antigo arraial, resta apenas uma pequena casa na região central de BH, onde hoje funciona o Museu Histórico Abílio Barreto. Quatro anos mais tarde, a cidade ganhou o nome de Belo Horizonte. Entre as décadas de 30 e 40, BH recebeu alguns de seus icônicos símbolos, alguns a pedido do então prefeito Juscelino Kubitscheck. Foi nesse período que a capital mineira recebeu os trabalhos de Oscar Niemeyer, Burle Marx, Alfredo Ceschiatti e Candido Portinari. Hoje, a capital mineira abriga cerca de 2,5 milhões de moradores e ainda assim consegue manter o “jeitim” de interior que tanto conquista os forasteiros.",
  },
  {
    id: 4,
    curiosidadesPais: "Japão",
    curiosidadesCidade: "Tokyo",
    curiosidadesImg:
      "imagens/tokyo.jpg",
    curiosidadesTexto:
      "Moderna, cheia de letreiros com propagandas e com mais de 37 milhões de pessoas em sua região metropolitana (mais do que a população de muitos países), Tokyo sabe harmonizar seu crescimento e globalização ao tradicionalismo. Muito próximo de áreas de grande movimento, existem templos antigos e, ao lado de estações de trens complexas e cheias de gente, existem parques que funcionam como um refúgio de todo aquele burburinho urbano. Sua organização é mais uma característica marcante da capital, que destoa de muitas outras cidades na Ásia.",
  },
];

const curiosidadesImg = document.getElementById("curiosidades-img");
const curiosidadesPais = document.getElementById("curiosidades-pais");
const curiosidadesCidade = document.getElementById("curiosidades-cidade");
const curiosidadesTexto = document.getElementById("curiosidades-texto");

const curiosidadesVoltarBtn = document.querySelector(".curiosidades-voltar-btn");
const curiosidadesAvancarBtn = document.querySelector(".curiosidades-avancar-btn");
const curiosidadesSurpreendaMeBtn = document.querySelector(".curiosidades-surpreenda-me-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  curiosidadesImg.src = item.curiosidadesImg;
  curiosidadesPais.textContent = item.curiosidadesPais;
  curiosidadesCidade.textContent = item.curiosidadesCidade;
  curiosidadesTexto.textContent = item.curiosidadesTexto;
}

curiosidadesAvancarBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

curiosidadesVoltarBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

curiosidadesSurpreendaMeBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
});


