document.addEventListener("DOMContentLoaded", () => {
  const profile = document.getElementById("profile");

  const hero = document.getElementById("hero");

  const heroContent = document.querySelector(".hero-content");

  const titulo = heroContent.querySelector("h3");

  const descricao = heroContent.querySelector("p");

  const destinos = [
    // 🇵🇹 PORTUGAL

    {
      nome: "Portugal",

      imagem: "../imagens/portugal.jpg",

      descricao: "Portugal · Europa · Cultura · História · Natureza",
    },

    // 🇪🇸 ESPANHA

    {
      nome: "Espanha",

      imagem: "../imagens/espanha.jpg",

      descricao: "Espanha · Europa · Cultura · História · Praias",
    },

    // 🇫🇷 FRANÇA

    {
      nome: "França",

      imagem: "../imagens/franca.jpg",

      descricao: "França · Europa · Cultura · História · Gastronomia",
    },

    // 🇮🇹 ITÁLIA

    {
      nome: "Itália",

      imagem: "../imagens/italia.jpg",

      descricao: "Itália · Europa · Cultura · História · Gastronomia",
    },

    // 🇯🇵 JAPÃO

    {
      nome: "Japão",

      imagem: "../imagens/japao.jpg",

      descricao: "Japão · Ásia · Cultura · História · Natureza",
    },

    // 🇧🇷 BRASIL

    {
      nome: "Brasil",

      imagem: "../imagens/brasil.jpg",

      descricao: "Brasil · América do Sul · Praias · Natureza · Cultura",
    },

    // 🇬🇷 GRÉCIA

    {
      nome: "Grécia",

      imagem: "../imagens/grecia.jpg",

      descricao: "Grécia · Europa · História · Praias · Cultura",
    },

    // 🇨🇭 SUÍÇA

    {
      nome: "Suíça",

      imagem: "../imagens/suica.jpg",

      descricao: "Suíça · Europa · Montanhas · Natureza · Aventura",
    },

    // 🇺🇸 ESTADOS UNIDOS

    {
      nome: "Estados Unidos",

      imagem: "../imagens/eua.jpg",

      descricao: "Estados Unidos · América do Norte · Cidades · Cultura",
    },

    // 🇳🇴 NORUEGA

    {
      nome: "Noruega",

      imagem: "../imagens/noruega.jpg",

      descricao: "Noruega · Europa · Natureza · Montanhas · Aventura",
    },
  ];

  let destinoAtual = 0;

  function mudarDestino() {
    const destino = destinos[destinoAtual];

    // Imagem

    hero.style.backgroundImage = `url("${destino.imagem}")`;

    // Nome

    titulo.textContent = destino.nome;

    // Descrição

    descricao.textContent = destino.descricao;

    // Próximo destino

    destinoAtual++;

    if (destinoAtual >= destinos.length) {
      destinoAtual = 0;
    }
  }

  // Primeiro destino

  mudarDestino();

  // Troca a cada 10 segundos

  setInterval(() => {
    mudarDestino();
  }, 10000);

  /*

        Fecha o menu do perfil quando clicamos fora

  */

  document.addEventListener("click", (event) => {
    if (profile && !profile.contains(event.target)) {
      profile.removeAttribute("open");
    }
  });
});

const travel = document.querySelectorAll(".travel");

travel.forEach((travel) => {
  travel.style.backgroundImage = `url("${travel.dataset.imagem}")`;
});
