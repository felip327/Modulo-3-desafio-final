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
    let imagem = "";

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        signo = "Áries"; 
        cavaleiro = "Mu de Áries";
        poder = "Domínio da telecinese, teletransporte e da técnica Revolução Estelar.";
        imagem = "https://static.wikia.nocookie.net/anicrossbr/images/f/f7/Mu_de_%C3%81ries.png/revision/latest?cb=20151029184053&path-prefix=pt-br"
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        signo = "Touro"; 
        cavaleiro = "Aldebaran de Touro"; 
        poder = "Força física incomparável e o poderoso golpe Grande Chifre.";
        imagem = "https://static.wikia.nocookie.net/ssu/images/7/72/Aldebaran_card.png/revision/latest?cb=20190614123815"
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        signo = "Gêmeos"; 
        cavaleiro = "Saga de Gêmeos"; 
        poder = "Capacidade de destruir estrelas com a Explosão Galáctica e distorcer dimensões.";
        imagem = "https://static.wikia.nocookie.net/saintseya/images/2/2d/Saga_de_G%C3%AAmeos_%28Ouro%29.png/revision/latest?cb=20160321190429&path-prefix=pt"
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        signo = "Câncer"; 
        cavaleiro = "Máscara da Morte de Câncer"; 
        poder = "Poder de enviar almas ao submundo com as Ondas do Inferno.";
        imagem = "https://static.wikia.nocookie.net/saintseya/images/1/1d/M%C3%A1scara_da_Morte_48.png/revision/latest?cb=20171019173459&path-prefix=pt"
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        signo = "Leão"; 
        cavaleiro = "Aiolia de Leão"; 
        poder = "Ataques devastadores na velocidade da luz como a Cápsula do Poder.";
        imagem = "https://static.wikia.nocookie.net/saintseya/images/f/f5/Aiolia_de_Le%C3%A3o.png/revision/latest?cb=20160108161043&path-prefix=pt"
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        signo = "Virgem"; 
        cavaleiro = "Shaka de Virgem"; 
        poder = "Conhecido como o homem mais próximo de Deus, detém o Tesouro do Céu.";
        imagem = "https://static.wikia.nocookie.net/saintseya/images/1/11/Shaka_de_Virgem.png/revision/latest?cb=20160225181250&path-prefix=pt"
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        signo = "Libra"; 
        cavaleiro = "Dohko de Libra"; 
        poder = "Sabedoria ancestral e o impacto devastador da Cólera dos Cem Dragões.";
        imagem = "https://static.wikia.nocookie.net/saintseya/images/5/59/Dohko_de_Libra_em_Soul_of_Gold.png/revision/latest?cb=20150816031259&path-prefix=pt"
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        signo = "Escorpião"; 
        cavaleiro = "Milo de Escorpião"; 
        poder = "Golpes certeiros e mortais que paralisam o inimigo com a Agulha Escarlate.";
        imagem = "https://static.wikia.nocookie.net/saintseya/images/4/4c/Milo_de_Escorpi%C3%A3o.png/revision/latest?cb=20160115184636&path-prefix=pt"
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        signo = "Sagitário"; 
        cavaleiro = "Aiolos de Sagitário"; 
        poder = "Determinação implacável e portador da flecha dourada da justiça.";
        imagem = "https://static.wikia.nocookie.net/anicrossbr/images/c/c4/Sagittarius_aiolos_by_srw13.jpg/revision/latest?cb=20151029194427&path-prefix=pt-br"
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        signo = "Capricórnio"; 
        cavaleiro = "Shura de Capricórnio"; 
        poder = "Braços e pernas tão afiados quanto a espada sagrada Excalibur.";
        imagem = "https://static.wikia.nocookie.net/ssu/images/7/77/Shura_OCE_card.png/revision/latest?cb=20180104070208"
    } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        signo = "Aquário"; 
        cavaleiro = "Camus de Aquário"; 
        poder = "Manipulação do gelo e mestre da energia congelante do Zero Absoluto.";
        imagem = "https://static.wikia.nocookie.net/os-cavaleiros-de-ouro/images/9/97/Camus15.jpg/revision/latest/scale-to-width-down/275?cb=20150919065128&path-prefix=pt-br"
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        signo = "Peixes"; 
        cavaleiro = "Afrodite de Peixes"; 
        poder = "Beleza fatal e uso de rosas demoníacas para derrotar seus oponentes.";
        imagem = "https://static.wikia.nocookie.net/saintseya/images/c/ce/Afrodite_ressurge_para_enfrentar_Loki.png/revision/latest?cb=20160308165845&path-prefix=pt"
    }

    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = `
        <h2 class="nome-cavaleiro">${cavaleiro}</h2>
        <img src="${imagem}" alt="Imagem de ${cavaleiro}" class="imagem-cavaleiro">
        <p><strong>Signo de ${signo}</strong></p>
        <p class="descricao">${poder}</p>
    `;
    
    divResultado.classList.remove("escondido");
}