/*===================================CONTADOR=======================================*/
function startCounters() {
  const counters = document.querySelectorAll(".container-estatisticas .estatistica .contador");
  const limits = [300, 10, 20,40];

  counters.forEach((counter, index) => {
    let start = 0;
    const limit = limits[index];
    const increment = Math.ceil(limit / 100);
    const interval = setInterval(() => {
      start += increment;
      if (start >= limit) {
        start = limit;
        clearInterval(interval);
        counter.style.color = "#028DD0";
      }
      counter.textContent = `+${start}`;
    }, 35);
  });
}

function isSectionVisible(section) {
  const rect = section.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function handleCounters() {
  const section = document.querySelector(".container-estatisticas");

  if (isSectionVisible(section)) {
    startCounters();
    document.removeEventListener("scroll", handleCounters); 
  }
}

window.addEventListener("load", handleCounters);

document.addEventListener("scroll", handleCounters);
  

  /*===================================MENU HAMBURGUER=======================================*/
  function toggleMenu() {
    document.getElementById('menu').classList.toggle('active');
}
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


  /*=====================================LOADING=============================================*/
const sections = document.querySelectorAll('.overlay');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});


    /*=======================================VALIDAÇÕES PEDIR ORÇAMENTO====================================================*/
    document.getElementById("orcamentoForm").addEventListener("submit", function(event) {
      event.preventDefault();
      let valid = true;
      
      function showError(id, message) {
          document.getElementById(id).textContent = message;
      }
      
      let nomeCompleto = document.getElementById("nomeCompleto").value.trim();
      let email = document.getElementById("Email").value.trim();
      let telefone = document.getElementById("Telefone").value.trim();
      let servico = document.getElementById("Servico").value.trim();
      let msg = document.getElementById("msg").value.trim();
      
      if (nomeCompleto === "") {
          showError("errorNomeCompleto", "Nome Completo é obrigatório.");
          valid = false;
      } else {
          showError("errorNomeCompleto", "");
      }
      
      if (email === "" || !email.includes("@")) {
          showError("errorEmail", "Digite um e-mail válido.");
          valid = false;
      } else {
          showError("errorEmail", "");
      }
      
      if (!telefone.startsWith("+244 ") || phone.length < 7) {
          showError("errorTelefone", "Digite um número de telefone válido.");
          valid = false;
      } else {
          showError("errorTelefone", "");
      }
      
      if (servico === "") {
          showError("errorServico", "Digite o serviço que deseja solicitar.");
          valid = false;
      } else {
          showError("errorServico", "");
      }
      
      if (msg === "") {
          showError("errorMsg", "Este campo não pode estar vazio.");
          valid = false;
      } else {
          showError("errorMsg", "");
      }
      
      if (valid) {
          alert("Enviando com sucesso!");
      }
  });