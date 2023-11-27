var audio = document.getElementById("myAudio");
var currentAudio = null;

// Воспроизведение аудио
function playAudio(audioElement) {
  if (currentAudio) {
    currentAudio.pause(); // Приостанавливаем текущее аудио, если оно есть
  }
  
  audioElement.play(); // Воспроизводим новое аудио
  currentAudio = audioElement; // Устанавливаем новое аудио как текущее
}

// Пауза аудио
function pauseAudio() {
  if (currentAudio) {
    currentAudio.pause();
  }
}

// Остановка аудио и сброс текущей позиции
function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null; // Сбрасываем текущее аудио
  }
}