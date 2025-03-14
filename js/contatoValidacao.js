  /*=======================================VALIDAÇÕES CONTATO====================================================*/
  document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;
  
    function showError(id, message) {
        document.getElementById(id).textContent = message;
    }
  
    let nomeCompleto = document.getElementById("NomeCompleto").value.trim();
    let email = document.getElementById("Email").value.trim();
    let assunto = document.getElementById("Assunto").value.trim();
  
    if (nomeCompleto === "") {
        showError("errorNomeCompleto", "O nome é obrigatório.");
        valid = false;
    } else {
        showError("errorNomeCompleto", "");
    }
  
    if (email === "" || !email.includes("@")) {
        showError("errorEmail", "E-mail válido é obrigatório.");
        valid = false;
    } else {
        showError("errorEmail", "");
    }
  
    if (assunto === "") {
        showError("errorAssunto", "O campo de assunto não pode estar vazio.");
        valid = false;
    } else {
        showError("errorAssunto", "");
    }
  
    if (valid) {
        alert("Formulário enviado com sucesso!");
    }
  });
