/*https://api.rawg.io/api/platforms?key=50228e46ed514a95b4b2f732af36e1e4*/

const createPost = (game) => {
  // Criar o HTML do card com base nas informações da plataforma
  let cardGames = `
    <div class="card-game" id="game-${game.id}">
        <img class="card-img" src="${game.background_image}" data-id="${game.id}"/>
        <h3 class="game-nome">${game.name}</h3>
        <p class="game-descricao"> Metacritic: ${game.metacritic}</p>
        <p class="game-lancamento">Lançamento: ${game.released}</p>
        <!-- Adicione mais informações conforme necessário -->
      </div>
    `;

  // Adicionar o card ao container de plataformas
  let containerGames = document.querySelector(".container-games");
  containerGames.innerHTML += cardGames;
};

const getPost = async (pageSize = 20) => {
  try {
    const res = await fetch(`https://api.rawg.io/api/games?key=50228e46ed514a95b4b2f732af36e1e4&page_size=${pageSize}`);
    const data = await res.json();

    if (!res.ok) {
      console.log(data.detail); // Exibir detalhes do erro, se houver
      return;
    }

    const games = data.results;

    // Criar um card para cada jogo
    games.forEach((game) => {
      createPost(game);
    });
  } catch (error) {
    console.log(`Erro - ${error}`);
  }
};

window.addEventListener("load", () => {
  getPost(15);
});

const deletePost = (id) => {
  const confirmDelete = window.confirm("Tem certeza que deseja excluir este jogo?");

  if (confirmDelete) {
    const cardElement = document.getElementById(`game-${id}`);
    if (cardElement) {
      cardElement.remove();
      console.log(`Card ${id} excluído com sucesso.`);
    } else {
      console.log(`Card ${id} não encontrado.`);
    }
  } else {
    console.log(`Exclusão cancelada.`);
  }
};

document.addEventListener("click", (event) => {
  // Verificar se o clique foi na imagem
  if (event.target.classList.contains("card-img")) {
    // Obter a ID do jogo da propriedade 'data-id'
    const gameId = event.target.dataset.id;

    if (gameId) {
      deletePost(gameId);
    }
  }
});


