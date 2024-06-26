const repositorios = document.querySelector(".rep");
let perfilInfo = document.getElementById("dados");
let amigos = document.querySelector(".amigo")
let carrossel = document.querySelector(".carousel-inner")

function getApiGitHub() {
    fetch('https://api.github.com/users/cristianandraaade/repos')
        .then(async response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            let data = await response.json();
            data.map(item => {
                let project =
                    `<a href="http://localhost:3000/repoATP.html?id=${item.id}" target="_blank">
                    <div class="card">
                        <span class="titulo">
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                        </span>
                        <span class="icones">
                            <img src="assets/img/estrela.png" />
                            <h2 class="fav">${item.stargazers_count}</h2>
                            <img src="assets/img/do-utilizador (1).png" />
                            <h2 class="fav">5</h2>
                        </span>
                    </div>
                </a>`
                repositorios.innerHTML += project;
            })
        })
    fetch('https://api.github.com/users/cristianandraaade')
        .then(async response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            let userData = await response.json();
            let userInfo =
                `              <img id="fotodeperfil" src="${userData.avatar_url}" />
                <div class="info">
                    <p><b>${userData.name}</b></p>
                    <p>${userData.bio}</p>
                    <p><b>Local: </b>Belo Horizonte, MG, Brasil</p>
                    <nav>
                        <a href="https://www.instagram.com/cristianandraaade/" target="_blank"><img id="pin"
                                src="assets/img/instagram.png" /></a>
                        <a href="https://github.com/cristianandraaade" target="_blank"><img id="pin"
                                src="assets/img/github.png" /></a>
                    </nav>
                </div>`
            perfilInfo.innerHTML = userInfo;

        })
}
getApiGitHub();
function getJsonServer() {
    fetch("http://localhost:3000/db/")
        .then(async response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            let jsonServer = await response.json();
            jsonServer.amigos.forEach(eachAmigos => {
                let dadosAmigos =
                    `<a class="imagem" href="${eachAmigos.urlGit}">
                    <img src="${eachAmigos.urlFotoMAmigo}" alt="daniel">
                    <h3>${eachAmigos.nomeColega}</h3>
                </a>`
                amigos.innerHTML += dadosAmigos;
            })
            jsonServer.content.forEach(eachConteudo => {
                let conteudoCarrossel =
                    `<div class="carousel-item active">
                    <img src="${eachConteudo.url}" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="text-light">${eachConteudo.tituloConteudo}</h5>
                        </div>
                </div>`
                carrossel.innerHTML += conteudoCarrossel;
            })
        })
}
getJsonServer();



