function descobrirCavaleiro() {
    let inputData = document.getElementById("dataNascimento").value;
    
    if (!inputData) {
        alert("Eleve o seu cosmo e insira uma data válida!");
        return;
    }

    let partesData = inputData.split("-");
    let mes = parseInt(partesData[1]);
    let dia = parseInt(partesData[2]);

    let signo = "";
    let cavaleiro = "";
    let poder = "";

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        signo = "Áries"; 
        cavaleiro = "Mu de Áries"; 
        poder = "Domínio da telecinese, teletransporte e da técnica Revolução Estelar.";
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        signo = "Touro"; 
        cavaleiro = "Aldebaran de Touro"; 
        poder = "Força física incomparável e o poderoso golpe Grande Chifre.";
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        signo = "Gêmeos"; 
        cavaleiro = "Saga de Gêmeos"; 
        poder = "Capacidade de destruir estrelas com a Explosão Galáctica e distorcer dimensões.";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        signo = "Câncer"; 
        cavaleiro = "Máscara da Morte de Câncer"; 
        poder = "Poder de enviar almas ao submundo com as Ondas do Inferno.";
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        signo = "Leão"; 
        cavaleiro = "Aiolia de Leão"; 
        poder = "Ataques devastadores na velocidade da luz como a Cápsula do Poder.";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        signo = "Virgem"; 
        cavaleiro = "Shaka de Virgem"; 
        poder = "Conhecido como o homem mais próximo de Deus, detém o Tesouro do Céu.";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        signo = "Libra"; 
        cavaleiro = "Dohko de Libra"; 
        poder = "Sabedoria ancestral e o impacto devastador da Cólera dos Cem Dragões.";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        signo = "Escorpião"; 
        cavaleiro = "Milo de Escorpião"; 
        poder = "Golpes certeiros e mortais que paralisam o inimigo com a Agulha Escarlate.";
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        signo = "Sagitário"; 
        cavaleiro = "Aiolos de Sagitário"; 
        poder = "Determinação implacável e portador da flecha dourada da justiça.";
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        signo = "Capricórnio"; 
        cavaleiro = "Shura de Capricórnio"; 
        poder = "Braços e pernas tão afiados quanto a espada sagrada Excalibur.";
    } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        signo = "Aquário"; 
        cavaleiro = "Camus de Aquário"; 
        poder = "Manipulação do gelo e mestre da energia congelante do Zero Absoluto.";
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        signo = "Peixes"; 
        cavaleiro = "Afrodite de Peixes"; 
        poder = "Beleza fatal e uso de rosas demoníacas para derrotar seus oponentes.";
    }

    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = `
        <h2 class="nome-cavaleiro">${cavaleiro}</h2>
        <p><strong>Signo de ${signo}</strong></p>
        <p class="descricao">${poder}</p>
    `;
    
    divResultado.classList.remove("escondido");
}