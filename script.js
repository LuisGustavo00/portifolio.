document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();
    
    if (nome === "") {
        alert("Por favor, insira seu nome.");
        return;
    }
    
    if (email === "" || !email.includes("@")) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }
    
    if (mensagem === "") {
        alert("Por favor, escreva uma mensagem.");
        return;
    }
    
    alert("Mensagem enviada com sucesso!");

});



const projetos = document.querySelectorAll(".projeto");
projetos.forEach(projeto => {
    projeto.addEventListener("mouseover", () => {
        projeto.style.transform = "scale(1.05)"; 
    });
    projeto.addEventListener("mouseout", () => {
        projeto.style.transform = "scale(1)";
    });
});
