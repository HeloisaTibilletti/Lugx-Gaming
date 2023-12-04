let listaForm = [
    {
        idIcone: 1,
        nome: "OUR SHOP",
        titulo: "Go Pre-Order Buy & Get Best Prices For You!",
        descricao: "Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.",
        botao: "SHOP NOW"
    },

    {
        idIcone: 2,
        nome:"NEWSLETTER",
        titulo: "Get Up To $100 Off Just Buy Subscribe Newsletter!",
        descricao: "Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor",
        botao: "SUBSCRIBE NOW"
    },

];

const criarCardFour = () => {
    let containerFour = document.querySelector(".container-four");

    listaForm.forEach((elemento) => {
        let cardFour = `
        <div class="card-four">
            <h3 class="card-nome-4"> ${elemento.nome}</h2>
            <h2 class="card-titulo-4"> ${elemento.titulo}</h2>
            <h3 class="card-descricao-4"> ${elemento.descricao}</h3>
            <a href="" class="botao-four"> ${elemento.botao}</a>
        </div>   
        `;

        containerFour.innerHTML += cardFour;
    });
};

window.addEventListener("load", () => {
    criarCardFour();
});