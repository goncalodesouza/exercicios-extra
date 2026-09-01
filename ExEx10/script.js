const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {

  link.addEventListener("click", function (event) {

    event.preventDefault();

    links.forEach(link => {
      link.classList.remove("active");
    });

    this.classList.add("active");

  });

});


// PESQUISA

const search = document.querySelector(".search");
const searchButton = document.querySelector("#search-button");

if (search && searchButton) {

  searchButton.addEventListener("click", () => {

    search.classList.toggle("active");

  });

  document.addEventListener("click", (event) => {

    if (!search.contains(event.target)) {

      search.classList.remove("active");

    }

  });

}


// PERFIL

const myProfile = document.querySelector(".my-profile");
const profileButton = document.querySelector("#profile-button");

if (myProfile && profileButton) {

  profileButton.addEventListener("click", (event) => {

    event.stopPropagation();

    myProfile.classList.toggle("active");

  });

  document.addEventListener("click", (event) => {

    if (!myProfile.contains(event.target)) {

      myProfile.classList.remove("active");

    }

  });

}


// NOTIFICAÇÕES

const notifications = document.querySelector(".notifications");
const notificationButton = document.querySelector("#notification-button");

if (notifications && notificationButton) {

  notificationButton.addEventListener("click", (event) => {

    event.stopPropagation();

    notifications.classList.toggle("active");

  });

  document.addEventListener("click", (event) => {

    if (!notifications.contains(event.target)) {

      notifications.classList.remove("active");

    }

  });

}

const imagem = document.querySelector("#sec1-img");
const video = document.querySelector("#sec1-video");

setTimeout(() => {
  video.play();
  imagem.style.opacity = "0";
}, 2000);