let listaMost = [
    {
        idIcone: 1,
        titulo: "Action",
        descricao: "Warframe",
        img: "./images/top-game-01.jpg"
    },

    {
        idIcone: 2,
        titulo: "FPS",
        descricao: "PUBG",
        img: "./images/top-game-02.jpg"
    },

    {
        idIcone: 3,
        titulo: "FPS",
        descricao: "Apex Legends",
        img: "./images/top-game-03.jpg"
    },

    {
        idIcone: 4,
        titulo: "Simulation",
        descricao: "The Sims 4",
        img: "./images/top-game-04.jpg"
    },

    {
        idIcone: 5,
        titulo: "Lost Ark",
        descricao: "RPG",
        img: "./images/top-game-05.jpg"
    },

    {
        idIcone: 6,
        titulo: "Adventure",
        descricao: "Destiny",
        img: "./images/top-game-06.jpg"
    },
];

const criarCardThree = () => {
    let containerThree = document.querySelector(".container-three");

    listaMost.forEach((elemento) => {
        let cardThree = `
        <div class="card-three">
            <img class="card-img" src="${elemento.img}" />
            <p class="card-descricao"> ${elemento.titulo}</p>
            <h3 class="card-descricao"> ${elemento.descricao}</h3>
            <a href="" class="bt-explore">EXPLORE</a>
        </div>   
        `;
        containerThree.innerHTML += cardThree;
    });
};

window.addEventListener("load", () => {
    criarCardThree();
});