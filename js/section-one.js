let listaIcones = [
    {
        idIcone: 1,
        descricao: "Free Storage",
        img: "./images/featured-01.png"
    },

    {
        idIcone: 2,
        descricao: "User More",
        img: "./images/featured-02.png"
    },

    {
        idIcone: 3,
        descricao: "Reply Ready",
        img: "./images/featured-03.png"
    },

    {
        idIcone: 4,
        descricao: "Easy Layout",
        img: "./images/featured-04.png"
    },
];

const criarCard = () => {
    let container = document.querySelector(".container");

    listaIcones.forEach((elemento) => {
        let card = `
        <div class="card">
            <img class="card-img" src="${elemento.img}" />
            <h3 class="card-descricao"> ${elemento.descricao}</h3>
        </div>   
        `;
        container.innerHTML += card;
    });
};

window.addEventListener("load", () => {
    criarCard();
});