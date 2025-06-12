let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');

// Variáveis para controle do cronômetro
let seconds = 0;
let intervalId = null;

// Adiciona eventos aos botões
startButton.addEventListener('click', iniciarTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);



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