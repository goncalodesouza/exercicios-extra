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

      sombra: {
        background: `
                    linear-gradient(
                        to right,
                        #046A38 0%,
                        #046A38 40%,
                        #DA291C 40%,
                        #DA291C 100%
                    )
                `,
      },
    },

    // 🇪🇸 ESPANHA
    {
      nome: "Espanha",
      imagem: "../imagens/espanha.jpg",
      descricao: "Espanha · Europa · Cultura · História · Praias",

      sombra: {
        background: `
                    linear-gradient(
                        to bottom,
                        #AA151B 0%,
                        #AA151B 25%,
                        #F1BF00 25%,
                        #F1BF00 75%,
                        #AA151B 75%,
                        #AA151B 100%
                    )
                `,
      },
    },

    // 🇫🇷 FRANÇA
    {
      nome: "França",
      imagem: "../imagens/franca.jpg",
      descricao: "França · Europa · Cultura · História · Gastronomia",

      sombra: {
        background: `
                    linear-gradient(
                        to right,
                        #0055A4 0%,
                        #0055A4 33.33%,
                        #FFFFFF 33.33%,
                        #FFFFFF 66.66%,
                        #EF4135 66.66%,
                        #EF4135 100%
                    )
                `,
      },
    },

    // 🇮🇹 ITÁLIA
    {
      nome: "Itália",
      imagem: "../imagens/italia.jpg",
      descricao: "Itália · Europa · Cultura · História · Gastronomia",

      sombra: {
        background: `
                    linear-gradient(
                        to right,
                        #009246 0%,
                        #009246 33.33%,
                        #FFFFFF 33.33%,
                        #FFFFFF 66.66%,
                        #CE2B37 66.66%,
                        #CE2B37 100%
                    )
                `,
      },
    },

    // 🇯🇵 JAPÃO
    {
      nome: "Japão",
      imagem: "../imagens/japao.jpg",
      descricao: "Japão · Ásia · Cultura · História · Natureza",

      sombra: {
        background: `
                    radial-gradient(
                        circle at center,
                        #BC002D 0%,
                        #BC002D 22%,
                        transparent 23%
                    ),
                    #FFFFFF
                `,
      },
    },

    // 🇧🇷 BRASIL
    {
      nome: "Brasil",
      imagem: "../imagens/brasil.jpg",
      descricao: "Brasil · América do Sul · Praias · Natureza · Cultura",

      sombra: {
        background: `
                    radial-gradient(
                        circle at center,
                        #002776 0%,
                        #002776 15%,
                        transparent 16%
                    ),
                    linear-gradient(
                        45deg,
                        transparent 35%,
                        #FFDF00 35%,
                        #FFDF00 65%,
                        transparent 65%
                    ),
                    #009C3B
                `,
      },
    },

    // 🇬🇷 GRÉCIA
    {
      nome: "Grécia",
      imagem: "../imagens/grecia.jpg",
      descricao: "Grécia · Europa · História · Praias · Cultura",

      sombra: {
        background: `
                    repeating-linear-gradient(
                        to bottom,
                        #0D5EAF 0%,
                        #0D5EAF 10%,
                        #FFFFFF 10%,
                        #FFFFFF 20%
                    )
                `,
      },
    },

    // 🇨🇭 SUÍÇA
    {
      nome: "Suíça",
      imagem: "../imagens/suica.jpg",
      descricao: "Suíça · Europa · Montanhas · Natureza · Aventura",

      sombra: {
        background: `
                    linear-gradient(
                        to right,
                        transparent 0%,
                        transparent 40%,
                        #FFFFFF 40%,
                        #FFFFFF 60%,
                        transparent 60%,
                        transparent 100%
                    ),
                    linear-gradient(
                        to bottom,
                        #FF0000 0%,
                        #FF0000 35%,
                        #FFFFFF 35%,
                        #FFFFFF 65%,
                        #FF0000 65%,
                        #FF0000 100%
                    )
                `,
      },
    },

    // 🇺🇸 ESTADOS UNIDOS
    {
      nome: "Estados Unidos",
      imagem: "../imagens/eua.jpg",
      descricao: "Estados Unidos · América do Norte · Cidades · Cultura",

      sombra: {
        background: `
                    linear-gradient(
                        to bottom,
                        #B22234 0%,
                        #B22234 7.69%,
                        #FFFFFF 7.69%,
                        #FFFFFF 15.38%,
                        #B22234 15.38%,
                        #B22234 23.07%,
                        #FFFFFF 23.07%,
                        #FFFFFF 30.76%,
                        #B22234 30.76%,
                        #B22234 38.45%,
                        #FFFFFF 38.45%,
                        #FFFFFF 46.14%,
                        #B22234 46.14%,
                        #B22234 53.83%,
                        #FFFFFF 53.83%,
                        #FFFFFF 61.52%,
                        #B22234 61.52%,
                        #B22234 69.21%,
                        #FFFFFF 69.21%,
                        #FFFFFF 76.90%,
                        #B22234 76.90%,
                        #B22234 84.59%,
                        #FFFFFF 84.59%,
                        #FFFFFF 92.28%,
                        #B22234 92.28%,
                        #B22234 100%
                    )
                `,
      },
    },

    // 🇳🇴 NORUEGA
    {
      nome: "Noruega",
      imagem: "../imagens/noruega.jpg",
      descricao: "Noruega · Europa · Natureza · Montanhas · Aventura",

      sombra: {
        background: `
                    linear-gradient(
                        to right,
                        transparent 0%,
                        transparent 20%,
                        #FFFFFF 20%,
                        #FFFFFF 35%,
                        #00205B 35%,
                        #00205B 45%,
                        #FFFFFF 45%,
                        #FFFFFF 55%,
                        transparent 55%,
                        transparent 100%
                    ),
                    linear-gradient(
                        to bottom,
                        transparent 0%,
                        transparent 35%,
                        #FFFFFF 35%,
                        #FFFFFF 45%,
                        #00205B 45%,
                        #00205B 55%,
                        #FFFFFF 55%,
                        #FFFFFF 65%,
                        transparent 65%,
                        transparent 100%
                    ),
                    #BA0C2F
                `,
      },
    },
  ];

  /*
        Criamos uma <style> apenas para controlar
        o pseudo-elemento #hero::before.

        O teu CSS original NÃO é alterado.
    */

  const estiloSombra = document.createElement("style");

  estiloSombra.id = "hero-shadow-style";

  document.head.appendChild(estiloSombra);

  function aplicarSombra(destino) {
    estiloSombra.textContent = `
            #hero::before {
                background: ${destino.sombra.background};
            }
        `;
  }

  let destinoAtual = 0;

  function mudarDestino() {
    const destino = destinos[destinoAtual];

    // Imagem
    hero.style.backgroundImage = `url("${destino.imagem}")`;

    // Nome
    titulo.textContent = destino.nome;

    // Descrição
    descricao.textContent = destino.descricao;

    // Sombra da bandeira
    aplicarSombra(destino);

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
