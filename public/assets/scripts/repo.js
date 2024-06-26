let header = document.querySelector(".header")
let main = document.querySelector(".main");



window.onload = function getRepo() {
    const url = window.location.href;
    const repoID = new URL(url).searchParams.get("id")
    fetch("https://api.github.com/repositories/" + repoID)
        .then(async response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            let repositorios = await response.json();
            let contentHeader = `
            <a href=index.html>
            <h1 id="nome">CRISTIAN</h1>
        </a>
        <div>
            <h1>SEÇÃO 1</h1>
            <h1>SEÇÃO 2</h1>
            <h1>SEÇÃO 3</h1>
        </div>`
            header.innerHTML = contentHeader;
            let contentMain = `
            <div class="repositorio">
            <h2>Repositório: ${repositorios.name}</h2>
            <div class="info">
                <div class="descrição">
                    <p><b>Descrição</b></p>
                    <p>${repositorios.description}</p>
                </div>
                <div class="arrumar">
                    <div class="others">
                        <p><b>Data de criação</b></p>
                        <p>${getRepoistoryCreatedDate(repositorios.created_at)}</p>
                        <p><b>Linguagem</b></p>
                        <p>${repositorios.language}</p>
                        <p><b>Link de acesso</b></p>
                        <a
                            href="https://github.com/cristianandraaade/Aula-ATP-">https://github.com/cristianandraaade/Aula-ATP-</a>
                        <p><b>Tópicos</b></p>
                        <button>C#</button>
                        <button>C#</button>
                        <button>C#</button>
                        <button>C#</button>
                        <button>C#</button>
                    </div>
                    <div class="icons">
                        <img src="assets/img/estrela.png" />
                        <h2 class="fav">${repositorios.stargazers_count}</h2>
                        <img src="assets/img/do-utilizador (1).png" />
                        <h2 class="fav">${repositorios.subscribers_count}</h2>
                    </div>
                </div>
            </div>
        </div>`
        main.innerHTML = contentMain;
        })
}
function getRepoistoryCreatedDate(data){
    const date = new Date(data);
    return date.toLocaleDateString('pt-BR');
}