let formulario = document.querySelector("form");

const validarDados = (nome, telefone, email, opcao, intencao) => {
  let control = true;

  if (nome.value.trim() == "") {
    control = false;
  }

  if (telefone.value.trim() == "") {
    control = false;
  }
  if (email.value.trim() == "") {
    control = false;
  }

  return control;
};

formulario.addEventListener("submit", (event) => {
  let nome = document.querySelector("#nome");
  let telefone = document.querySelector("#telefone");
  let email = document.querySelector("#email");
  let residencia = document.querySelector("#residencia");
  let opcao = residencia.options[residencia.selectedIndex];
  let intencao = document.querySelector("#intencao");

  if (validarDados(nome, telefone, email, opcao, intencao)) {
    let cliente = {
      nome: nome.value.trim(),
      telefone: telefone.value.trim(),
      email: email.value.trim(),
      residencia: opcao.value,
      intencao: intencao.value.trim(),
      idCliente: sessionStorage.getItem("idCliente"),
    };

    let clienteJson = JSON.stringify(cliente);
    console.log(clienteJson);

    let cliente2 = JSON.parse(clienteJson);
    console.log(cliente2);
  } else event.preventDefault();
});
