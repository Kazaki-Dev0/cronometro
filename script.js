let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');

// Variáveis para controle do cronômetro
let seconds = 0;
let intervalId = null;

// Função para formatar o tempo em minutos e segundos
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Função para atualizar o display do cronômetro
function updateDisplay() {
    timerDisplay.textContent = formatTime(seconds);
}

// Função para iniciar o cronômetro
function startTimer() {
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

// Adiciona eventos aos botões
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Inicializa o display
updateDisplay();