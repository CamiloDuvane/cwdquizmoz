const questions = [
  {
    question: "Qual é a capital de Moçambique?",
    options: ["Maputo", "Beira", "Nampula", "Quelimane"],
    correct: 0
  },
  {
    question: "Qual é a moeda oficial de Moçambique?",
    options: ["Kwanza", "Metical", "Rand", "Pula"],
    correct: 1
  },
  {
    question: "Qual é o maior parque nacional de Moçambique?",
    options: ["Parque Nacional da Gorongosa", "Parque Nacional do Limpopo", "Parque Nacional das Quirimbas", "Reserva Nacional do Niassa"],
    correct: 3
  },
  {
    question: "Qual é o prato tradicional moçambicano feito com amendoim e folhas de mandioca?",
    options: ["Pap", "Xima", "Matapa", "Chamuça"],
    correct: 2
  },
  {
    question: "Quem foi o primeiro presidente de Moçambique independente?",
    options: ["Eduardo Mondlane", "Samora Machel", "Joaquim Chissano", "Armando Guebuza"],
    correct: 1
  },
  {
    question: "Em que ano Moçambique conquistou sua independência de Portugal?",
    options: ["1974", "1975", "1976", "1977"],
    correct: 1
  },
  {
    question: "Qual é o rio mais longo de Moçambique?",
    options: ["Rio Zambeze", "Rio Limpopo", "Rio Save", "Rio Rovuma"],
    correct: 0
  },
  {
    question: "Qual é a língua oficial de Moçambique?",
    options: ["Português", "Suaíli", "Inglês", "Changana"],
    correct: 0
  },
  {
    question: "Qual é o maior lago de Moçambique?",
    options: ["Lago Niassa", "Lago Cahora Bassa", "Lago Chilwa", "Lago Chiuta"],
    correct: 0
  },
  {
    question: "Qual é o principal porto de Moçambique?",
    options: ["Porto de Maputo", "Porto da Beira", "Porto de Nacala", "Porto de Pemba"],
    correct: 0
  },
  {
    question: "Qual é o ponto mais alto de Moçambique?",
    options: ["Monte Binga", "Monte Namuli", "Monte Chiperone", "Monte Mabu"],
    correct: 0
  },
  {
    question: "Qual é o principal produto de exportação de Moçambique?",
    options: ["Carvão", "Algodão", "Castanha de caju", "Camarão"],
    correct: 0
  },
  {
    question: "Que famoso explorador português deu o nome à Baía de Maputo?",
    options: ["Vasco da Gama", "Lourenço Marques", "Bartolomeu Dias", "Pedro Álvares Cabral"],
    correct: 1
  },
  {
    question: "Qual é o instrumento musical tradicional de Moçambique feito com uma cabaça?",
    options: ["Mbira", "Timbila", "Xitende", "Xigubo"],
    correct: 0
  },
  {
    question: "Qual é o animal nacional de Moçambique?",
    options: ["Elefante", "Leão", "Zebra", "Gnu"],
    correct: 1
  },
  {
    question: "Qual é o nome da dança tradicional moçambicana que utiliza pernas de pau?",
    options: ["Makwaela", "Xigubo", "Mapiko", "Tufo"],
    correct: 2
  },
  {
    question: "Qual é o nome do arquipélago famoso por suas praias paradisíacas no norte de Moçambique?",
    options: ["Arquipélago de Bazaruto", "Arquipélago das Quirimbas", "Ilhas Primeiras e Segundas", "Ilha de Moçambique"],
    correct: 1
  },
  {
    question: "Qual é o nome da batalha decisiva que marcou o fim da presença portuguesa em Moçambique?",
    options: ["Batalha de Mueda", "Batalha de Nametil", "Batalha de Chai", "Batalha de Gungunhana"],
    correct: 2
  },
  {
    question: "Qual é o esporte mais popular em Moçambique?",
    options: ["Futebol", "Basquete", "Críquete", "Atletismo"],
    correct: 0
  },
  {
    question: "Qual é o nome da ilha que foi a primeira capital de Moçambique?",
    options: ["Ilha de Inhaca", "Ilha de Moçambique", "Ilha do Ibo", "Ilha de Bazaruto"],
    correct: 1
  },
  {
    question: "Qual é o nome do famoso escritor moçambicano, autor de 'Terra Sonâmbula'?",
    options: ["Mia Couto", "Paulina Chiziane", "Ungulani Ba Ka Khosa", "José Craveirinha"],
    correct: 0
  },
  {
    question: "Qual é o nome da famosa pintora moçambicana conhecida por seus quadros coloridos?",
    options: ["Bertina Lopes", "Malangatana", "Reinata Sadimba", "Gemuce"],
    correct: 1
  },
  {
    question: "Qual é o nome do tratado que pôs fim à guerra civil em Moçambique em 1992?",
    options: ["Tratado de Lusaka", "Acordo de Nkomati", "Acordo Geral de Paz", "Tratado de Maputo"],
    correct: 2
  },
  {
    question: "Qual é o nome da antiga moeda de Moçambique, usada antes do Metical?",
    options: ["Escudo", "Real", "Cruzado", "Pataca"],
    correct: 0
  },
  {
    question: "Qual é o nome do famoso fotógrafo moçambicano conhecido por suas fotos em preto e branco?",
    options: ["Ricardo Rangel", "Kok Nam", "Naíta Ussene", "Sérgio Santimano"],
    correct: 0
  },
  {
    question: "Qual é o nome da árvore nacional de Moçambique?",
    options: ["Embondeiro", "Mafurreira", "Canhoeiro", "Umbila"],
    correct: 0
  },
  {
    question: "Qual é o nome do grupo étnico mais numeroso em Moçambique?",
    options: ["Makonde", "Changana", "Makua", "Sena"],
    correct: 2
  },
  {
    question: "Qual é o nome da praia mais famosa de Maputo?",
    options: ["Praia do Tofo", "Praia da Costa do Sol", "Praia do Bilene", "Praia de Ponta do Ouro"],
    correct: 1
  },
  {
    question: "Qual é o nome do famoso jogador de futebol moçambicano que jogou pelo Benfica?",
    options: ["Eusébio", "Mário Coluna", "Hilário", "Abel Xavier"],
    correct: 0
  },
  {
    question: "Qual é o nome da maior ilha de Moçambique?",
    options: ["Ilha de Moçambique", "Ilha do Ibo", "Ilha de Inhaca", "Ilha de Bazaruto"],
    correct: 2
  },
  {
    question: "Qual é o nome do famoso mercado de artesanato em Maputo?",
    options: ["Mercado Central", "Feira de Artesanato", "Mercado do Peixe", "Feima"],
    correct: 3
  },
  {
    question: "Qual é o nome da famosa escultura em Maputo que simboliza a luta pela independência?",
    options: ["Monumento da Independência", "Estátua de Samora Machel", "Monumento aos Heróis Moçambicanos", "Escultura da Liberdade"],
    correct: 2
  },
  {
    question: "Qual é o nome do estilo musical moçambicano que mistura ritmos tradicionais com influências modernas?",
    options: ["Marrabenta", "Pandza", "Xigubo", "Tufo"],
    correct: 0
  },
  {
    question: "Qual é o nome da primeira mulher primeira-ministra de Moçambique?",
    options: ["Graça Machel", "Luísa Diogo", "Verónica Macamo", "Alcinda Abreu"],
    correct: 1
  },
  {
    question: "Qual é o nome do famoso parque marinho de Moçambique, conhecido por suas baleias?",
    options: ["Parque Nacional das Quirimbas", "Reserva Marinha Parcial da Ponta do Ouro", "Parque Nacional do Arquipélago de Bazaruto", "Reserva Especial de Maputo"],
    correct: 1
  },
  {
    question: "Qual é o nome da antiga companhia que administrou grande parte de Moçambique durante o período colonial?",
    options: ["Companhia de Moçambique", "Companhia do Niassa", "Companhia da Zambézia", "Companhia do Índico"],
    correct: 0
  },
  {
    question: "Qual é o nome do famoso poeta moçambicano, considerado o 'pai da poesia moçambicana'?",
    options: ["José Craveirinha", "Noémia de Sousa", "Rui Knopfli", "Luís Bernardo Honwana"],
    correct: 0
  },
  {
    question: "Qual é o nome da famosa praia no sul de Moçambique, conhecida pelo mergulho com tubarões?",
    options: ["Praia do Tofo", "Praia da Barra", "Praia de Vilanculos", "Praia de Ponta do Ouro"],
    correct: 0
  },
  {
    question: "Qual é o nome do famoso resort em uma ilha privada no Arquipélago de Bazaruto?",
    options: ["Anantara Bazaruto", "Azura Benguerra", "&Beyond Benguerra Island", "Pestana Bazaruto Lodge"],
    correct: 2
  },
  {
    question: "Qual é o nome do famoso líder tradicional que resistiu à ocupação portuguesa no sul de Moçambique?",
    options: ["Gungunhana", "Maguiguana", "Ngungunyane", "Mawewe"],
    correct: 0
  },
  {
    question: "Qual é o nome da famosa fortaleza portuguesa em Maputo?",
    options: ["Fortaleza de Maputo", "Fortaleza de São Sebastião", "Fortaleza de Nossa Senhora da Conceição", "Fortaleza de Santo António"],
    correct: 2
  },
  {
    question: "Qual é o nome do famoso festival de cinema que ocorre anualmente em Maputo?",
    options: ["DocKanema", "Maputo International Film Festival", "KUGOMA", "Mozambique Film Festival"],
    correct: 0
  },
  {
    question: "Qual é o nome da famosa reserva de caça no sul de Moçambique?",
    options: ["Reserva Especial de Maputo", "Reserva do Niassa", "Reserva do Gilé", "Reserva de Marromeu"],
    correct: 0
  },
  {
    question: "Qual é o nome do famoso pintor moçambicano conhecido por suas obras surrealistas?",
    options: ["Malangatana", "Chichorro", "Naguib", "Victor Sousa"],
    correct: 0
  },
  {
    question: "Qual é o nome da famosa praia no norte de Moçambique, conhecida pelo kitesurf?",
    options: ["Praia do Wimbe", "Praia de Vilanculos", "Praia de Pemba", "Praia de Nacala"],
    correct: 0
  },
  {
    question: "Qual é o nome do famoso farol na Ilha de Moçambique?",
    options: ["Farol de São Sebastião", "Farol do Cabo Delgado", "Farol de Inhaca", "Farol de Macuti"],
    correct: 0
  },
  {
    question: "Qual é o nome da famosa estátua em Maputo que representa a luta contra o colonialismo?",
    options: ["Estátua da Independência", "Estátua de Samora Machel", "Monumento aos Heróis Moçambicanos", "Estátua da Liberdade"],
    correct: 1
  },
  {
    question: "Qual é o nome do famoso festival de música que ocorre anualmente em Maputo?",
    options: ["Azgo Festival", "Bushfire Festival", "Lake of Stars", "Strab Festival"],
    correct: 0
  },
  {
    question: "Qual é o nome da famosa ponte que liga Maputo à Catembe?",
    options: ["Ponte Maputo-Catembe", "Ponte da Unidade", "Ponte 25 de Setembro", "Ponte da Baía"],
    correct: 0
  },
  {
    question: "Qual é o nome do famoso arquiteto moçambicano conhecido por seus projetos sustentáveis?",
    options: ["José Forjaz", "Pancho Guedes", "João José Tinoco", "Miguel Guedes"],
    correct: 0
  }
];

let currentQuestion = 0;
let points = 0;
let timer;
let selectedAnswer = null;
let playerProfile = {
  name: '',
  age: '',
  gender: '',
  contact: ''
};

window.initGame = () => {
  currentQuestion = 0;
  points = 0;
  loadQuestion();
};

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question').textContent = q.question;
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';
  q.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option';
    button.textContent = option;
    button.onclick = () => selectAnswer(index);
    optionsContainer.appendChild(button);
  });
  startTimer();
}

function startTimer() {
  let timeLeft = 30;
  document.getElementById('timer').textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswer();
    }
  }, 1000);
}

function selectAnswer(index) {
  if (selectedAnswer === null) {
    selectedAnswer = index;
    checkAnswer();
  }
}

function checkAnswer() {
  clearInterval(timer);
  const q = questions[currentQuestion];
  const options = document.querySelectorAll('.option');

  options[q.correct].classList.add('correct');
  options.forEach(option => option.disabled = true);

  if (selectedAnswer === null) {
    points = Math.max(0, points - 5);
  } else if (selectedAnswer !== q.correct) {
    options[selectedAnswer].classList.add('incorrect');
    points = Math.max(0, points - 5);
  } else if (selectedAnswer === q.correct) {
    points += 5;
  }

  document.getElementById('prize').textContent = `Pontos: ${points}`;

  const resultRef = ref(database, 'quiz_results/' + window.currentUser.uid);
  const resultData = {
    question: questions[currentQuestion].question,
    selectedAnswer: selectedAnswer,
    correct: selectedAnswer === questions[currentQuestion].correct,
    timestamp: new Date().toISOString()
  };
  set(resultRef, resultData);

  setTimeout(() => {
    currentQuestion++;
    selectedAnswer = null;
    if (points > 0 && currentQuestion < questions.length) {
      loadQuestion();
    } else {
      endGame(points > 0);
    }
  }, 3000);
}

function endGame(hasPoints) {
  clearInterval(timer);
  const message = hasPoints ?
    `Muito obrigado por jogar, ${playerProfile.name}! Você terminou o jogo com um saldo de ${points} pontos. Sua participação foi incrível!` :
    `Agradecemos sua participação, ${playerProfile.name}! Infelizmente, você ficou sem saldo de pontos. Tente novamente e mostre seu conhecimento sobre Moçambique!`;

  // Save game result to Firebase
  saveGameResultToFirebase(playerProfile, points);

  document.querySelector('.game-container').innerHTML = `
    <h1>CWD Moçambique Quiz</h1>
    <div class="question">${message}</div>
    <button class="option" onclick="generateAndShareResult()" style="margin-bottom: 10px;">Baixar e Compartilhar Resultado</button>
    <button class="option" onclick="location.reload()">Jogar Novamente</button>
  `;
}

function generateAndShareResult() {
  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 400;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#009933';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fff';
  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('CWD Moçambique Quiz', canvas.width / 2, 50);
  ctx.font = '18px Arial';
  ctx.fillText(`Nome: ${playerProfile.name}`, canvas.width / 2, 100);
  ctx.fillText(`Idade: ${playerProfile.age}`, canvas.width / 2, 130);
  ctx.fillText(`Sexo: ${playerProfile.gender}`, canvas.width / 2, 160);
  ctx.fillText(`Contacto: ${playerProfile.contact}`, canvas.width / 2, 190);
  ctx.fillText(`Pontuação: ${points}`, canvas.width / 2, 220);

  const date = new Date();
  ctx.fillText(`Data: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`, canvas.width / 2, 250);
  ctx.fillText('@CWD2024', canvas.width / 2, 350);

  const dataUrl = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = 'CWD_Mocambique_Quiz_Result.png';
  link.click();

  const whatsappMessage = encodeURIComponent(`Confira meu resultado no CWD Moçambique Quiz!\nPontuação: ${points}\n@CWD2024`);
  const whatsappUrl = `https://wa.me/258842479404?text=${whatsappMessage}`;
  window.open(whatsappUrl, '_blank');
}

function saveProfileAndStartGame() {
  const name = document.getElementById('playerName').value;
  const age = document.getElementById('playerAge').value;
  const gender = document.getElementById('playerGender').value;
  const contact = document.getElementById('playerContact').value;

  if (name && age && gender && contact) {
    playerProfile.name = name;
    playerProfile.age = age;
    playerProfile.gender = gender;
    playerProfile.contact = contact;

    localStorage.setItem('playerProfile', JSON.stringify(playerProfile));

    // Save profile to Firebase
    saveProfileToFirebase(playerProfile);

    document.getElementById('profileModal').style.display = 'none';
    document.querySelector('.game-container').style.display = 'block';

    // Request full screen mode
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    }

    initGame();
  } else {
    alert('Por favor, preencha todos os campos do perfil.');
  }
}

function checkProfile() {
  // Wait for DOM elements to be available
  if (!document.getElementById('playerName')) {
    console.warn('Profile form elements not found yet');
    return;
  }

  const savedProfile = localStorage.getItem('playerProfile');
  if (savedProfile) {
    playerProfile = JSON.parse(savedProfile);
    document.getElementById('playerName').value = playerProfile.name || '';
    document.getElementById('playerAge').value = playerProfile.age || '';
    document.getElementById('playerGender').value = playerProfile.gender || '';
    document.getElementById('playerContact').value = playerProfile.contact || '';
  }
}

function initializeProfile() {
  checkProfile();
}

// Export for use in auth.js
window.initializeProfile = initializeProfile;

async function saveGameResultToFirebase(profile, score) {
  if (!window.currentUser) return;
  
  const resultRef = ref(database, `game_results/${window.currentUser.uid}`);
  const resultData = {
    profile,
    score,
    timestamp: new Date().toISOString()
  };
  
  try {
    await set(resultRef, resultData);
    console.log('Game result saved to Firebase');
  } catch (error) {
    console.error('Error saving game result:', error);
  }
}