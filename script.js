let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');
let mudançabtn = document.getElementById('modo');
// Variáveis para controle do cronômetro
let seconds = 0;
let intervalId = null;

// Adiciona eventos aos botões
startButton.addEventListener('click', iniciarTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
mudançabtn.addEventListener('click', mudarModo);
   
function mudarModo() {
    let body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        mudançabtn.textContent = 'Modo Escuro';
        mudançabtn.style.backgroundColor = '#ffffff'; // Cor do botão no modo claro
        mudançabtn.style.color = '#000000'; // Texto do botão no modo claro
        body.style.backgroundColor = '#f0f0f0'; // Cor de fundo no modo claro   
        timer.style.color = '#000'; // Cor do texto do cronômetro no modo claro
        buttoms.style.backgroundColor = '#444'; // Cor dos botões no modo claro
    } else {
        body.classList.add('dark-mode');
        mudançabtn.textContent = 'Modo Claro';
        mudançabtn.style.backgroundColor = '#000000'; // Cor do botão no modo escuro
        mudançabtn.style.color = '#ffffff'; // Texto do botão no modo escuro
        body.style.backgroundColor = '#121212'; // Cor de fundo no modo escuro
        timer.style.color = '#fff'; // Cor do texto do cronômetro no modo escuro
        buttoms.style.backgroundColor = '#f0f8ff';
    }
}

// Função para iniciar o cronômetro
function iniciarTimer() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

// Função para pausar o cronômetro
function pauseTimer() {
    clearInterval(intervalId);
    intervalId = null;
}

// Função para reiniciar o cronômetro
function resetTimer() {
    pauseTimer();
    seconds = 0;
    updateDisplay();
}

// Função para formatar o tempo em minutos e segundos
function formatTime(seconds) {
    const minutos = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutos).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
// Função para atualizar o display do cronômetro
function updateDisplay() {
    timerDisplay.textContent = formatTime(seconds);
}

// Inicializa o display
updateDisplay();