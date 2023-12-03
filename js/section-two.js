let listaTrending = [
    {
        idIcone: 1,
        titulo: "Action",
        descricao: "Warframe",
        img: "./images/trending-01.jpg"
    },

    {
        idIcone: 2,
        titulo: "RPG",
        descricao: "Tower of Fantasy",
        img: "./images/trending-02.jpg"
    },

    {
        idIcone: 3,
        titulo: "FPS",
        descricao: "Super People",
        img: "./images/trending-03.jpg"
    },

    {
        idIcone: 4,
        titulo: "Adventure",
        descricao: "Easy Layout",
        img: "./images/trending-04.jpg"
    },
];

const criarCardTwo = () => {
    let containerTwo = document.querySelector(".container-two");

    listaTrending.forEach((elemento) => {
        let cardTwo = `
        <div class="card-two">
            <img class="card-img" src="${elemento.img}" />
            <p class="card-descricao"> ${elemento.titulo}</p>
            <h3 class="card-descricao"> ${elemento.descricao}</h3>
            
        </div>   
        `;
        containerTwo.innerHTML += cardTwo;
    });
};

window.addEventListener("load", () => {
    criarCardTwo();
});